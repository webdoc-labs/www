# Setting up tutorials

Tutorials, also called guides, are high level documentation pages that give a conceptual understanding about your software and are not tied to a specific symbol in the codebase. These guides are an example of one because they don't go into the details of specific webdoc APIs.

webdoc compiles your tutorial documents into a static state, and also lets you link to them in your API documentation.

## File layout

webdoc supports Markdown syntax for authoring tutorial documents (more to come in the future!). You should place all your tutorials under a single directory; this "tutorials" directory can be passed to the webdoc cli with the `--tutorials` option.

You should create tutorials configuration file; you can name it anything, as webdoc will scan for all JSON files in the tutorials directory. The JSON file should list all tutorials as described below:

**File structure**
```
- Tutorials directory
  - 01.md
  - 01-1.md
  - 01-2.md
  - 02.md
  - 02-1.md
  - tutorials.json
```

**Tutorials configuration syntax**

Each file should have a corresponding entry with a "title" and optionally a list of "children". The children tell webdoc how to organize the hierarchy of tutorials in the explorer view in the sidebar.

```json
{
  "01": {
    "title": "Tutorial 01",
    "children": ["01-1", "01-2"]
  },
  "01-1": {
    "title": "Tutorial 01-1"
  },
  "01-2": {
    "title": "Tutorial 01-2"
  },
  "02": {
    "title": "Tutorial 02",
    "children": ["02-1"]
  },
  "02-1": {
    "title": "Tutorial 02-1"
  }
}
```
