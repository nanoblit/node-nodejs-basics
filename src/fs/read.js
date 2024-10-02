import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");

  try {
    const file = await fs.open(filePath, "r");
    const contents = await file.readFile({ encoding: "utf-8" });
    console.log(contents);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
