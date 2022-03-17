## @return

### Synonyms

@returns

### Syntax

`@return [{<type>}] - <description>`

`@return [{<type>}] <name> - <description>`

### Overview

This tag describes the return value of a method or function. If a function returns multiple values, named returned tags can also be used.

### Example(s)

A simple return signature can be documented as follows:

```js
/**
 * @return - The sum.
 */
function sum(a, b) { return a + b; }
```

To document multiple return values:

```js
/**
 * @return {object} - Compilation of different operations. Other return values are fields on this object.
 * @return {number} sum - a + b
 * @return {number} difference - a - b
 * @return {number} product - a * b
 * @return {number} quotient - Math.floor(a / b)
 * @return {number} remainder - a % b
 */
function compile(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: Math.floor(a / b),
    remainder: a % b,
  }
}
```
