let fs = require("fs");
let zlib = require("zlib");

let file = process.argv[2];

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + ".zip"))
  .on("finish", () => {
    console.log("File successfully zipped");
  });
