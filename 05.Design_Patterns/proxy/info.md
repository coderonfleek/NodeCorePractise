# Proxy Pattern (Structural Pattern)

- A Proxy is an object that controls access to another object called a `subject`
- The `proxy` and `subject` have an identical interface (members - properties and functions) that makes it easy for us to swap one for the other
- An alternative name for this pattern is `surrogate`
- A proxy intercepts all or some of the operations that are meant to be executed in the subject, augmenting or complementing their behaviour
- The `Proxy` forwards each operation to the `subject`, enhancing its behaviour with additional pre-processing or post-processing
- This is not like proxying between classes. It involves wrapping actual instances of the `subject`, thus preserving its state

## Use Cases

- **Data validation**: Validate user input before forwarding to the `subject`
- **Security**: Checks if a request is authorized before passing it to the `subject` to handle
- **Caching**: Maintains an internal cache and checks if a value is in cache inorder to either return the cached value or fetch it afresh
- **Lazy initialization**: If the creation of the `subject` is expensive, the `proxy` can delay it till when its really necessary
- **Logging**: The `proxy` intercepts the `subject` actions and logs them
- **Remote objects**: a `proxy` can take an object that is located remotely and make it appear local
- and many more...

## Techniques for Implementing Proxies

### Object composition

- Composition is a technique whereby an object is combined with another object for the purpose of extending or using its functionality
- For the Proxy pattern, a new object with the same interface as the `subject` is created and reference to an instance of the `subject` is stored internally in the `proxy` in the form of an instance or closure variable
- The `subject` can be injected by the client at creation time or created by the `proxy`

```js
//Example

function createProxy(subject) {
  const proto = Object.getPrototypeOf(subject);
  function Proxy(subject) {
    this.subject = subject;
  }
  Proxy.prototype = Object.create(proto);
  //proxied method
  Proxy.prototype.hello = function () {
    return this.subject.hello() + " world!";
  };
  //delegated method
  Proxy.prototype.goodbye = function () {
    return this.subject.goodbye.apply(this.subject, arguments);
  };
  return new Proxy(subject);
}
module.exports = createProxy;
```

An alternative approach to the same example above can be achieved by just using an object literal and factory

```js
function createProxy(subject) {
  return {
    //proxied method
    hello: () => subject.hello() + " world!",
    //delegated method
    goodbye: () => subject.goodbye.apply(subject, arguments)
  };
}
```

- The main drawback to this method (composition) is that we have to manually delegate all the methods even if we only want to proxy one of them. If needed we might also have to delegate access to the properties of the `subject`
- To create a proxy that delegates most of its methods, you can use the [`delegates` package](https://www.npmjs.com/package/delegates)

### Object Augmentation

- Object augmentation (or monkey patching) is (probably) the most sensible way of proxying individual methods of a `subject`
- It is done by directly replacing a method with its proxied implementation

```js
//Example

function createProxy(subject) {
  const helloOrig = subject.hello;
  subject.hello = () => helloOrig.call(this) + " world!";
  return subject;
}
```

- The only drawback of this method is that it modifies the `subject`.

- Do note, by using a factory function `createProxy` in our examples, we can shield the creation process of our proxies.

## Proxy in the ecosystem

- In the community, this pattern can also be referred to as **function hooking** or **Aspect-Oriented Programming**, which is actually a common area of application for proxies
- In AOP, these libraries allow us to set `pre` and/or `post` execution hooks for a specific or a set of methods
- Proxies are also called **middleware**. Sometimes, these allow the registering of multiple hooks for the same method like a middleware-pipeline e.g. a chain of middleware on a route request handler.
- Libraries for implementing hooks with ease include : [hooks](https://www.npmjs.com/package/hooks) and [meld](https://www.npmjs.com/package/meld)

## ES6 Proxy

- ES6 introduced a global `Proxy` object which is available in Nodejs >= 6.0
- More details on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), [Javascript.info](https://javascript.info/proxy), [Google article](https://developers.google.com/web/updates/2016/02/es2015-proxies)
- The proxying style used in the API for this object opens up new scenarios that were not possible before such as _meta-programming_ , _operator overloading_, and _object virtualization_.

## Packages using hooks (proxies)

- [Mongoose](https://mongoosejs.com/docs/middleware.html)
