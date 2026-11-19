import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ASSETS_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../assets",
);

export const ASSET_CONTENT_TYPES: Record<string, string> = {
  "community.jpg": "image/jpeg",
  "favicon.ico": "image/png",
  "favicon.png": "image/png",
  "ffsc.png": "image/png",
  "hero.png": "image/png",
  "logo.svg": "image/svg+xml",
  "losingtek.png": "image/png",
  "sautilm.svg": "image/svg+xml",
  "speaker.jpeg": "image/jpeg",
};

export const ASSET_FILENAMES = Object.keys(ASSET_CONTENT_TYPES);

export async function readSharedAsset(
  filename: string,
): Promise<{ data: Buffer; contentType: string } | null> {
  const contentType = ASSET_CONTENT_TYPES[filename];
  if (!contentType) {
    return null;
  }

  const filePath = path.join(ASSETS_DIR, filename);
  const data = await readFile(filePath);
  return { data, contentType };
}
