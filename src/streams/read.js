import { pipeline } from "node:stream/promises";
import { createReadStream } from "node:fs";
import path from "node:path";

const read = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");

  try {
    await pipeline(createReadStream(filePath), process.stdout);
  } catch (e) {
    throw new Error("There was a pipeline error");
  }
};

await read();
