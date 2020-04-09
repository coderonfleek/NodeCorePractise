//Begin reading from stdin so the process does not exit
process.stdin.resume();

//Invoke this using Ctrl-C
process.on('SIGINT', () => {

	console.log('Recieved SIGINT. Press Ctrl-D to exit');
});


//Using a single function to handle multiple signals

function handle(signal){

 console.log(`Received ${signal}`);

}

process.on('SIGINT', handle)
process.on('SIGTERM', handle);
