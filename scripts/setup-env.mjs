import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const envPath = join(root, ".env");
const examplePath = join(root, ".env.example");

if (existsSync(envPath)) {
  console.log("setup-env: .env already exists — left unchanged");
  process.exit(0);
}

copyFileSync(examplePath, envPath);
console.log("setup-env: created .env from .env.example — add your secrets locally");
