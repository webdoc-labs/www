## @type

### Syntax

`@type {<type>}`

### Overview

This tag sets the data-type of a symbol, and it also overrides the data-type inferred from the source code. It is mostly used in untyped languages. It is handy when webdoc incorrectly parses a data-type in typed languages, or when hiding a complex type is desired.

### Example(s)

```js
class Point2D {
    constructor() {
        /**
         * Abscissa, in px.
         * @type {number}
         */
        this.x = 0;

        /**
         * Ordinate, in px.
         * @type (number)
         */
        this.y = 0;
    }
}

/**
 * @type {Point2D}
 */
const origin = new Point2D();
```
