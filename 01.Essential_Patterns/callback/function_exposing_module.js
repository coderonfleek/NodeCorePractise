//Assign module.exports to the entire function
module.exports = function helperFunctions(config = {}) {
  return {
    sayHi: function() {
      console.log("Hi");
    },
    greet: function() {
      console.log("Hi " + config.name);
    }
  };
};
