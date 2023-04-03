---
title: React
---

# Введение

React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.

React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.

React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость, простоту и масштабируемость. В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как MobX, Redux и GraphQL

[Официальная документация](https://ru.reactjs.org/)

## Методы добавления React

Существует 2 основных метода для добавления React на сайт:

-   С помощью тэга `<script />`
-   С помощью `create-react-app`

### Добавление React с помощью тэга `script`

**Шаг 1** Добавьте 3 тега в контейнер head на вышей странице:

```html
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
```

Здесь подключаются библиотеки React и React-dom, а также компилятор babel.

> Babel не является обязательным для использования React, но полезным для написания кода UI, с помощью JSX.

**Шаг 2** Добавьте пустой контейнер на вашу страницу чтобы отметить место, где вы хотите что-либо отобразить с помощью React.

**Шаг 3** Теперь вы можете использовать React вместе с JSX в любом теге script, добавив к нему атрибут type=«text/babel».

Пример:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>My first React app</title>
		<script
			src="https://unpkg.com/react@16/umd/react.development.js"
			crossorigin
		></script>
		<script
			src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
			crossorigin
		></script>
		<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
	</head>

	<body>
		<div id="root"></div>

		<script type="text/babel">
			ReactDOM.render(
				<h1>Hello world</h1>,
				document.querySelector('#root'),
			);
		</script>
	</body>
</html>
```

### Добавление React с помощью create-react-app

Инструменты, используемые для разработки React, опираются на Node.js, поэтому первое что вам необходимо сделать, это установить [Node]https://nodejs.org/en/download/), что бы использовать npm.

Пакет create-react-app является стандартным способом создания и управления сложными пакетами React и предоставляет разработчикам полный набор инструментов. Используйте [create-react-app]https://create-react-app.dev/), для создания нового React приложения.

После установки nodejs, для установки create-react-app:

```bash
// npx
$ npx create-react-app my-app

// npm
$ npm init react-app my-app

// yarn
$ yarn create react-app my-app
```

Выбор за вами какой инструмент использовать (npx, npm, yarn) для создания React приложения.

Когда вы создаете новое приложение, CLI будет использовать Yarn для установки зависимостей (если они доступны). Если у вас установлен Yarn, но вы предпочитаете использовать npm, вы можете добавить --use-npm к команде создания. Например:

```bash
$ npx create-react-app my-app --use-npm
```

Выполнение любой из этих команд создаст каталог с именем my-app внутри текущей папки. Внутри этого каталога будет сгенерирована исходная структура проекта и установлены необходимые зависимости:

```jade
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

Для запуска приложения в режиме разработки перейдите в папку с вашим приложением и выполните npm start или yarn start:

```bash
$ cd my-app
$ npm start
```

Страница автоматически перезагрузится, если вы внесете изменения в код. Вы увидите ошибки сборки и предупреждения в консоли. Откройте `localhost:3000` , чтобы просмотреть приложение в браузере.

Обратите внимание! Для сборки проекта эти файлы должны существовать с точными именами файлов:

-   `public / index.html` — шаблон страницы;
-   `src / index.js` — это точка входа JavaScript.

Вы можете удалять или переименовывать другие файлы.
