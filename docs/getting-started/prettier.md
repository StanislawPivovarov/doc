---
title: Prettier
---

# Prettier

Prettier, как видно из названия, делает ваш код красивым. Обеспечивает согласованный стиль, анализируя ваш код и повторно переписывает его со своими собственными правилами. [Документация](https://prettier.io/docs/en/index.html)

## Установка

npm

```bash
$ npm install --save-dev --save-exact prettier
```

yarn

```bash
$ yarn add --dev --exact prettier
```

Далее необходимо создать пустой файл конфигурации в корневой директории проекта, чтобы редакторы и другие инструменты знали, что вы используете Prettier:

```
.prettierrc.json
```

Затем создайте файл `.prettierignore`, чтобы Prettier CLI и редакторы знали, какие файлы не форматировать. Вот пример:

```
nginx
public
stories
node_modules
.cache
.storybook
package.json
yarn.lock
```

Добавьте ваш.prettierignore в .gitignore и .eslintignore (если они есть).

Команда для запуска редактирования кода:

```bash
$ yarn prettier --write
```

`prettier --write` отлично подходит для форматирования всех файлов проекта, но для большого проекта это может занять некоторое время. Вы можете запустить, `prettier --write app/` чтобы отформатировать определенный каталог или `prettier --write app/components/Button.js` отформатировать определенный файл.

## Настройка Prettier

Для настройки Prettier необходимо добавить ваш конфиг в файл `.prettierrc.json`.

Пример:

```json
{
  "printWidth": 120,
  "tabWidth": 4,
  "useTabs": true,
  "semi": true,
  "singleQuote": false,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "arrowParens": "avoid",
  "rangeStart": 0,
  "rangeEnd": 1000000000,
  "parser": "flow",
  "requirePragma": true,
  "insertPragma": true,
  "proseWrap": "always",
  "htmlWhitespaceSensitivity": "css",
  "endOfLine": "lf"
}
```
