# @mixes

#### Syntax

`@mixes <mixin_name>`

#### Overview

This tag is used to declare a mixin "mixed in" to the document class.

#### Example(s)

If you are doing multiple inheritance in ES5 classes, @mixes + @mixin will be useful for you:

```js
/** @mixin */
function MixinA() { }

/** @mixin */
function MixinB() { }

/**
 * @mixes MixinA
 * @mixes MixinB
 * @class
 */
function ChildClass() { }

ChildClass.prototype = Object.create({ ...MixinA.prototype, ...MixinB.prototype });
```

If you are using [ts-mixer](https://www.npmjs.com/package/ts-mixer), you'll still need to declare mixed in classes:

```ts
import { Mixin } from 'ts-mixer'

class ClassA { }
class ClassB { }

/**
 * @mixes ClassA
 * @mixes ClassB
 */
class ChildClass extends Mixin(ClassA, ClassB) { }
```
