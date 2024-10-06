import { createUnzip } from "node:zlib";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  const sourcePath = path.join(import.meta.dirname, "files", "archive.gz");
  const destinationPath = path.join(import.meta.dirname, "files", "fileToCompress.txt");
  const unzip = createUnzip();

  await pipeline(createReadStream(sourcePath), unzip, createWriteStream(destinationPath));
};

await decompress();
