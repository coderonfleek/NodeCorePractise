function getFile(filename, callback) {
  if (filename == "") {
    //Errors must be of type Error
    var fileError = new Error("Empty argument for file");

    //pass the error object as first parameter to the callback and null for file contents
    callback(fileError, null);
  } else {
    //No error, thus pass null for error
    var fileContents = "Bla bla bla";
    callback(null, fileContents);
  }
}

//You can use exports object to attach functions to module.exports
exports.getFile = getFile;
