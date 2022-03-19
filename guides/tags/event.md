# @event

### Syntax

`@event [{data_type}] <name>`

### Overview

This tag declares an event. Since events are not a language construct, the documentation comments for events should be orphaned (not placed above an actual symbol).

An event generally documented as an "object" or as a "callback". The former is applicable when your event handlers accept a single "event" object. For that, you should set the data type of the event and can also document the event object's [properties](./property.html). The callback variant of events is applicable when event handlers have differing signatures. You can document the [parameters](./param.html) event handlers should accept in that case.

### Example(s)

The following example documents the "add" event by the signature of its event handler callbacks:

```js
class List {
  /**
   * @event add
   * @property index - The index of the new node.
   * @property target - The node added.
   */
  
  /** Document constructor so it is not marked as an event. */
  constructor() { }

  /**
   * @param {'add'} ev
   */
  on(ev) { /* ... */ }
}
```

Here, the "click" event is documented by the type of the "event object" accepted by event handlers:

```js
class Button {
  /**
   * @event {ClickEvent} click
   * @property target - The element clicked.
   * @property currentTarget - The element in the current stage of event propagation.
   * @property device
   */

  /** Register event handler. */
  on(ev) { /* ... */ }
}
```
