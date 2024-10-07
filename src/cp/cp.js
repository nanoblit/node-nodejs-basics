import path from "node:path";
import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  const childProcessPath = path.join(import.meta.dirname, "files", "script.js");
  fork(childProcessPath, args, { stdio: ["inherit", "inherit", "inherit", "ipc"] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["hello", "test"]);
