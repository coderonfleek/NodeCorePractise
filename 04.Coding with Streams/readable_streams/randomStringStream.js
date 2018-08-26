let stream = require("stream");
let Chance = require("chance"); //External library

const chance = new Chance();

class RandomString extends stream.Readable {
  constructor(options) {
    super(options);
  }

  _read() {
    let chunk = chance.string();
    console.log(`Pushing data of chunk ${chunk.length}`);
    //Push the data to the internal reading buffer
    this.push(chunk, "utf8");
    //end the stream on a condition
    if (chance.bool({ likelihood: 5 })) {
      //Pushing null ends signals that there is no more data to push
      this.push(null);
    }
  }
}

module.exports = RandomString;
