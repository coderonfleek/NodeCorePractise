const RandomStream = require("./randomStringStream");
const randomStream = new RandomStream();

randomStream.on("readable", () => {
  let chunk;
  while ((chunk = randomStream.read()) !== null) {
    console.log(`Chunk received ${chunk.toString()}`);
  }
});
