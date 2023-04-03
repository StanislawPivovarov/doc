---
title: JSDoc
toc: 'menu'
---

# JSDoc

`JSDoc` - это генератор документации для JavaScript.

Полезные ссылки:

-   [JSDoc - GitHub](https://github.com/jsdoc/jsdoc)
-   [JSDoc - официальная документация](https://jsdoc.app/index.html)
-   [JSDoc - пример готового проекта](https://github.com/jsdoc/jsdoc)

## Чем удобно

При описании вашего кода с помощью JSDoc вам потребуется указывать типы данных, что в купе с текстовым описанием кода облегчит его чтение и понимание. А уже после запустив JSDoc скрипт собирется html документация по всем описанны функциям, классам, модулям.  
[Пример собранного дока](https://cancerberosgx.github.io/jsdoc-templates-demo/demo/default/Environment.html)

## Установка

Установим npm пакет `JSDoc` глобально:

Для `npm`

```
npm install jsdoc -g
```

Для `yarn`

```
yarn global add jsdoc
```

Либо локально в develop (удобно если собираетесь кастомизировать html шаблон документации `template` )

Для `npm`

```
npm install jsdoc -D
```

Для `yarn`

```
yarn add jsdoc -D
```

## Настройка

Для изменения настроек возможно использовать собственный конфигурационный файл.  
Сначала в файл `package.json` добавим скрипт для билда доки, где в опции `-c` укажем новый конфиг

```json
	"scripts": {
		"doc": "jsdoc -c jsdoc.json"
	},
```

Теперь в корне проекта создаем конфиг `jsdoc.json` , вот пример его содержимого

```json
{
	"source": {
		"include": ["src"], //папка с исходниками проекта
		"includePattern": ".js$",
		"excludePattern": "(node_modules/|docs)"
	},
	"plugins": ["plugins/markdown"],
	"templates": {
		"cleverLinks": true,
		"monospaceLinks": true
	},
	"opts": {
		"recurse": true,
		"destination": "./docs/", //по умолчанию './out' - папка для билда
		"readme": "./readme/readme.md", //по умолчанию './README.md' - информация будт выведена на главной странице
		"tutorials": "./tutorials", //директория с туториалами
		"template": "./node_modules/docdash" //можно поменять шаблон на кастомный, напрмер такой - https://github.com/clenemt/docdash, а еще вот список разных шаблонов https://cancerberosgx.github.io/jsdoc-templates-demo/demo/
	}
}
```

[Полная информация по настройке конфига](https://jsdoc.app/about-configuring-jsdoc.html)

## Самые часто используемые теги для описания вашего кода

-   **Переменые**  
    [типы](https://jsdoc.app/tags-type.html)

-   **Функции**  
    [параметры](https://jsdoc.app/tags-param.html)  
    [возвращаемые данные](https://jsdoc.app/tags-returns.html)

-   **Классы**  
    [классы](https://jsdoc.app/tags-class.html)

-   **Другое**  
    [cсылка на другой пункт документации](https://jsdoc.app/tags-inline-link.html)  
    [пример кода](https://jsdoc.app/tags-example.html)
