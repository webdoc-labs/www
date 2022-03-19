# @enum

### Syntax

`@enum [{data_type}] [<name>]`

### Overview

This tag declares a symbol an enumeration. The enumeration can optionally be of a specific primitive type.

### Example(s)

```js
/**
 * @enum {string}
 * @property {string} LIGHT_MODE='light_mode'
 * @property {string} DARK_MODE='dark_mode'
 */
const THEME = {
  LIGHT_MODE: 'light_mode',
  DARK_MODE: 'dark_mode',
}
```
