

//beforeExit will fire before exit
//beforeExit is fired when the event loop has no more pending work to do
//exit is fired when the application exits


process.on('beforeExit', (exitCode) => {

console.log('Process beforeExit event with code: ', exitCode)
});

//Manually set the code the process exits with
//process.exitCode = 400;

process.on('exit', (exitCode) => {
console.log('Process exit event with code: ', exitCode)
})
