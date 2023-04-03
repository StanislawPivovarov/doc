---
title: Node.js
order: 9
toc: 'menu'
---

# Node.js

Первое что вам нужно, это [node](https://nodejs.org/en/), убедитесь, что версия 16.17.0 LTS или выше.

[**Релизы**](https://nodejs.org/ru/about/releases/#:~:text=LTS%20(long%2Dterm%20support),Active%20LTS%20%D0%B8%D0%BB%D0%B8%20Maintenance%20LTS.)<br />
Мажорные версии Node.js меняют статус релиза на Current в течение шести месяцев, что дает авторам библиотек время для их поддержки. Через шесть месяцев нечетные релизы (9, 11 и др.) становятся неподдерживаемыми, а четные (10, 12 и др.) переходят в Active LTS статус и готовы к общему использованию. LTS (long-term support) релиз означает "долгосрочная поддержка", которая обычно гарантирует, что критические ошибки будут исправляться в течение 30 месяцев. В продакшн-приложениях должны использоваться только версии Active LTS или Maintenance LTS.

```bash
$ node -v
v16.17.0
$ npm -v
v7.0.0
```

## nvm

Для переключения между версиями `node` , потребуется установить [nvm](https://github.com/nvm-sh/nvm)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

или

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

Выполнение любой из вышеперечисленных команд згружает скрипт и выполняет его. Скрипт клонирует репозиторий в `~/.nvm` , и пытается добавить строки конфигурации из приведённого ниже фрагмента в нужный файл профиля ( `~/.bash_profile` , `~/.zshrc` , `~/.profile` , or `~/.bashrc` ).

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

После успешной установки (если по каким то причинам не удаётся узнать версию `nvm` , нужно обратиться к наставнику, или [документации](https://github.com/nvm-sh/nvm))

```bash
$ nvm -v
v0.36.0
```

### Примеры команд

Установка последней версии `node`

```bash
$ nvm install node
```

Установка версии 16.17.0

```bash
$ nvm install 16.17.0
```

Доступные версии для установки

```bash
$ nvm ls-remote
```

Использовать текущую установленную версию ( `nvm run node --version` )

```bash
$ nvm use node
```

Использование нужной версии

```bash
$ nvm exec 4.2 node --version
```

Вывод пути до исполняемого файла верcии `16.17.0`

```bash
$ nvm which 16.17.0
```

Список локально установленных версий

```bash
$ nvm ls
```

Cохранить версию для проекта, далее ( `nvm use` ), при работе c проектом

```bash
$ echo "4.2" > .nvmrc
```

Установить дефолтной версией 16.17.0

```bash
nvm alias default 16.17.0
```

### Установка текущей версии `node` при переходе в папку с проектом

Добавьте следующий код в конец файла `.zshrc` после инициализации `nvm` .

```bash
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
if [[ -f .nvmrc && -r .nvmrc ]]; then
	nvm use
elif [[ $(nvm version) != $(nvm version default)  ]]; then
	echo "Reverting to nvm default version"
	nvm use default
fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

## yarn

Чтобы устанавливать модули для `node` потребуется пакетный менеджер [yarn](https://yarnpkg.com/).

```bash
$ npm install -g yarn
$ yarn -v
v1.22.4
```

Установка версии для проекта

```bash
$ cd ~/path/to/project
$ yarn set version berry
```

Установка последней версии `yarn`

```bash
$ yarn set version latest
```

Установка последней версии прямо из ветки `master`

```bash
$ yarn set version from sources
```

### Примеры команд

Установка пакета локально в проект

```bash
$ yarn add
```

Установка пакета глобально

```bash
$ yarn global add
```

Удаление пакета

```bash
$ yarn remove
```

Обновление пакетов до последней версии

```bash
$ yarn upgrade
```

Запуск этой команды запросит у вас имя пользователя и адрес электронной почты для [npmjs.org](https://www.npmjs.com/)

```bash
$ yarn login
```

Удаление сохраненного имени пользователя и электронной почты для [npmjs.org](https://www.npmjs.com/)

```bash
$ yarn logout
```

## Переменные окружения

В процессе разработки приложения может понадобится использовать приватные данные, например секретный ключ для запросов на сторонний сервер, строка подключения к базе данных и т.д.

Такие данные не должны содержаться в коде **git** по соображениям безопасности приложения.

Мы можем хранить секретные данные, настройки сборки и другие данные в переменных окружения. Программа на **nodejs** имеет к ним доступ.

### Установка переменных окружения

Linux, MacOS
Отобразить весь список переменных можно командой:

```bash
$ printenv
```

Показать конкретную переменную можно так:

```bash
$ echo $[имя переменной без скобок]
```

Для добавления переменной можно использовать комманду **export**.

```bash
$ export MY_SECRET_KEY=ndsvn2g86nsb9hsg
```

Однако нужно помнить, такой способ задает переменную только на текущий сеанс операционной системы.

### Переменные окружения разрабатываемого приложения

Если вы разрабатываете приложение на **nodejs**, можно использовать файл **.env**, для его конфигурации. Эти файлы позволяют указать различные переменные окружения и их значения.
Просто создайте файл **.env** в корневом каталоге проекта и добавьте в него все необходимые переменные. Пример файла **.env**

```
HASURA_ENDPOINT=https://hasura.app/graphql
HASURA_SECRET=my-secret-key
```

#### **Важно добавить файлы .env в gitignore.**

### Доступ к переменным из приложения

Далее, необходимо прочитать переменные и добавить их в переменные окружения. Самый распространенный способ — использовать модуль **npm**, под названием **dotenv**. Просто установите модуль через **yarn**:

```bash
$ yarn add dotenv
```

Затем добавьте следующую строку в самое начало вашего файла (первой точки входа в приложение):

```js
require(‘dotenv’).load();
```

Пакет **dotenv** автоматически загрузит файл **.env** из корневого каталога проекта, и инициализирует значения. Подробнее читайте в документации к [пакету](https://www.npmjs.com/package/dotenv).

В nodejs есть глобальный объект **process** (доступный из любого места программы, как window в браузере), хранящий информацию о текущем процессе. У этого объекта есть свойство **env** — оно и дает доступ к переменным окружения.

```js
  const data =
      fetch(process.env.HASURA_ENDPOINT, {
              headers: {
                  'x-hasura-admin-secret': process.env.HASURA_SECRET
              }
          );
```