/**
 * Resize committed WebP assets to match on-page display sizes (PageSpeed / LCP).
 * Writes display-sized files; update imports in page.tsx / github-projects.ts.
 * Run: npm install --no-save sharp && node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const publicDir = join(root, "public");

/** @type {{ src: string; dest: string; width: number; height?: number; quality?: number }[]} */
const jobs = [
  // Hero logo: displayed at 8rem (128px); 256px covers 2x retina
  {
    src: "images/logo-jr.webp",
    dest: "images/logo-jr-256.webp",
    width: 256,
    height: 256,
    quality: 82,
  },
  // Project carousel: max ~960px wide on desktop
  {
    src: "images/projects/joseph/homelab-in-a-box-cover.webp",
    dest: "images/projects/joseph/homelab-in-a-box-cover-960.webp",
    width: 960,
    quality: 80,
  },
  {
    src: "images/projects/joseph/ccna-notes-cover.webp",
    dest: "images/projects/joseph/ccna-notes-cover-960.webp",
    width: 960,
    quality: 80,
  },
  {
    src: "images/projects/joseph/tabstack.webp",
    dest: "images/projects/joseph/tabstack-960.webp",
    width: 960,
    quality: 80,
  },
  {
    src: "images/projects/joseph/tubestack.webp",
    dest: "images/projects/joseph/tubestack-960.webp",
    width: 960,
    quality: 80,
  },
  {
    src: "images/projects/joseph/jr-technical-consulting.webp",
    dest: "images/projects/joseph/jr-technical-consulting-960.webp",
    width: 960,
    quality: 80,
  },
];

async function optimize({ src, dest, width, height, quality = 80 }) {
  const srcPath = join(publicDir, src);
  const destPath = join(publicDir, dest);

  if (!existsSync(srcPath)) {
    console.warn(`skip (missing): ${src}`);
    return;
  }

  let pipeline = sharp(srcPath).rotate();

  if (height) {
    pipeline = pipeline.resize(width, height, { fit: "cover", position: "centre" });
  } else {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }

  const before = (await sharp(srcPath).metadata()).size ?? 0;
  await pipeline.webp({ quality, effort: 4 }).toFile(destPath);
  const meta = await sharp(destPath).metadata();
  const after = meta.size ?? 0;

  console.log(
    `ok ${dest} → ${meta.width}x${meta.height} (${Math.round(before / 1024)}KiB → ${Math.round(after / 1024)}KiB)`,
  );
}

for (const job of jobs) {
  await optimize(job);
}

console.log("optimize-images: done");
