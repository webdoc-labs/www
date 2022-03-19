## @param

### Syntax

`@param [{<type>}] <name> [- <description>]`

`@param [{<type>}] \[<name>=<default-value>\] [- <description>]`


### Overview

The @param tag declares a parameter accepted by a method or function. You can optionally provide the parameter type; if not added, webdoc will automatically parse the typed if documenting a typed language. For optional parameters, a default value can also be set; webdoc will attempt to read the default value if not provided manually.

### Example(s)

This example demonstrates how you can document a function with a straightforward signature:

```js
// JavaScript

/**
 * @param {number}[a = 0] - First operand
 * @param (number)[b = 0] - Second operand
 */
function add(a =  0, b = 0) {
  return a + b;
}
```

You can also declare named parameters that are passed through an "options" object argument using canonical names.

```js
/**
 * @param {object} operands
 * @param {number} operands.a - First operand
 * @param {number} operands.b - Second operand
 */
function add(operands) {
  return operands.a + operands.b;
}
```

Rest parameters will automatically be inferred as such from the source code.

```js
/**
 * @param {Array<number>} operands - List of operands
 */
function sum(...operands) {
  return operands.reduce((a, b) => a + b)
}
```
