
const startUsage = process.cpuUsage();

process.argv.forEach(arg => console.log(arg));

console.log(process.cpuUsage(startUsage));
