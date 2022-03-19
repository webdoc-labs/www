# @property

### Syntax

`@property [<data_type>] <name>                     - <description>`
`@property [<data_type>] \[<name>=<default_value>\] - <description>`
`@property [<data_type>] <name>=<const_value>       - <description>`

### Overview

This tag is for easy inline documentation of all the properties of another symbol. It allows you to define the "default value" of a property, just like optional parameters. Similarly, the values of constant properties can be documented.

### Example(s)

```js
class Factory {
  constructor() {
    /**
     * @type {object}
     * @property {string} a - A
     * @property {string} b - B
     * @property {string} c - C
     */
    this.context = {
      a: 'a',
      b: 'b',
      c: 'c'
    };
  }
}

/**
 * @enum {string}
 * @property ON='on'
 * @property OFF='off'
 */
const STATE = {
  ON: 'on',
  OFF: 'off'
}

/**
 * @typedef {object} Point
 * @property {number} x
 * @property {number} y
 */
```
