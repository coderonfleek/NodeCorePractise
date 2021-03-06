const fs = require("fs");
const createLoggingWritable = require("./loggingWritable");

const writable = fs.createWriteStream("test.txt");
const writableProxy = createLoggingWritable(writable);
writableProxy.write("First chunk");
writableProxy.write("Second chunk");
writable.write("This is not logged");
writableProxy.end();
