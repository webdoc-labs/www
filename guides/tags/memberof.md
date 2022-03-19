# @memberof

### Syntax

`@memberof <parent_name>`

### Overview

This tag can be used to "relocate" a symbol in your symbol hierarchy. It is most commonly used to place a class under a namespace that exports it elsewhere.

### Example(s)

```js
/**
 * @namespace PIXI
 */

/**
 * Usage: {@code PIXI.Renderer}
 * 
 * @memberof PIXI
 */
class Renderer {
  
}

export const PIXI = {
  Renderer
}
```
