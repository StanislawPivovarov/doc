---
title: REACTOUR
---

# Установка

[Официальная документация](https://reactour.js.org/)

```bash
$ npm i -S reactour
# or
$ yarn add reactour
```

From v1.9.1 [styled-components](https://www.styled-components.com/) it isn't bundled into the package and is required `styled-components@^4` and react@^16.3 due to the use of [createRef](https://reactjs.org/docs/refs-and-the-dom.html#creating-refs), so:

```bash
$ npm i -S styled-components@^4.0.0
# or
$ yarn add styled-components@^4.0.0
```

## Пример

Добавьте компонент Tour в свое приложение, пропуская этапы с элементами, которые нужно выделить во время тура.

```javascript
import React, { useState } from 'react';
import Tour from 'reactour';

const steps = [
	{
		selector: '.first-step',
		content: 'This is my first Step',
	},
	// ...
];

const App = () => {
	const [isTourOpen, setIsTourOpen] = useState(false);

	return (
		<>
			{' '}
			{/* other stuff */} <Tour
				steps={steps}
				isOpen={isTourOpen}
				onRequestClose={() => setIsTourOpen(false)}
			/>{' '}
		</>
	);
};
```
