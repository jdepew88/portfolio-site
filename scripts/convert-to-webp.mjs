import sharp from "sharp";
import { existsSync } from "node:fs";
import { copyFile, unlink } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const publicDir = join(root, "public");

/** @type {{ src: string; dest?: string; quality?: number; removeSrc?: boolean }[]} */
const jobs = [
  {
    src: join(
      root,
      "../../c-Users-Joe-cursor-projects-joeydepew-me-private-test/assets/c__Users_Joe_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_bdb2c0c6-dd6a-42a1-9783-db89610f0492-ca5c3750-8d1d-4ba0-814f-063c7b796b9b.png",
    ),
    dest: join(publicDir, "images/logo-jr.webp"),
    quality: 90,
  },
  { src: join(publicDir, "images/about/about-hero.png"), quality: 85 },
  { src: join(publicDir, "images/joseph-depew.png"), quality: 85 },
  { src: join(publicDir, "images/projects/joseph/projects-header.png"), quality: 85 },
  { src: join(publicDir, "images/projects/joseph/qdrodl.png"), quality: 85 },
  { src: join(publicDir, "images/projects/joseph/jr-technical-consulting.png"), quality: 90 },
  { src: join(publicDir, "images/projects/joseph/tabstack.png"), quality: 85 },
  { src: join(publicDir, "images/projects/joseph/tubestack.png"), quality: 85 },
  { src: join(publicDir, "images/projects/joseph/ccna-notes-cover.png"), quality: 85 },
  { src: join(publicDir, "images/projects/joseph/homelab-in-a-box-cover.png"), quality: 85 },
];

async function convert(job) {
  const src = job.src;
  if (!existsSync(src)) {
    console.warn(`skip (missing): ${src}`);
    return null;
  }

  const dest = job.dest ?? src.replace(/\.(png|jpe?g)$/i, ".webp");
  await sharp(src)
    .webp({ quality: job.quality ?? 85, effort: 4 })
    .toFile(dest);

  const meta = await sharp(dest).metadata();
  console.log(`ok ${dest.replace(publicDir, "")} ${meta.width}x${meta.height}`);

  if (job.removeSrc !== false && src !== job.dest && /\.(png|jpe?g)$/i.test(src)) {
    const isSourceAsset = src.includes("assets");
    if (!isSourceAsset) {
      await unlink(src).catch(() => {});
    }
  }

  return { dest, width: meta.width, height: meta.height };
}

for (const job of jobs) {
  await convert(job);
}

// Remove legacy home png if webp created
const legacyLogo = join(publicDir, "images/logo-jr.png");
if (existsSync(join(publicDir, "images/logo-jr.webp")) && existsSync(legacyLogo)) {
  await unlink(legacyLogo).catch(() => {});
}

console.log("done");
