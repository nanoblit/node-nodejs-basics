import fs from "node:fs/promises";
import path from "node:path";

const create = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fresh.txt");

  try {
    const file = await fs.open(filePath, "wx");
    await file.write("I am fresh and young");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await create();
