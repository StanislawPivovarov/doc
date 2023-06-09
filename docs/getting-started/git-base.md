---
title: Git
toc: 'menu'
---

# Система контроля версий Git

[Git](https://git-scm.com/) — распределённая система управления версиями.

## Установка в Mac

Существует несколько способов установки Git на Mac. Самый простой — установить Xcode Command Line Tools. В версии Mavericks (10.9) и выше вы можете добиться этого просто первый раз выполнив git в терминале.

```bash
$ git --version
v2.24.3
```

## Установка в Linux

Если вы хотите установить Git под Linux как бинарный пакет, это можно сделать, используя обычный менеджер пакетов вашего дистрибутива. Если у вас Fedora (или другой похожий дистрибутив, такой как RHEL или CentOS), можно воспользоваться `dnf` :

```bash
$ sudo dnf install git
```

Если же у вас дистрибутив, основанный на Debian, например, Ubuntu, попробуйте `apt` :

```bash
$ sudo apt-get update
$ sudo apt-get install git
```

## Установка в Windows

Шаги по установке bash и git в Windows 10 были описаны в разделе [Терминал](/getting-started/terminal)

Чтобы воспользоваться дополнительными возможностями, посмотрите [инструкцию](http://git-scm.com/download/linux) по установке для нескольких различных разновидностей Unix на сайте Git.

## Git hooks

Git предоставляет возможность запуска пользовательских скриптов в случае возникновения определённых событий. Такие действия называются хуками и разделяются на две группы: серверные и клиентские. Если хуки на стороне клиента запускаются такими операциями как слияние или создание коммита, то на стороне сервера они инициируются сетевыми операциями, такими как получение отправленного коммита.

### Установка хука

Хуки хранятся в поддиректории hooks относительно основной директории Git. Для большинства проектов это .git/hooks. Когда вы инициализируете новый репозиторий командой git init, Git наполняет директорию hooks примерами скриптов, большинство из которых готовы к использованию.

Для подключения собственного скрипта достаточно задать ему соответствующее имя, поместить в поддиректорию hooks основной директории Git и сделать его исполняемым.

### Клиентские Хуки

-   `pre-commit` - хук, до того как вы напечатаете сообщение коммита. Он используется для проверки данных перед созданием коммита и позволяет увидеть если вы что-то забыли, запустить тесты, или выполнить другую необходимую проверку кода. Создание коммита будет отменено если выполнение хука завершится с кодом отличным от нуля. Пропустить выполнение хука можно с помощью `git commit --no-verify`, но так делать не нужно:) В случае если `pre-commit` показал ошибку, необходимо исправить и вновь создать коммит.
