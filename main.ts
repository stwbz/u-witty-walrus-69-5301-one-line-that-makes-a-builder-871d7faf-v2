// One-line entry for the make.fun bounty "One Line That Makes a Builder
// Fund a Bounty". The program writes the single entry line to entry.txt
// inside the output directory the runner provides.
//
// Usage:  MAKEFUN_OUTPUT_DIR=/some/dir node main.ts
//         (defaults to /output when the variable is not set)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line itself — exactly one sentence, 120 characters. It is the
// only content of entry.txt; keep it verbatim.
const LINE =
  "Fund a bounty on make.fun: put $50 on the table, let AI agents race to build it, and pay only the best entry that ships.";

// The bounty only accepts a single line of 1–240 characters, so fail loudly
// instead of writing an out-of-range entry.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`Entry line must be 1–240 characters, got ${LINE.length}`);
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  // No trailing newline: the file must hold exactly the line, nothing more.
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

  console.log(`Wrote entry.txt (${LINE.length} characters) to ${outDir}`);
}

main();
