import { Worker } from "node:worker_threads";
import os from "node:os";
import path from "node:path";

const WORKER_PATH = path.join(import.meta.dirname, "worker.js");
const STARTING_FIB_NUMBER = 10;

const performCalculations = async () => {
  const cores = os.cpus().length;
  const workers = new Array(cores);

  for (let i = 0; i < workers.length; i++) {
    workers[i] = createFibThread(STARTING_FIB_NUMBER + i);
  }

  const output = (await Promise.allSettled(workers)).map((result) => {
    if (result.status === "rejected") {
      return { satus: "error", data: null };
    }

    return { status: "resolved", data: result.value };
  });

  console.log(output);
};

function createFibThread(value) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(WORKER_PATH, { workerData: value });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
}

await performCalculations();
