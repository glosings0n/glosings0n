import { ASSET_FILENAMES, readSharedAsset } from "@repo/assets/server";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function generateStaticParams() {
  return ASSET_FILENAMES.map((filename) => ({ filename }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ filename: string }> },
) {
  const { filename } = await context.params;
  const asset = await readSharedAsset(filename);
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
