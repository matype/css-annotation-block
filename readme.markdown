# css-annotation-block [![Build Status](https://travis-ci.org/morishitter/css-annotation-block.svg)](https://travis-ci.org/morishitter/css-annotation-block)

A [css-annotation](https://github.com/morishitter/css-annotation-block) module to return the specific nodes

## Install

```shell
$ npm install css-annotation-block
```

## Example

`input.css`:

```css
/* @start foo */

.class {
   font-size: 12px;
}

/* @end foo */
```

```js
var fs = require('fs')
var cssAnnotationBlock = require('css-annotation-block')

var css = fs.readFileSync('input.css', 'utf-8').trim()

cssAnnotationBlock(css)
/* Return: [ { name: 'foo', nodes: [ [Object] ] } ] */
```

`name` is the name of its block.
`nodes` is PostCSS's Node object.

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
