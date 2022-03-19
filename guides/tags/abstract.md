# @abstract

### Syntax

`@abstract`

### Overview

This tag marks a class as one that cannot be instantiated directly and that must be inherited by another class.

### Example(s)

```js
/** @abstract */
class AbstractRenderer {
  // Use WebGLRenderer, CanvasRenderer instead of instantiating this.
}

class WebGLRenderer extends AbstractRenderer { }
class CanvasRenderer extends AbstractRenderer { }
```
