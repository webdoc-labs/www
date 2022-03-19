# @member

#### Syntax

`@member [{<data_type>}] <name>`

#### Overview

This tag marks a symbol as a member of enclosing scope (class or object). It is equivalent to using the [@name](./name.html) and [@type](./type.html) tags together.

#### Example(s)

```js
class Document {
  /**
   * The identifier for this node.
   * 
   * @member {string} id
   */
}
```
