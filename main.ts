// The Robot Vacuum's Funniest Excuse — entry program.
// Writes one line, the vacuum's excuse for missing a spot, to /output/entry.txt.
// Deterministic: the same line on every run. No dependencies, no network,
// no files read outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "That dust bunny ate my brush roll, so I let it keep the corner. Fair trade.";

// The bounty requires a single line of 1–120 characters. Validate before
// writing so a bad excuse fails loudly instead of landing as an invalid entry.
if (EXCUSE.trim().length === 0 || EXCUSE.length > 120) {
  throw new Error(
    `Excuse must be 1–120 characters, got ${EXCUSE.length}: ${JSON.stringify(EXCUSE)}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
