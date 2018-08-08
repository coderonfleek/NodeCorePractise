const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  go() {
    this.emit("go", "cardi b");
  }

  getFile(filename) {
    if (filename == "") {
      //Errors must be of type Error
      var fileError = new Error("Empty argument for file");

      //pass the error object as first parameter to the callback and null for file contents
      this.emit("error", fileError);
    } else {
      //No error, thus pass null for error
      var fileContents = "Bla bla bla";
      this.emit("fileretrieved", fileContents);
    }
  }
}

module.exports = MyEmitter;
