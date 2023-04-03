---
title: Umi Hooks
---

# Установка

```bash
// Install dependency
$ npm i @umijs/hooks --save
# or
$ yarn add @umijs/hooks
// Use Hooks

import { useRequest } from '@umijs/hooks';
```

Umi Hooks is a React Hooks library dedicated to providing commonly used and high quality Hooks.

[Официальная документация](https://hooks.umijs.org/)

## Пример

```javascript
import React from 'react';
import { useToggle } from '@umijs/hooks';

export default () => {
	const { state, toggle } = useToggle();

	return (
		<div>
			<p> Current Boolean: {String(state)} </p>{' '}
			<p>
				<button onClick={() => toggle()}> Toggle </button>{' '}
			</p>{' '}
		</div>
	);
};
```
