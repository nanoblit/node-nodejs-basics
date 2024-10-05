import fs from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const calculateHash = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fileToCalculateHashFor.txt");
  let contents;

  try {
    const file = await fs.open(filePath, "r");
    contents = await file.readFile({ encoding: "utf-8" });
  } catch (e) {
    throw new Error("FS operation failed");
  }

  const hashedContents = createHash("sha256").update(contents).digest("hex");
  process.stdout.write(hashedContents);
};

await calculateHash();
