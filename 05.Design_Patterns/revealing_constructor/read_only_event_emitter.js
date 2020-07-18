const EventEmitter = require("events");

module.exports = class Roee extends EventEmitter {
  constructor(executor) {
    super();
    const emit = this.emit.bind(this);

    this.emit = undefined; //We won't be able to call this anymore from other parts of our code via the instance object

    //Only the executor function will have access to emit
    executor(emit);
  }
};
