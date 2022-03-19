# @default

### Syntax

`@default <default_value>`

### Overview

This tag can be used to set the default value of a property.

### Example(s)

```js
class Application {
  constructor(id = 'id') {
    /**
     * @default "id"
     * @type {string}
     */
    this.id = id
  }
}
```
