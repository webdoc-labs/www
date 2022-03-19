# @public

### Syntax

`@public`

### Overview

This tag marks a symbol as public access. A symbol is presumed to be public by default, so this tag is not necessary in most cases. It can be used to modify the access of an inherited member or to rewrite the access of a field in a typed language.

### Example(s)

This example uses @public to mark an inherited protected method as public.

```js
class Parent {
  /** @protected */
  getId() {
    return this.id;    
  }
}

class Child extends Parent {
  /** @public */
  getId() {
    return this.id;
  }
}
```
