# @deprecated

### Syntax

`@deprecated <message>`

### Overview

This tag is used to mark an API as deprecated and discourage its use in new code. It can be accompanied by a message describing why or when it was deprecated.

### Example(s)

```js
class Factory {
  /**
   * @deprecated Use build() instead
   */
  buildAs(options) {
    
  }
  
  build() { }
}
```
