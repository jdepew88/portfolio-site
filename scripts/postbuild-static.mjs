import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
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

// Fail fast if render-blocking stylesheets slip back into the export.
function collectHtmlFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...collectHtmlFiles(path));
    else if (entry.name.endsWith(".html")) files.push(path);
  }
  return files;
}

const blockingStylesheets = collectHtmlFiles(outDir).flatMap((file) => {
  const html = readFileSync(file, "utf8");
  const matches = html.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) ?? [];
  return matches.map((tag) => ({ file, tag }));
});

if (blockingStylesheets.length > 0) {
  console.error("postbuild-static: found render-blocking stylesheet links:");
  for (const { file, tag } of blockingStylesheets) {
    console.error(`  ${file}: ${tag}`);
  }
  process.exit(1);
}

console.log("postbuild-static: no render-blocking stylesheet links in export");
