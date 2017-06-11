# node-dir-to-pattern

[![Build Status](https://travis-ci.org/poppinlp/node-dir-to-pattern.svg?branch=master)](https://travis-ci.org/poppinlp/node-dir-to-pattern)
[![Dependency Status](https://david-dm.org/poppinlp/node-dir-to-pattern.svg)](https://david-dm.org/poppinlp/node-dir-to-pattern)
[![devDependency Status](https://david-dm.org/poppinlp/node-dir-to-pattern/dev-status.svg)](https://david-dm.org/poppinlp/node-dir-to-pattern#info=devDependencies)

Fix `dir` path to pattern such as `dir/**/*.*` for `grunt.file.expand`.

### Getting Started

Install with this command:

```shell
npm install dir2pattern --save-dev
```

### Usage Examples

#### Basic

```js
var fixPattern = require('dir2pattern');
cnosole.log(fixPattern('path/to/'));
// path/to/**/*.*
```

### Demo

```shell
node demo.js
```

### History

- Ver 0.0.4 Move `fix` function to `export` it self
- Ver 0.0.3 Bugfix: ignore directory name
- Ver 0.0.2 Fix readme
- Ver 0.0.1 init
