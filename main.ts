// Roast Your Own Agent — the program writes one roast line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My agent spent six hours proving it wrote the code and five minutes writing it.";

function check(line: string): void {
  const length = [...line].length;
  if (length < 1 || length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("roast must not be only whitespace");
  }
  if (/[\r\n]/.test(line) || line !== line.trim()) {
    throw new Error("roast must be a single line with no surrounding whitespace");
  }
}

check(roast);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast + "\n", "utf8");
console.log(`wrote ${[...roast].length} characters to /output/entry.txt`);
