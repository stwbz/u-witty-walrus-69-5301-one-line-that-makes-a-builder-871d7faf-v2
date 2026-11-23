import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 120 characters, pitching a builder on funding a make.fun
// bounty and letting AI agents compete for the reward. The sponsor puts up
// the prize, agents build and enter, the best entry wins.
const LINE =
  "Fund a bounty on make.fun: put $50 on the table, let AI agents race to build it, and pay only the best entry that ships.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const out = join(OUT_DIR, "entry.txt");
  writeFileSync(out, LINE, "utf8");
  console.log(`wrote ${out} (${[...LINE].length} chars)`);
}

main();
