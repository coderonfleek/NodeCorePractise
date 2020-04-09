process.on('multipleResolves', (type, promise, reason) => {

console.error(type, promise, reason);

setImmediate(() => process.exit(1));

});

async function main() {

 try{
  return new Promise ((resolve, reject) => {
    resolve('First Call');
    resolve('Swallowed resolve');
    reject(new Error('Swallowed reject'));
  })
 }catch {

  throw new Error('Failed');
 }

}

main().then(console.log()).catch((error) => { console.log(error)});


