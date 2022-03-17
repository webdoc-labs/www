# @protected

### Syntax

`@protected`

### Overview

This tag marks a class property as protected access; this means it can only be accessed by inheriting classes.

### Example(s)

```js
class Renderer {
  constructor(context) {
    /** @protected */
    this.context = context;      
  }
}
```

