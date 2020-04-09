const fs = require("fs");
const crypto = require("crypto");

const algorithm = "aes-192-cbc";
const password = "mypassword"; //Password used to generate key

const key = crypto.scryptSync(password, "salt", 24);

//const iv = crypto.randomBytes(); Use `crypto.randomBytes()` to generate a random iv instead of the static one below

const iv = Buffer.alloc(16, 0); // Initialization vector.

const cipher = crypto.createCipheriv(algorithm, key, iv);

const rawFileStream = fs.createReadStream("file1.pdf");

const encryptedFileStream = fs.createWriteStream(
  `${Math.floor(Math.random() * 101)}.pdf`
);

rawFileStream.pipe(cipher).pipe(encryptedFileStream);
