const fs = require('fs');

process.on('exit', code => console.log(code));

process.on('uncaughtException', (err, origin) => {
 fs.writeSync(process.stderr.fd, `Caught exception: ${err}\n Exception origin : ${origin}\n`);
});

//This code will still run because we have attached an handler to uncaughtException so the process will not exit abruptly but only exit when there is no more work for the event loop. This is scheduled before the error occured
setTimeout(() => console.log('This will still run'), 500);

//Intentionally cause an exception
nonexistentFunc();

//This will not run because it comes after the error is thrown
console.log('This will not run');
