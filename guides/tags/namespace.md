# @namespace

### Syntax

`@namespace [<name>]`

### Overview

This tag declares a "namespace", which is basically an object from with other symbols can be referenced. It is usually used in conjunction with [@memberof](./memberof.html).

### Example(s)

```js
/**
 * @memberof Sdk
 */
class Renderer { }

/**
 * @namespace Sdk
 */
export const Sdk = {
  Renderer
}
```
