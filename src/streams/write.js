import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";
import path from "node:path";

const write = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fileToWrite.txt");

  try {
    await pipeline(process.stdin, createWriteStream(filePath));
  } catch (e) {
    throw new Error("Pipeline has failed");
  }
};

await write();
