var simple_emitter = require("./simple_emitter");

var myEmitter = new simple_emitter();

myEmitter.on("go", data => {
  console.log(data);
});

myEmitter
  .on("fileretrieved", contents => console.log(contents))
  .on("error", err => console.log("File fetch error : " + err.message));

myEmitter.go();

myEmitter.getFile("file");
