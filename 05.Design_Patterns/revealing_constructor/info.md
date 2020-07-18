# Revealing Constructor Pattern

## Notes

- Relatively new pattern gaining traction as its being used to implement `Promise` in Javascript
- The constructor exported receives as its argument, a function known as an `executor` function
- This function can expose arguments that can be used to control the internal state of the constructor (e.g. `resolve` and `reject` in `Promise`) without any other part of your code having access to them
