# Getting Started

webdoc is primarily used to generate a static documentation site extracted from documentation comments in source code. The documentation comments should follow JSDoc notation.

## Adding documentation comments

Documentation comments are to be placed above the symbol being documented. They should begin with `/**` or `/*!` so they are picked up by the parser; all other comments are ignored. To try it out, all you have to do is add a textual description of the symbol:

```ts
/**
 * This is a description of the {@link Application} class!
 */
class Application {
   // This comment is ignored.
   /*
    * This comment is also ignored!
    */
}
```

Tags can be used to provide additional metadata about the symbol. For example, the `@param` tag can be used to provide brief descriptions of the arguments a function accepts.

```js
/**
 * Sums two numbers (well, JavaScript can add anything).
 * 
 * Note: webdoc can infer parameter types from the type annotations in TypeScript code!
 * 
 * @param {number} a - First operand
 * @param {number} b - Second operand
 */
function add(a, b) {
    return a + b;
}
```

## Generating the documentation site

### Configuration

Before you run webdoc, you'll need to create a configuration file in the project directory. webdoc will default to the `webdoc.conf.json` in its working directory if not specified via the `-c` option.

You can use this `webdoc.conf.json` to get started:

```json
{
    "source": {
      "include": "src",
      "exclude": "node_modules"
    }
}
```

This basically tells webdoc where your source code is, and to ignore `node_modules` (unless you want webdoc to parse through millions of lines of code!)

### Running webdoc

When you run the webdoc program, it will generate the site in a `docs` directory. If you created `webdoc.conf.json` as your configuration file, you don't have to pass any command-line arguments:

```bash
webdoc
```

Voila, now you can serve the site in the `docs` folder. You can install [serve](https://www.npmjs.com/package/serve) globally to test it out:

```
# Install serve
npm i -g server

# Run it
serve ./docs
```
