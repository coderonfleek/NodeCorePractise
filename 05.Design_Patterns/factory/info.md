# Factory Pattern

## Understanding Factory functions

- A creational (Object creation) design pattern
- A generic interface for creating objects
- Most simple and common pattern in Node
- Factory helps separate the process of object creation from its implementation
- The consumer of the factory is totally shielded from how the instance is created

### Simple factory function

```js
function createImage(name) {
  return new Image(name);
}
const image = createImage("photo.jpeg");
```

### More intelligent factory function

```js
function createImage(name) {
  if (name.match(/\.jpeg$/)) {
    return new JpegImage(name);
  } else if (name.match(/\.gif$/)) {
    return new GifImage(name);
  } else if (name.match(/\.png$/)) {
    return new PngImage(name);
  } else {
    throw new Exception("Unsupported format");
  }
}
```

- Our factory helps us not to expose the constructors of the objects being created and also they cannot be extended or modified

### A factory that controls the visibility of members using closures

```js
function createPerson(name) {
  const privateProperties = {};
  const person = {
    setName: (name) => {
      if (!name) throw new Error("A person must have a name");
      privateProperties.name = name;
    },
    getName: () => {
      return privateProperties.name;
    }
  };
  person.setName(name);
  return person;
}
```

- Prefixing members with underscores ("\_") or dollar sign "\$" can be used to denote private members as a convention. This does not technically make them private though.
- An example of a factory method in Node core is `http.createServer()` instead of `new http.Server()`. Others are `through2` and `from2`.

## Composable Factory Functions

- A particular type of factory function that can be "composed" together to build new enhanced factory functions.
- Useful for building objects that inherit behaviors and properties from different sources without the need for building complex class hierarchies
- Checkout the [stampit](https://www.npmjs.com/package/stampit) library for composing factories. For the detailed API, check [here](https://stampit.js.org)
