# @throws

### Syntax

`@throws <error>`

### Overview

This tag can be used to declare a type of error thrown by the documented method or function.

### Example(s)

```js
/**
 * @throws {TypeError}
 */
function assertIsNumber(n) {
  if (typeof n !== 'number') {
    throw new TypeError('n is not a number')
  }
  
  return true
}
```
