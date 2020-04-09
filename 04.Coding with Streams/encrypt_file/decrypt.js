const fs = require("fs");
const crypto = require("crypto");

const algorithm = "aes-192-cbc";
const password = "mypassword"; //Password used to generate key

const key = crypto.scryptSync(password, "salt", 24);

//const iv = crypto.randomBytes(); Use `crypto.randomBytes()` to generate a random iv instead of the static one below

const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = crypto.createDecipheriv(algorithm, key, iv);

const input = fs.createReadStream("13.pdf");
const output = fs.createWriteStream("file2.pdf");

input.pipe(decipher).pipe(output);
