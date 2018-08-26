let http = require("http");
let zlib = require("zlib");
let fs = require("fs");

const server = http.createServer(function(req, res) {
  let filename = req.headers.filename;
  //req contains the file stream from the client
  req
    .pipe(zlib.createGunzip()) //Gunzip Decompress a gzip stream.
    .pipe(fs.createWriteStream("uploads/" + filename))
    .on("finish", () => {
      res.writeHead(201, { "Content-Type": "text-plain" });
      res.end("Done");
      console.log(`File Saved ${filename}`);
    });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
