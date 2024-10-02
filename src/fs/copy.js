import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  const originalFolderPath = path.join(import.meta.dirname, "files");
  const newFolderPath = path.join(import.meta.dirname, "files_copy");

  const newFolderExists = await fs
    .stat(newFolderPath)
    .then(() => true)
    .catch((e) => false);

  if (newFolderExists) {
    throw createfileSystemError();
  }

  try {
    await fs.access(originalFolderPath, fs.constants.R_OK);
    await fs.cp(originalFolderPath, newFolderPath, { recursive: true });
  } catch (e) {
    throw createfileSystemError();
  }
};

function createfileSystemError() {
  return new Error("FS operation failed");
}

await copy();
