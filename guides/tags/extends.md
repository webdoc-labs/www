# @extends

### Syntax

`@extends <super_class_name>`

### Overview

This tag force-sets the super class of the documented class. In ES6+, webdoc can infer this from the source code. This tag can be useful when doing prototype modification.

### Example(s)

If you are creating classes the ES5 way, you'll need to declare inheritance manually using @extends as follows:

```js
/** @class */
function View() { }

/**
 * @class
 * @extends View
 */
function ButtonView() {
}

ButtonView.prototype = Object.create(View.prototype);
```

The @extends tag may be useful even in ES6 if you are doing some cool class transformations:

```js
/** Skeleton for a factory */
class VanillaFactory {}

/**
 * @class
 * @extends VanillaFactory
 * @property {Function} build - Build the whatever object this factory creates.
 */
const GeneratedFactory = autoGenerateFactory({
  skeleton: VanillaFactory,
  /* ... use your imagination */
})
```
