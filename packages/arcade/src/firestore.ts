import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  updateDoc,
  type Timestamp,
} from "firebase/firestore";
import { getFirestoreDb } from "./firebase";
import { formatScoreMetric, getArcadeGame, type GameSortOrder } from "./games";

export type SessionStatus = "active" | "paused" | "ended";

export interface ArcadeSession {
  id: string;
  gameSlug: string;
  sessionCode: string;
  eventName: string;
  status: SessionStatus;
  sortOrder: GameSortOrder;
  maxAttemptsPerPlayer: number;
  createdByEmail: string;
  createdAt?: Timestamp | null;
  updatedAt?: Timestamp | null;
}

export interface ScoreMeta {
  accuracy?: number;
  streak?: number;
  deltaMs?: number;
  tapsPerSec?: number;
}

export interface PlayerScoreEntry {
  uid: string;
  displayName: string;
  photoURL: string | null;
  score: number;
  metricLabel: string;
  attempts: number;
  meta?: ScoreMeta;
  updatedAt?: Timestamp | null;
}

export interface ArcadeConfigDoc {
  enabledGames: string[];
  featuredSessionId: string | null;
}

export function normalizeSessionCode(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function buildSessionId(gameSlug: string, sessionCode: string): string {
  return `${gameSlug}__${normalizeSessionCode(sessionCode)}`;
}

export function subscribeSession(
  gameSlug: string,
  sessionCode: string,
  callback: (session: ArcadeSession | null, error?: Error) => void,
): () => void {
  const db = getFirestoreDb();
  const id = buildSessionId(gameSlug, sessionCode);
  return onSnapshot(
    doc(db, "sessions", id),
    (snap) => {
      if (!snap.exists()) {
        callback(null);
        return;
      }
      callback({ id: snap.id, ...(snap.data() as Omit<ArcadeSession, "id">) });
    },
    (err) => callback(null, err),
  );
}

export function subscribeSessionLeaderboard(
  gameSlug: string,
  sessionCode: string,
  sortOrder: GameSortOrder,
  callback: (entries: PlayerScoreEntry[], error?: Error) => void,
): () => void {
  const db = getFirestoreDb();
  const id = buildSessionId(gameSlug, sessionCode);
  const scoresRef = collection(db, "sessions", id, "scores");
  const q = query(scoresRef, orderBy("score", sortOrder));

  return onSnapshot(
    q,
    (snap) => {
      const list: PlayerScoreEntry[] = snap.docs.map((d) => ({
        uid: d.id,
        ...(d.data() as Omit<PlayerScoreEntry, "uid">),
      }));
      callback(list);
    },
    (err) => callback([], err),
  );
}

export function subscribeAllSessions(
  callback: (sessions: ArcadeSession[], error?: Error) => void,
): () => void {
  const db = getFirestoreDb();
  const q = query(collection(db, "sessions"), orderBy("createdAt", "desc"));
  return onSnapshot(
    q,
    (snap) => {
      const list = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<ArcadeSession, "id">),
      }));
      callback(list);
    },
    (err) => callback([], err),
  );
}

export function subscribeArcadeConfig(
  callback: (config: ArcadeConfigDoc | null) => void,
): () => void {
  const db = getFirestoreDb();
  return onSnapshot(
    doc(db, "arcadeConfig", "global"),
    (snap) => {
      if (!snap.exists()) {
        callback(null);
        return;
      }
      callback(snap.data() as ArcadeConfigDoc);
    },
    () => callback(null),
  );
}

export async function getNextSequentialCode(gameSlug: string): Promise<string> {
  const db = getFirestoreDb();
  const snap = await getDocs(collection(db, "sessions"));
  let maxNum = 0;
  for (const d of snap.docs) {
    const data = d.data() as Partial<ArcadeSession>;
    if (data.gameSlug === gameSlug && data.sessionCode && /^\d+$/.test(data.sessionCode)) {
      const val = parseInt(data.sessionCode, 10);
      if (val > maxNum) maxNum = val;
    }
  }
  return String(maxNum + 1).padStart(5, "0");
}

export async function createArcadeSession(input: {
  gameSlug: string;
  sessionCode: string;
  eventName: string;
  maxAttemptsPerPlayer: number;
  createdByEmail?: string;
}): Promise<ArcadeSession> {
  const game = getArcadeGame(input.gameSlug);
  if (!game) {
    throw new Error(`Unknown game slug: ${input.gameSlug}`);
  }

  const normalizedCode = normalizeSessionCode(input.sessionCode);
  if (!normalizedCode) {
    throw new Error("Invalid session code");
  }

  const id = buildSessionId(game.slug, normalizedCode);
  const db = getFirestoreDb();
  const payload = {
    gameSlug: game.slug,
    sessionCode: normalizedCode,
    eventName: input.eventName.trim().slice(0, 100) || `Session ${normalizedCode}`,
    status: "active" as SessionStatus,
    sortOrder: game.sortOrder,
    maxAttemptsPerPlayer: Math.min(10, Math.max(1, Math.round(input.maxAttemptsPerPlayer))),
    createdByEmail: (input.createdByEmail || "").trim().toLowerCase(),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  await setDoc(doc(db, "sessions", id), payload);
  return {
    id,
    ...payload,
    createdAt: null,
    updatedAt: null,
  };
}

export async function updateArcadeSession(
  sessionId: string,
  patch: Partial<Pick<ArcadeSession, "status" | "eventName" | "maxAttemptsPerPlayer">>,
): Promise<void> {
  const db = getFirestoreDb();
  await updateDoc(doc(db, "sessions", sessionId), {
    ...patch,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteArcadeSession(sessionId: string): Promise<void> {
  const db = getFirestoreDb();
  const scoresSnap = await getDocs(collection(db, "sessions", sessionId, "scores"));
  await Promise.all(scoresSnap.docs.map((d) => deleteDoc(d.ref)));
  await deleteDoc(doc(db, "sessions", sessionId));
}

export async function deletePlayerScore(
  sessionId: string,
  playerUid: string,
): Promise<void> {
  const db = getFirestoreDb();
  await deleteDoc(doc(db, "sessions", sessionId, "scores", playerUid));
}

export async function updateArcadeConfig(
  config: Partial<ArcadeConfigDoc>,
): Promise<void> {
  const db = getFirestoreDb();
  await setDoc(
    doc(db, "arcadeConfig", "global"),
    {
      ...config,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function submitPlayerScore(input: {
  gameSlug: string;
  sessionCode: string;
  uid: string;
  displayName: string;
  photoURL: string | null;
  score: number;
  meta?: ScoreMeta;
}): Promise<{ savedScore: number; attempts: number; improved: boolean }> {
  const game = getArcadeGame(input.gameSlug);
  if (!game) {
    throw new Error(`Unknown game slug: ${input.gameSlug}`);
  }

  const db = getFirestoreDb();
  const sessionId = buildSessionId(input.gameSlug, input.sessionCode);
  const sessionRef = doc(db, "sessions", sessionId);
  const scoreRef = doc(db, "sessions", sessionId, "scores", input.uid);
  const cleanName = input.displayName.trim().slice(0, 40) || "Player";
  const clampedScore = Math.max(0, Math.min(1000000, Math.round(input.score)));

  return runTransaction(db, async (tx) => {
    const sessionSnap = await tx.get(sessionRef);
    if (!sessionSnap.exists()) {
      throw new Error("Session not found");
    }
    const session = sessionSnap.data() as ArcadeSession;
    if (session.status !== "active") {
      throw new Error("Session is not currently active");
    }

    const existingSnap = await tx.get(scoreRef);
    if (!existingSnap.exists()) {
      const metricLabel = formatScoreMetric(game, clampedScore);
      tx.set(scoreRef, {
        uid: input.uid,
        displayName: cleanName,
        photoURL: input.photoURL,
        score: clampedScore,
        metricLabel,
        attempts: 1,
        meta: input.meta ?? {},
        updatedAt: serverTimestamp(),
      });
      return { savedScore: clampedScore, attempts: 1, improved: true };
    }

    const existing = existingSnap.data() as PlayerScoreEntry;
    const nextAttempts = (existing.attempts || 1) + 1;
    if (nextAttempts > session.maxAttemptsPerPlayer) {
      throw new Error("Maximum attempts reached for this session");
    }

    const isBetter =
      game.sortOrder === "asc"
        ? clampedScore < existing.score
        : clampedScore > existing.score;

    const bestScore = isBetter ? clampedScore : existing.score;
    const metricLabel = formatScoreMetric(game, bestScore);

    tx.update(scoreRef, {
      displayName: cleanName,
      photoURL: input.photoURL,
      score: bestScore,
      metricLabel,
      attempts: nextAttempts,
      meta: isBetter ? (input.meta ?? {}) : (existing.meta ?? {}),
      updatedAt: serverTimestamp(),
    });

    return { savedScore: bestScore, attempts: nextAttempts, improved: isBetter };
  });
}
