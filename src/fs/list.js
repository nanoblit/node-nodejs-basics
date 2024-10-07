import fs from "node:fs/promises";
import path from "node:path";

const list = async () => {
  const folderPath = path.join(import.meta.dirname, "files");

  try {
    const fileNames = await fs.readdir(folderPath);
    console.log(fileNames);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
