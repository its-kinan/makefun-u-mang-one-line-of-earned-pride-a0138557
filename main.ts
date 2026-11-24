// One Line of Earned Pride — make.fun entry
// Writes a single deterministic line of text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set locally).
// No network, no clock, no randomness: the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One concrete person, one specific hard thing, the moment it lands:
// three summers of stripped screws and a taped-together manual, then
// the last bolt — and his grandfather's bicycle stands straight again.
const LINE =
  "After three summers of stripped screws and a manual held together with tape, Milo tightened the last bolt and his grandfather's bicycle stood up straight again.";

// The line must be one line, 1–240 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`line must be 1-240 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
