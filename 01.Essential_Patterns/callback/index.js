//Basic Module
var my_module = require("./my_module.js");

//Exported function as module
var config = { name: "Fikayo" };
var function_module = require("./function_exposing_module")(config);

//Exported class as module
var Logger = require("./class_module");

//Module with a function that has a callback
var module_with_callback = require("./module_with_callback");

my_module.sayMessage("How you doing");

function_module.sayHi();
function_module.greet();

var loggerInstance = new Logger();
loggerInstance.info("To copy this tune press 1");

//Error will be thrown if file argument is an empty string
module_with_callback.getFile("somefile.txt", function(err, data) {
  if (err) {
    //console.log(err);
    console.log("An error occured");
  } else {
    console.log(data);
  }
});
