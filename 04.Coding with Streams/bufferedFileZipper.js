let fs = require("fs");
let zlib = require("zlib");

let file = process.argv[2];

fs.readFile(file, function(err, buffer) {
  zlib.gzip(buffer, function(err, buffer) {
    fs.writeFile(file + ".gz", buffer, function(err) {
      console.log("File successfully gzipped");
    });
  });
});
