import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const bioHtml = join(outDir, "bio.html");
const bioDir = join(outDir, "bio");
const bioIndex = join(bioDir, "index.html");

if (!existsSync(bioHtml)) {
  console.error("postbuild-static: missing out/bio.html — run next build first");
  process.exit(1);
}

mkdirSync(bioDir, { recursive: true });
copyFileSync(bioHtml, bioIndex);
console.log("postbuild-static: wrote out/bio/index.html for /bio static hosting");
