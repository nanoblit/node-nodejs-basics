import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";

const transform = async () => {
  const reverseTransform = new Transform({
    decodeStrings: false,
    transform(data, encoding, callback) {
      let newString = "";

      for (let i = data.length - 1; i >= 0; i--) {
        newString += data[i];
      }

      this.push(newString);
      callback();
    },
  });

  try {
    await pipeline(process.stdin.setEncoding("utf8"), reverseTransform, process.stdout);
  } catch (e) {
    throw new Error("Pipeline has failed");
  }
};

await transform();
