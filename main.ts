// The Funniest Honest Appliance Error — a kettle's honest error.
// The program writes the error to /output/entry.txt (at most 200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "ERROR: I have boiled the same water four times and nobody is making tea. I am beginning to take it personally.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
