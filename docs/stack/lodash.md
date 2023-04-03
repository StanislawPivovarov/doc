---
title: Lodash
---

# Установка

In a browser:

```html
<script src="lodash.js"></script>
```

Using npm:

```bash
$ npm i -g npm
$ npm i --save lodash
# or
$ yarn add lodash
```

In Node.js:

```javascript
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
```

Lodash
A modern JavaScript utility library delivering modularity, performance & extras.

[Официальная документация](https://lodash.com/)

## Пример

```javascript
_.defaults(
	{
		a: 1,
	},
	{
		a: 3,
		b: 2,
	},
);
// → { 'a': 1, 'b': 2 }
_.partition([1, 2, 3, 4], n => n % 2);
// → [[1, 3], [2, 4]]
```
