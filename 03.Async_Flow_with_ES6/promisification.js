//promisify converts callback style functions/modules in node to return promises instead

function promisify(callbackBasedApi) {
  return function promisified() {
    const args = [].slice.call(arguments);
    return new Promise((resolve, reject) => {
      //[1]
      args.push((err, result) => {
        //[2]
        if (err) {
          return reject(err); //[3]
        }
        if (arguments.length <= 2) {
          //[4]
          resolve(result);
        } else {
          resolve([].slice.call(arguments, 1));
        }
      });
      callbackBasedApi.apply(null, args); //[5]
    });
  };
}

module.exports.promisify = promisify;

//Examples
const request = promisify(require("request"));
const mkdirp = promisify(require("mkdirp"));

const fs = require("fs");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
