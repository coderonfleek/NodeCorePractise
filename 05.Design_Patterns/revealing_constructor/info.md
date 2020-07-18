# Revealing Constructor Pattern (Creational Pattern)

## Notes

- Relatively new pattern gaining traction as its being used to implement `Promise` in Javascript
- The constructor exported receives as its argument, a function known as an `executor` function
- This function can expose arguments that can be used to control the internal state of the constructor (e.g. `resolve` and `reject` in `Promise`) without any other part of your code having access to them

### Example

```js
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
```
