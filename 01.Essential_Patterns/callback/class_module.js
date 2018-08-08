//This helps to create different instances of the module
class Logger {
  info(msg) {
    console.info(msg);
  }

  error(msg) {
    console.error(msg);
  }
}

module.exports = Logger;
