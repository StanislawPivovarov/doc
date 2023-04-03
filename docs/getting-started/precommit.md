---
title: Precommit
---

# Pre-commit Hook

Вы можете использовать Prettier, ESlint, Jest итд с инструментом предварительной фиксации. Это может форматировать ваши файлы, перед командой `git add`.

npm

```bash
$ npm i lint-staged
```

yarn

```bash
$ yarn add lint-staged
```

Это установит [husky](https://github.com/typicode/husky) и [lint-staged](https://www.npmjs.com/package/lint-staged) , а затем добавьте конфигурацию в файл package.json, которая автоматически отформатирует поддерживаемые файлы перед коммитом.

Пример:

```json
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "*.{js, jsx}": [
        "eslint --fix",
        "prettier --write",
        "git add",
        "jest --bail --findRelatedTests"
    ]
}
```
