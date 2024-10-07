import fs from "node:fs/promises";
import path from "node:path";

const remove = async () => {
  const filePathToRemove = path.join(import.meta.dirname, "files", "fileToRemove.txt");

  try {
    await fs.rm(filePathToRemove);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
