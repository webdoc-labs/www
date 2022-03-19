# @readonly

### Synonyms

@const

### Overview

This tag declares a value to be constant.

### Example(s)

```js
class Node {
  constructor() {
    /**
     * Id that doesn't change
     * 
     * @readonly
     */
    this.id = uuidv4();  
  }
}
```
