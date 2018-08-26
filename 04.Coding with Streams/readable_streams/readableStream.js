process.stdin
  .on("readable", () => {
    let chunk;
    console.log("new data");
    while ((chunk = process.stdin.read()) !== null) {
      console.log(`Chunk Read: ${chunk.length} - "${chunk.toString()}"`);
    }
  })
  .on("end", () => {
    process.stdout.write("End of stream");
  });
