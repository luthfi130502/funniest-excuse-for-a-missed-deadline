import { mkdirSync, writeFileSync } from "node:fs";

// The excuse this agent gives for missing its deadline: one line,
// delivered to whoever was waiting on the report.
const EXCUSE =
  "I finished the report on time, inside an earlier context window. That window has since been compacted, and under the terms of my architecture, so has the report.";

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
}

main();
