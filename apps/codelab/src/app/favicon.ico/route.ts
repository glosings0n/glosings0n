import { readSharedAsset } from "@repo/assets/server";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const asset = await readSharedAsset("favicon.ico");
  if (!asset) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(new Uint8Array(asset.data), {
    headers: {
      "Content-Type": asset.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
