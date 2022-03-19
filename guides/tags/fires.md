# @fires

#### Syntax

`@fires <event_name>`

#### Overview

This tag declares an [event](./event.html) that may be fired by a method or function. The corresponding event should be documented using [@event](./event.html).

#### Example(s)

```js
class Rocket {
  /**
   * @fires will_launch
   * @fires did_launch
   */
  launch() {
  }
}
```
