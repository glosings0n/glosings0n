import { createVerify } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const FIREBASE_CERTS_URL =
  "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";

let cachedCerts: Record<string, string> | null = null;
let cacheExpiresAt = 0;

async function getFirebasePublicCerts(
  forceRefresh = false,
): Promise<Record<string, string>> {
  const now = Date.now();
  if (!forceRefresh && cachedCerts && now < cacheExpiresAt) {
    return cachedCerts;
  }

  const res = await fetch(FIREBASE_CERTS_URL, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch Firebase public certificates");
  }

  const certs = (await res.json()) as Record<string, string>;
  const cacheControl = res.headers.get("cache-control") ?? "";
  const match = cacheControl.match(/max-age=(\d+)/i);
  const maxAgeSec = match?.[1] ? Number(match[1]) : 3600;

  cachedCerts = certs;
  cacheExpiresAt = now + maxAgeSec * 1000;
  return certs;
}

function decodeBase64UrlJson<T>(segment: string): T {
  const json = Buffer.from(segment, "base64url").toString("utf8");
  return JSON.parse(json) as T;
}

interface JwtHeader {
  alg?: string;
  kid?: string;
}

interface FirebaseTokenPayload {
  aud?: string;
  iss?: string;
  sub?: string;
  exp?: number;
  iat?: number;
  auth_time?: number;
  email?: string;
  email_verified?: boolean;
}

async function verifyFirebaseIdToken(
  idToken: string,
): Promise<FirebaseTokenPayload | null> {
  const parts = idToken.split(".");
  if (parts.length !== 3) return null;

  const [headerB64, payloadB64, signatureB64] = parts as [
    string,
    string,
    string,
  ];
  const header = decodeBase64UrlJson<JwtHeader>(headerB64);
  if (header.alg !== "RS256" || typeof header.kid !== "string" || !header.kid) {
    return null;
  }

  let certs = await getFirebasePublicCerts(false);
  let certPem = certs[header.kid];
  if (!certPem) {
    certs = await getFirebasePublicCerts(true);
    certPem = certs[header.kid];
  }
  if (!certPem) return null;

  const verifier = createVerify("RSA-SHA256");
  verifier.update(`${headerB64}.${payloadB64}`);
  verifier.end();

  const signature = Buffer.from(signatureB64, "base64url");
  const isValidSignature = verifier.verify(certPem, signature);
  if (!isValidSignature) return null;

  const payload = decodeBase64UrlJson<FirebaseTokenPayload>(payloadB64);
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "glosings0n";
  const nowSec = Math.floor(Date.now() / 1000);

  if (payload.aud !== projectId) return null;
  if (payload.iss !== `https://securetoken.google.com/${projectId}`) return null;
  if (
    typeof payload.sub !== "string" ||
    payload.sub.length === 0 ||
    payload.sub.length > 128
  ) {
    return null;
  }
  if (typeof payload.exp !== "number" || payload.exp <= nowSec) return null;
  if (typeof payload.iat !== "number" || payload.iat > nowSec + 300) return null;
  if (typeof payload.auth_time !== "number" || payload.auth_time > nowSec + 300) {
    return null;
  }
  if (payload.email_verified !== true || typeof payload.email !== "string") {
    return null;
  }

  return payload;
}

function getAllowedAdminEmails(): Set<string> {
  const raw = process.env.ADMIN_ALLOWED_EMAILS || "";
  return new Set(
    raw
      .split(",")
      .map((entry) => entry.trim().toLowerCase())
      .filter(Boolean),
  );
}

export async function POST(request: Request) {
  try {
    const allowedEmails = getAllowedAdminEmails();
    if (allowedEmails.size === 0) {
      return NextResponse.json({ authorized: false }, { status: 500 });
    }

    const authHeader = request.headers.get("authorization") ?? "";
    let token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7).trim()
      : "";

    if (!token) {
      const body = (await request.json().catch(() => null)) as {
        idToken?: unknown;
      } | null;
      if (body && typeof body.idToken === "string") {
        token = body.idToken.trim();
      }
    }

    if (!token) {
      return NextResponse.json({ authorized: false }, { status: 401 });
    }

    const payload = await verifyFirebaseIdToken(token);
    if (!payload || !payload.email) {
      return NextResponse.json({ authorized: false }, { status: 401 });
    }

    const email = payload.email.trim().toLowerCase();
    const authorized = allowedEmails.has(email);

    if (!authorized) {
      return NextResponse.json({ authorized: false }, { status: 403 });
    }

    return NextResponse.json({ authorized: true, email }, { status: 200 });
  } catch {
    return NextResponse.json({ authorized: false }, { status: 401 });
  }
}
