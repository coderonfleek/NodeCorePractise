function createLoggingWritable(writableOrig) {
  const proto = Object.getPrototypeOf(writableOrig);
  function LoggingWritable(writableOrig) {
    this.writableOrig = writableOrig;
  }
  LoggingWritable.prototype = Object.create(proto);
  LoggingWritable.prototype.write = function (chunk, encoding, callback) {
    //Do some validation
    if (!callback && typeof encoding === "function") {
      callback = encoding;
      encoding = undefined;
    }
    console.log("Writing ", chunk);
    return this.writableOrig.write(chunk, encoding, function () {
      //Log the operation
      console.log("Finished writing ", chunk);
      callback && callback();
    });
  };
  LoggingWritable.prototype.on = function () {
    return this.writableOrig.on.apply(this.writableOrig, arguments);
  };
  LoggingWritable.prototype.end = function () {
    return this.writableOrig.end.apply(this.writableOrig, arguments);
  };
  return new LoggingWritable(writableOrig);
}

module.exports = createLoggingWritable;
