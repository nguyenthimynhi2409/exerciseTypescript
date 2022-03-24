const fs = require("fs");
const promisify =
  (func: Function) =>
  (...args: any[]) =>
    new Promise((resolve, reject) =>
      func(...args, (err: Error, result: any) =>
        err ? reject(err) : resolve(result)
      )
    );
let readFilePromise = promisify(fs.readFile);
readFilePromise("./bt1.ts")
  .then((result) => console.log("success reading file\r\n", String(result)))
  .catch((error) => console.error("error reading file", error));
