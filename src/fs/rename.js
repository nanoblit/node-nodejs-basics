import fs from "node:fs/promises";
import path from "node:path";

const rename = async () => {
  const wrongFilePath = path.join(import.meta.dirname, "files", "wrongFilename.txt");
  const properFilePath = path.join(import.meta.dirname, "files", "properFilename.md");

  const wrongFilePathDoesntExist = await !canAccess(wrongFilePath, fs.constants.R_OK);
  const properFilePathExists = await canAccess(properFilePath);

  if (wrongFilePathDoesntExist || properFilePathExists) {
    throw createFileSystemError();
  }

  try {
    await fs.rename(wrongFilePath, properFilePath);
  } catch (e) {
    throw createFileSystemError();
  }
};

async function canAccess(path, mode) {
  return await fs
    .access(path, mode)
    .then(() => true)
    .catch(() => false);
}

function createFileSystemError() {
  return new Error("FS operation failed");
}

await rename();
