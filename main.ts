import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "I asked for a raise and HR threw me a pizza party, so now I'm technically paid in pepperoni and regret.";

// Keep a safety margin under the 200-character gate, and stay plain ASCII, one line.
if (joke.length > 195 || /[^\x00-\x7F]/.test(joke) || joke.includes("\n")) {
  throw new Error("Entry joke fails the one-line ASCII length check");
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(targetDir, "entry.txt");
mkdirSync(targetDir, { recursive: true });
writeFileSync(entryPath, joke, "utf8");
console.log(`Wrote ${joke.length}-character entry to ${entryPath}`);
