# @method

### Syntax

`@method [<name>]`

### Overview

This tag declares a symbol to be a method. Note that methods are different from functions in the case of webdoc, and they are members of a class, interface, or mixin.

### Example(s)

```js
class TestSuite {
  /**
   * Without the tag, this would be a property.
   *
   * @method
   */
  beforeAll = generateLifecycleMethod('beforeAll')
}
```
