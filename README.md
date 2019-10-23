## typeof-util

[![Build Status](https://travis-ci.com/codybonney/typeof-util.svg?branch=master)](https://travis-ci.com/codybonney/typeof-util)
[![npm version](http://img.shields.io/npm/v/typeof-util.svg?style=flat)](https://npmjs.org/package/typeof-util "View this project on npm")

### Description:
A simple TypeScript utility function that acts as an enhanced version of the `typeof` operator by adding support for returning `"array"` and `"null"`. JavaScript UMD and TypeScript declaration file will be generated when building the package.

### Installation:
```
npm install typeof-util
```

### Usage:
```
import typeOf from 'typeof-util';

...

typeOf(true)  // 'boolean'
typeOf({})    // 'object'
typeOf([])    // 'array'
typeOf(null)  // 'null'
```
