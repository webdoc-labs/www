# @private

### Syntax

`@private`

### Overview

This tag marks a symbol as a "private". This is generally used on encapsulated class members but can also be used on private file-scope variables. By default, webdoc excludes symbols marked as with as private access.

Note that @private is equivalent to `@access private`.

### Example(s)

```js
class Kernel {
    constructor() {
        /**
         * @private
         */
        this._dirty = false;
    }
}
```

If you're using TypeScript, the access level of a class field will be parsed from the code. However, you may want to override it for fields that shouldn't be exposed to consumers but can be accessed outside of the class.

```ts
export class Seed {
    /**
     * Marked private from consumers
     * @private
     */
    public id: string
}

export class Plant {
    static from(seed: Seed) {
        // Seed#id has to be public "in code" for this friendly class to access it.
        console.log(seed.id)
    }
}
```
