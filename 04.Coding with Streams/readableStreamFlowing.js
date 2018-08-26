process.stdin
  .on("data", chunk => {
    console.log(`Chunk Read: ${chunk.length} - "${chunk.toString()}"`);
  })
  .on("end", () => {
    console.log("Stream End");
  });
