import fs from "node:fs";
import { createHash } from "node:crypto";
import { Transform, pipeline } from "node:stream";
import path from "node:path";

class HashTransform extends Transform {
  constructor(options) {
    super(options);
    this.hash = createHash("sha256");
  }

  _transform(data, encoding, callback) {
    this.hash.update(data);
    callback();
  }

  _flush(callback) {
    this.push(this.hash.digest("hex"));
    callback();
  }
}

const calculateHash = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fileToCalculateHashFor.txt");

  pipeline(fs.createReadStream(filePath), new HashTransform(), process.stdout, (error) => {
    if (error) {
      throw new Error(`Stream pipeline has failed.\n${error}`);
    }
  });
};

await calculateHash();
