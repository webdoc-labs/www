# @implements

#### Syntax

`@implements <interface_name>`

#### Overview

This tag declares an interface implemented by the document class. webdoc will infer implemented interfaces if declared in the source code.

#### Example(s)

@implements is necessary when using references interfaces declared solely using @interface.

```js
/**
 * @interface IPoint
 * @property {number} x
 * @property {number} y
 */

/**
 * @implements IPoint
 */
class Point2D {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}
```
