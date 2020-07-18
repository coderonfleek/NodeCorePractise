// Create a factory function that returns different versions of a profiler instance based on environment

class Profiler {
  constructor(label) {
    this.label = label;
    this.lastTime = null;
  }
  start() {
    this.lastTime = process.hrtime();
  }
  end() {
    const diff = process.hrtime(this.lastTime);
    console.log(
      `Timer "${this.label}" took ${diff[0]} seconds and ${diff[1]}
    nanoseconds.`
    );
  }
}

//Return factory function instead of Profiler class
module.exports = function (label) {
  if (process.env.NODE_ENV === "development") {
    return new Profiler(label); //Return the actual instance of Profiler
  } else if (process.env.NODE_ENV === "production") {
    //Return a mocked instance that returns a mocked version of the members
    return {
      start: function () {},
      end: function () {}
    };
  } else {
    throw new Error("Must set NODE_ENV");
  }
};
