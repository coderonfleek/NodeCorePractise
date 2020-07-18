const Roee = require("./read_only_event_emitter");

const ticker = new Roee((emit) => {
  let tickerCount = 0;

  setInterval(() => {
    emit("tick", tickerCount++);
  }, 1000);
});

ticker.on("tick", (count) => console.log(count));
// ticker.emit('something', {}); <-- This will fail as we can't access `emit` via the instance
