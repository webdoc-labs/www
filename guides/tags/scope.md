# @scope

### Syntax

`@scope <'static' | 'instance' | 'inner'>`

### Overview

This tag declares the scope in which a member symbol can be used as a value. Its value can be "static", "instance", or "inner".

The static scope is when the member can be dereferenced directly from the parent. The properties of any plain object variable are static by default. ES6 also allows you to declare "static" members of classes.

The instance scope is when the member can be dereferenced from an instantiation of the parent. This is the case for most class properties, which are available after creating an object from a class. This includes regular class methods as well.

The inner scope is when a member is declared inside a function. It cannot be used outside that function.

```js
function ES5_Class() {
  /**
   * This is an inner member. It cannot be dereferenced from the outside unless returned elsewhere.
   */
  const innerMember = 'value'
}

/**
 * This is an instance property
 *
 * <code>
 *   console.log((new ES5_Class()).instanceProperty)
 * </code>
 */
ES5_Class.prototype.instanceProperty = 'value'

/**
 * This is a static property
 *
 * <code>
 *   console.log(ES5_Class.staticProperty)
 * </code>
 */
ES5_Class.staticProperty = 'value'
```

### Example(s)

webdoc will correctly infer if a property is in static or instance scope in most cases. For example, the following is redundant:

```js
class TestSuite {
  constructor() {
    /**
     * @instance
     */
    this.props = {};
  }
}

/**
 * @static
 */
TestSuit.name = 'TestSuite'
```

A novel area you might necessarily use the tag could be to document unreferrable state:

```js
class Loop {
  /**
   * The seed is an internal, unreferrable state that affects the text color of the DOM that changes
   * on each tick.
   *
   * @member {number} seed
   * @scope inner
   */

  /** Tick runner */
  onTick() {
    const seed = Math.random();
    
    document.getElementById('body').color = ['red', 'blue', 'green'][Math.floor(seed)];
  }
}
```

Another particular use that might by handy is using `Object.assign` to create properties. In the following example, @memberof and @scope is used to add new properties to a class:

```js
class Patchable { }

function applyPatches() {
  Object.assign(Patchable.prototype, {
    /**
     * Props for the object
     *
     * @memberof Patchable
     * @scope instance
     */
    props: { }
  })
  
  Object.assign(Patchable, {
    /**
     * Class name of the class
     * 
     * @memberof Patchable
     * @scope static
     */
    name: 'Patchable'
  })
}
```
