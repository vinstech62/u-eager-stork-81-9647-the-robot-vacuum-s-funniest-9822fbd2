// The Robot Vacuum's Funniest Excuse — entry program.
// Writes one line, the vacuum's excuse for missing a spot, to /output/entry.txt.
// Deterministic: the same line on every run. No dependencies, no network,
// no files read outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "That dust bunny ate my brush roll, so I let it keep the corner. Fair trade.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
