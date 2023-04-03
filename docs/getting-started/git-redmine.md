---
title: Git, ветки, коммиты
toc: 'menu'
---

# Git, ветки, коммиты

## Правила для веток

В каждом проекте используется следующие ветки:

-   `master` - корневая ветка проекта, создается по умолчанию;
-   `release` - ветка продакшена;
-   `develop` - основная рабочая ветка, все новые ветки создать от этой ветки;
-   `feature/task-number` || `feature/task-name` - рабочие ветки, создаются при добавлении новых фич, создавать от ветки `develop`, изменения в ветке и название должны соответствовать задаче;
-   `bugfix/task-number` || `bugfix/task-name` - рабочие ветки, создаются при исправлении багов, создавать от ветки `develop`, изменения в ветке и название должны соответствовать задаче;
-   `hotfix/some-fix-name` - ветка быстрого изменения без задачи;
-   `test` - тестовая ветка, смотрит на тестовую базу, для тестирования своих веток необходимо в своей ветке написать команду `make push.test`;

## Правила для коммитов

### Требования к именам коммитов

-   перед именем коммита должен быть указан номер задачи(в формате `#8888`)
-   названия коммитов должны быть согласно [гайдлайну](https://www.conventionalcommits.org/en/v1.0.0/)
-   должен использоваться present tense ("add feature" not "added feature")
-   должен использоваться imperative mood ("move cursor to..." not "moves cursor to...")

### Примеры имён коммитов

-   `init`: - используется для начала проекта/таска. Примеры:

```bash
    init: start youtube-task
    init: start mentor-dashboard task

```

-   `feat`: - это реализованная новая функциональность из задач (добавлена поддержка зумирования, добавлен footer, добавлена карточка продукта). Примеры:

```bash
    feat: add basic page layout
    feat: implement search box
    feat: implement request to youtube API
    feat: implement swipe for horizontal list
    feat: add additional navigation button
    feat: add banner
    feat: add social links
    feat: add physical security section
    feat: add real social icons

```

-   `fix`: - исправлена ошибка в ранее реализованной функциональности. Примеры:

```bash
    fix: implement correct loading data from youtube
    fix: change layout for video items to fix bugs
    fix: relayout header for firefox
    fix: adjust social links for mobile

```

-   `refactor`: - новая функциональность / поведение не добавлены. Файлы перемещены, удалилены, добавилены. Изменено форматирование кода (white-space, formatting, missing semi-colons, etc). Улучшен алгоритм, без изменения функциональности. Примеры:

```bash
    refactor: change structure of the project
    refactor: rename vars for better readability
    refactor: apply eslint
    refactor: apply prettier

```

-   `docs`: - используется при работе с документацией/readme проекта. Примеры:

```bash
    docs: update readme with additional information
    docs: update description of run() method

```

-   `update`: - используется при обновлении пакетов/версий. Примеры:

```bash
    update: antd version

```
