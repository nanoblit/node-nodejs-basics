import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";

const compress = async () => {
  const sourcePath = path.join(import.meta.dirname, "files", "fileToCompress.txt");
  const destinationPath = path.join(import.meta.dirname, "files", "archive.gz");
  const gzip = createGzip();

  await pipeline(createReadStream(sourcePath), gzip, createWriteStream(destinationPath));
};

await compress();
