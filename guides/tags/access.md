# @access

### Related

@public, @protected, @private

### Syntax

`@access <public | protected | private>`

### Overview

This tag specifies the access rule for a particular symbol. It's value can be "[public](./public.html)", "[protected]('./protected.html)",
or "[private]('./private.html)".

### Example(s)

```js
class Cache {
  constructor(value) {
    /**
     * @access protected
     */
    this._value = value;
  }
}
```
