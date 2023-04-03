// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/ph.photovarov/Desktop/Work/doc-hm/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/help",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/help.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/help.md",
          "updatedTime": 1660566522000,
          "title": "Информация",
          "order": 1,
          "nav": {
            "title": "Информация",
            "order": 10,
            "path": "/help"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Раздел полезной информации",
              "heading": "раздел-полезной-информации"
            }
          ]
        },
        "title": "Информация - HeadMade Doc"
      },
      {
        "path": "/",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1660566522000,
          "title": "HeadMade Doc",
          "desc": "необходимые правила настройки окружения и работы в команде",
          "order": 10,
          "hero": {
            "title": "HeadMade Doc",
            "desc": "<div class=\"markdown\"><p>необходимые правила настройки окружения и работы в команде</p></div>",
            "actions": [
              {
                "text": "Начало работы",
                "link": "/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1920px-Unofficial_JavaScript_logo_2.svg.png",
              "title": "JavaScript",
              "desc": "<div class=\"markdown\"><p>Мультипарадигменный язык программирования</p></div>"
            },
            {
              "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
              "title": "React",
              "desc": "<div class=\"markdown\"><p>JavaScript-библиотека для создания пользовательских интерфейсов</p></div>"
            },
            {
              "icon": "https://graphql.org/img/logo.svg",
              "title": "GraphQL",
              "desc": "<div class=\"markdown\"><p>Язык запросов для API и среда выполнения этих запросов</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2018-present<br />Powered by <a href=\"http://headmade.pro/\" target=\"_blank\">HeadMade<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": []
        },
        "title": "HeadMade Doc - HeadMade Doc"
      },
      {
        "path": "/getting-started/alpha-chrome",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/alpha-chrome.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/alpha-chrome.md",
          "updatedTime": 1660566522000,
          "title": "Alpha Chrome",
          "slugs": [
            {
              "depth": 1,
              "value": "Google Chrome для разработчиков",
              "heading": "google-chrome-для-разработчиков"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Alpha Chrome - HeadMade Doc"
      },
      {
        "path": "/getting-started/browser-chrome",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/browser-chrome.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/browser-chrome.md",
          "updatedTime": 1660566522000,
          "title": "Google Chrome",
          "nav": {
            "title": "Google Chrome",
            "order": 1,
            "path": "/getting-started"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Google Chrome",
              "heading": "google-chrome"
            },
            {
              "depth": 2,
              "value": "Расширении для Google Chrome",
              "heading": "расширении-для-google-chrome"
            },
            {
              "depth": 3,
              "value": "React Developer Tools",
              "heading": "react-developer-tools"
            },
            {
              "depth": 3,
              "value": "Redux DevTools",
              "heading": "redux-devtools"
            },
            {
              "depth": 3,
              "value": "Apollo Client Developer Tools",
              "heading": "apollo-client-developer-tools"
            },
            {
              "depth": 3,
              "value": "Wappalyzer",
              "heading": "wappalyzer"
            },
            {
              "depth": 3,
              "value": "Postman Interceptor",
              "heading": "postman-interceptor"
            }
          ]
        },
        "title": "Google Chrome - HeadMade Doc"
      },
      {
        "path": "/getting-started/browser-fire-fox",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/browser-fireFox.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/browser-fireFox.md",
          "updatedTime": 1660566522000,
          "title": "Mozilla FireFox",
          "nav": {
            "order": 1,
            "path": "/getting-started",
            "title": "Начало работы"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Mozilla FireFox",
              "heading": "mozilla-firefox"
            },
            {
              "depth": 2,
              "value": "Расширении для Mozilla FireFox",
              "heading": "расширении-для-mozilla-firefox"
            },
            {
              "depth": 3,
              "value": "React Developer Tools",
              "heading": "react-developer-tools"
            },
            {
              "depth": 3,
              "value": "Redux DevTools",
              "heading": "redux-devtools"
            },
            {
              "depth": 3,
              "value": "Apollo Client Developer Tools",
              "heading": "apollo-client-developer-tools"
            },
            {
              "depth": 3,
              "value": "Wappalyzer",
              "heading": "wappalyzer"
            },
            {
              "depth": 3,
              "value": "Interceptor",
              "heading": "interceptor"
            }
          ]
        },
        "title": "Mozilla FireFox - HeadMade Doc"
      },
      {
        "path": "/getting-started/browserlistrc",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/browserlistrc.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/browserlistrc.md",
          "updatedTime": 1660566522000,
          "title": "Browserslist",
          "slugs": [
            {
              "depth": 1,
              "value": "Browserslist",
              "heading": "browserslist"
            },
            {
              "depth": 2,
              "value": "How to Add Browserslist to Your Project",
              "heading": "how-to-add-browserslist-to-your-project"
            },
            {
              "depth": 2,
              "value": "Who Uses Browserslist",
              "heading": "who-uses-browserslist"
            },
            {
              "depth": 3,
              "value": "Developers",
              "heading": "developers"
            },
            {
              "depth": 3,
              "value": "Autoprefixer",
              "heading": "autoprefixer"
            },
            {
              "depth": 3,
              "value": "Babel",
              "heading": "babel"
            },
            {
              "depth": 3,
              "value": "PostCSS Preset Env",
              "heading": "postcss-preset-env"
            },
            {
              "depth": 3,
              "value": "PostCSS Normalize",
              "heading": "postcss-normalize"
            },
            {
              "depth": 3,
              "value": "ESLint",
              "heading": "eslint"
            },
            {
              "depth": 3,
              "value": "Stylelint",
              "heading": "stylelint"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Browserslist - HeadMade Doc"
      },
      {
        "path": "/getting-started/conflicts",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/conflicts.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/conflicts.md",
          "updatedTime": 1660566522000,
          "title": "Решение конфликтов",
          "slugs": [
            {
              "depth": 1,
              "value": "Решение конфликтов",
              "heading": "решение-конфликтов"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Решение конфликтов - HeadMade Doc"
      },
      {
        "path": "/getting-started/debugger",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/debugger.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/debugger.md",
          "updatedTime": 1660566522000,
          "title": "Debugger",
          "slugs": [
            {
              "depth": 2,
              "value": "debugger",
              "heading": "debugger"
            },
            {
              "depth": 3,
              "value": "Синтаксис",
              "heading": "синтаксис"
            },
            {
              "depth": 3,
              "value": "Пример",
              "heading": "пример"
            },
            {
              "depth": 3,
              "value": "Поддержка настольных браузеров",
              "heading": "поддержка-настольных-браузеров"
            },
            {
              "depth": 3,
              "value": "Поддержка мобильных браузеров",
              "heading": "поддержка-мобильных-браузеров"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Debugger - HeadMade Doc"
      },
      {
        "path": "/getting-started/editorconfig",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/editorconfig.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/editorconfig.md",
          "updatedTime": 1660566522000,
          "title": "Editorconfig",
          "slugs": [
            {
              "depth": 1,
              "value": "Editorconfig",
              "heading": "editorconfig"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Editorconfig - HeadMade Doc"
      },
      {
        "path": "/getting-started/eslint",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/eslint.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/eslint.md",
          "updatedTime": 1660566522000,
          "title": "ESlint",
          "slugs": [
            {
              "depth": 1,
              "value": "ESlint",
              "heading": "eslint"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Конфигурация",
              "heading": "конфигурация"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "ESlint - HeadMade Doc"
      },
      {
        "path": "/getting-started/git-base",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/git-base.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/git-base.md",
          "updatedTime": 1661498673000,
          "title": "Git",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Система контроля версий Git",
              "heading": "система-контроля-версий-git"
            },
            {
              "depth": 2,
              "value": "Установка в Mac",
              "heading": "установка-в-mac"
            },
            {
              "depth": 2,
              "value": "Установка в Linux",
              "heading": "установка-в-linux"
            },
            {
              "depth": 2,
              "value": "Установка в Windows",
              "heading": "установка-в-windows"
            },
            {
              "depth": 2,
              "value": "Git hooks",
              "heading": "git-hooks"
            },
            {
              "depth": 3,
              "value": "Установка хука",
              "heading": "установка-хука"
            },
            {
              "depth": 3,
              "value": "Клиентские Хуки",
              "heading": "клиентские-хуки"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Git - HeadMade Doc"
      },
      {
        "path": "/getting-started/git-redmine",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/git-redmine.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/git-redmine.md",
          "updatedTime": 1660566522000,
          "title": "Git, ветки, коммиты",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Git, ветки, коммиты",
              "heading": "git-ветки-коммиты"
            },
            {
              "depth": 2,
              "value": "Правила для веток",
              "heading": "правила-для-веток"
            },
            {
              "depth": 2,
              "value": "Правила для коммитов",
              "heading": "правила-для-коммитов"
            },
            {
              "depth": 3,
              "value": "Требования к именам коммитов",
              "heading": "требования-к-именам-коммитов"
            },
            {
              "depth": 3,
              "value": "Примеры имён коммитов",
              "heading": "примеры-имён-коммитов"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Git, ветки, коммиты - HeadMade Doc"
      },
      {
        "path": "/getting-started/git-repository",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/git-repository.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/git-repository.md",
          "updatedTime": 1660566522000,
          "title": "Работа с репозиторием",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Работа с репозиторием",
              "heading": "работа-с-репозиторием"
            },
            {
              "depth": 2,
              "value": "Инструкция по созданию и работе",
              "heading": "инструкция-по-созданию-и-работе"
            },
            {
              "depth": 2,
              "value": "Передача задачи в случае невыполнения",
              "heading": "передача-задачи-в-случае-невыполнения"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Работа с репозиторием - HeadMade Doc"
      },
      {
        "path": "/getting-started/gitconfig",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/gitconfig.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/gitconfig.md",
          "updatedTime": 1660566522000,
          "title": ".gitconfig",
          "slugs": [
            {
              "depth": 1,
              "value": ".gitconfig",
              "heading": "gitconfig"
            },
            {
              "depth": 2,
              "value": "Первоначальная настройка Git",
              "heading": "первоначальная-настройка-git"
            },
            {
              "depth": 2,
              "value": "Имя пользователя",
              "heading": "имя-пользователя"
            },
            {
              "depth": 2,
              "value": "Выбор редактора",
              "heading": "выбор-редактора"
            },
            {
              "depth": 2,
              "value": "Просмотр конфига",
              "heading": "просмотр-конфига"
            },
            {
              "depth": 2,
              "value": "alias",
              "heading": "alias"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": ".gitconfig - HeadMade Doc"
      },
      {
        "path": "/getting-started/gitignore",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/gitignore.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/gitignore.md",
          "updatedTime": 1660566522000,
          "title": ".gitignore",
          "slugs": [
            {
              "depth": 1,
              "value": ".gitignore",
              "heading": "gitignore"
            },
            {
              "depth": 2,
              "value": "Основной синтаксис:",
              "heading": "основной-синтаксис"
            },
            {
              "depth": 2,
              "value": "Как игнорировать файлы, которые уже отслеживаются?",
              "heading": "как-игнорировать-файлы-которые-уже-отслеживаются"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": ".gitignore - HeadMade Doc"
      },
      {
        "path": "/getting-started",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/index.md",
          "updatedTime": 1660566522000,
          "title": "Введение",
          "order": 1,
          "nav": {
            "title": "Начало работы",
            "order": 0,
            "path": "/getting-started"
          },
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Введение",
              "heading": "введение"
            }
          ]
        },
        "title": "Введение - HeadMade Doc"
      },
      {
        "path": "/getting-started/js-doc",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/js-doc.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/js-doc.md",
          "updatedTime": 1660566522000,
          "title": "JSDoc",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "JSDoc",
              "heading": "jsdoc"
            },
            {
              "depth": 2,
              "value": "Чем удобно",
              "heading": "чем-удобно"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Настройка",
              "heading": "настройка"
            },
            {
              "depth": 2,
              "value": "Самые часто используемые теги для описания вашего кода",
              "heading": "самые-часто-используемые-теги-для-описания-вашего-кода"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "JSDoc - HeadMade Doc"
      },
      {
        "path": "/getting-started/lighthouse",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/lighthouse.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/lighthouse.md",
          "updatedTime": 1660566522000,
          "title": "Lighthouse",
          "slugs": [
            {
              "depth": 1,
              "value": "Lighthouse",
              "heading": "lighthouse"
            },
            {
              "depth": 2,
              "value": "Get started",
              "heading": "get-started"
            },
            {
              "depth": 3,
              "value": "Run Lighthouse in Chrome DevTools",
              "heading": "run-lighthouse-in-chrome-devtools"
            },
            {
              "depth": 3,
              "value": "Install and run the Node command line tool",
              "heading": "install-and-run-the-node-command-line-tool"
            },
            {
              "depth": 3,
              "value": "Run Lighthouse as a Chrome Extension",
              "heading": "run-lighthouse-as-a-chrome-extension"
            },
            {
              "depth": 3,
              "value": "Run PageSpeed Insights",
              "heading": "run-pagespeed-insights"
            },
            {
              "depth": 2,
              "value": "Share and view reports online",
              "heading": "share-and-view-reports-online"
            },
            {
              "depth": 3,
              "value": "Share reports as JSON",
              "heading": "share-reports-as-json"
            },
            {
              "depth": 3,
              "value": "Share reports as GitHub Gists",
              "heading": "share-reports-as-github-gists"
            },
            {
              "depth": 2,
              "value": "Lighthouse extensibility",
              "heading": "lighthouse-extensibility"
            },
            {
              "depth": 2,
              "value": "Integrate Lighthouse",
              "heading": "integrate-lighthouse"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Lighthouse - HeadMade Doc"
      },
      {
        "path": "/getting-started/nodejs",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/nodejs.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/nodejs.md",
          "updatedTime": 1661498673000,
          "title": "Node.js",
          "order": 9,
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Node.js",
              "heading": "nodejs"
            },
            {
              "depth": 2,
              "value": "nvm",
              "heading": "nvm"
            },
            {
              "depth": 3,
              "value": "Примеры команд",
              "heading": "примеры-команд"
            },
            {
              "depth": 3,
              "value": "Установка текущей версии node при переходе в папку с проектом",
              "heading": "установка-текущей-версии-node-при-переходе-в-папку-с-проектом"
            },
            {
              "depth": 2,
              "value": "yarn",
              "heading": "yarn"
            },
            {
              "depth": 3,
              "value": "Примеры команд",
              "heading": "примеры-команд-1"
            },
            {
              "depth": 2,
              "value": "Переменные окружения",
              "heading": "переменные-окружения"
            },
            {
              "depth": 3,
              "value": "Установка переменных окружения",
              "heading": "установка-переменных-окружения"
            },
            {
              "depth": 3,
              "value": "Переменные окружения разрабатываемого приложения",
              "heading": "переменные-окружения-разрабатываемого-приложения"
            },
            {
              "depth": 4,
              "value": "Важно добавить файлы .env в gitignore.",
              "heading": "важно-добавить-файлы-env-в-gitignore"
            },
            {
              "depth": 3,
              "value": "Доступ к переменным из приложения",
              "heading": "доступ-к-переменным-из-приложения"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Node.js - HeadMade Doc"
      },
      {
        "path": "/getting-started/node-js-debugging",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/nodeJsDebugging.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/nodeJsDebugging.md",
          "updatedTime": 1660566522000,
          "title": "Node.js --inspect",
          "slugs": [
            {
              "depth": 1,
              "value": "Руководство по отладке",
              "heading": "руководство-по-отладке"
            },
            {
              "depth": 2,
              "value": "Активация",
              "heading": "активация"
            },
            {
              "depth": 2,
              "value": "Последствия для безопасности",
              "heading": "последствия-для-безопасности"
            },
            {
              "depth": 3,
              "value": "Публичное обличение порта отладки небезопасно",
              "heading": "публичное-обличение-порта-отладки-небезопасно"
            },
            {
              "depth": 3,
              "value": "Локальные приложения имеют полный доступ к инспектору",
              "heading": "локальные-приложения-имеют-полный-доступ-к-инспектору"
            },
            {
              "depth": 3,
              "value": "Браузеры, WebSockets, same-origin policy",
              "heading": "браузеры-websockets-same-origin-policy"
            },
            {
              "depth": 2,
              "value": "Клиенты инспектора",
              "heading": "клиенты-инспектора"
            },
            {
              "depth": 3,
              "value": "node inspect",
              "heading": "node-inspect"
            },
            {
              "depth": 3,
              "value": "Инструменты разработчика Chrome 55+ , Microsoft Edge",
              "heading": "инструменты-разработчика-chrome-55--microsoft-edge"
            },
            {
              "depth": 3,
              "value": "Visual Studio Code 1.10+",
              "heading": "visual-studio-code-110"
            },
            {
              "depth": 3,
              "value": "Visual Studio 2017",
              "heading": "visual-studio-2017"
            },
            {
              "depth": 3,
              "value": "JetBrains WebStorm 2017.1+ другие IDE JetBrains",
              "heading": "jetbrains-webstorm-20171-другие-ide-jetbrains"
            },
            {
              "depth": 3,
              "value": "chrome-remote-interface",
              "heading": "chrome-remote-interface"
            },
            {
              "depth": 3,
              "value": "Gitpod",
              "heading": "gitpod"
            },
            {
              "depth": 2,
              "value": "Аргументы командной строки",
              "heading": "аргументы-командной-строки"
            },
            {
              "depth": 2,
              "value": "Включение сценариев удаленной отладки",
              "heading": "включение-сценариев-удаленной-отладки"
            },
            {
              "depth": 2,
              "value": "Устаревший Debugger",
              "heading": "устаревший-debugger"
            },
            {
              "depth": 3,
              "value": "Встроенный отладчик",
              "heading": "встроенный-отладчик"
            },
            {
              "depth": 3,
              "value": "node-inspector",
              "heading": "node-inspector"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Node.js --inspect - HeadMade Doc"
      },
      {
        "path": "/getting-started/npmrc",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/npmrc.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/npmrc.md",
          "updatedTime": 1660566522000,
          "title": "npmrc",
          "slugs": [
            {
              "depth": 1,
              "value": "npmrc",
              "heading": "npmrc"
            },
            {
              "depth": 2,
              "value": "Файлы",
              "heading": "файлы"
            },
            {
              "depth": 2,
              "value": "Комментарии",
              "heading": "комментарии"
            },
            {
              "depth": 2,
              "value": "Конфигурационный файл для каждого проекта",
              "heading": "конфигурационный-файл-для-каждого-проекта"
            },
            {
              "depth": 2,
              "value": "Файл конфигурации для каждого пользователя",
              "heading": "файл-конфигурации-для-каждого-пользователя"
            },
            {
              "depth": 2,
              "value": "Глобальный файл конфигурации",
              "heading": "глобальный-файл-конфигурации"
            },
            {
              "depth": 2,
              "value": "Встроенный файл конфигурации",
              "heading": "встроенный-файл-конфигурации"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "npmrc - HeadMade Doc"
      },
      {
        "path": "/getting-started/postman",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/postman.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/postman.md",
          "updatedTime": 1660566522000,
          "title": "Postman",
          "slugs": [
            {
              "depth": 1,
              "value": "Postman",
              "heading": "postman"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Введение",
              "heading": "введение"
            },
            {
              "depth": 3,
              "value": "Collection",
              "heading": "collection"
            },
            {
              "depth": 3,
              "value": "Folder",
              "heading": "folder"
            },
            {
              "depth": 3,
              "value": "Request",
              "heading": "request"
            },
            {
              "depth": 3,
              "value": "Скрипты",
              "heading": "скрипты"
            },
            {
              "depth": 3,
              "value": "Переменные",
              "heading": "переменные"
            },
            {
              "depth": 3,
              "value": "Collection Runner",
              "heading": "collection-runner"
            },
            {
              "depth": 3,
              "value": "Console",
              "heading": "console"
            },
            {
              "depth": 2,
              "value": "Практика",
              "heading": "практика"
            },
            {
              "depth": 3,
              "value": "Шаг 1",
              "heading": "шаг-1"
            },
            {
              "depth": 3,
              "value": "Шаг 2",
              "heading": "шаг-2"
            },
            {
              "depth": 3,
              "value": "Шаг 3",
              "heading": "шаг-3"
            },
            {
              "depth": 3,
              "value": "Шаг 4",
              "heading": "шаг-4"
            },
            {
              "depth": 3,
              "value": "Шаг 5",
              "heading": "шаг-5"
            },
            {
              "depth": 2,
              "value": "Дополнительно",
              "heading": "дополнительно"
            },
            {
              "depth": 3,
              "value": "Установка и получение переменных",
              "heading": "установка-и-получение-переменных"
            },
            {
              "depth": 3,
              "value": "Тестирование или asserts",
              "heading": "тестирование-или-asserts"
            },
            {
              "depth": 3,
              "value": "Создание запросов",
              "heading": "создание-запросов"
            },
            {
              "depth": 3,
              "value": "Получение ответа для основного запроса",
              "heading": "получение-ответа-для-основного-запроса"
            },
            {
              "depth": 3,
              "value": "Работа со встроенными библиотеками",
              "heading": "работа-со-встроенными-библиотеками"
            },
            {
              "depth": 3,
              "value": "Получение информации о текущем скрипте",
              "heading": "получение-информации-о-текущем-скрипте"
            },
            {
              "depth": 3,
              "value": "Управление последовательностью запросов из скрипта",
              "heading": "управление-последовательностью-запросов-из-скрипта"
            },
            {
              "depth": 3,
              "value": "Создание глобального хелпера",
              "heading": "создание-глобального-хелпера"
            },
            {
              "depth": 2,
              "value": "Заключение",
              "heading": "заключение"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Postman - HeadMade Doc"
      },
      {
        "path": "/getting-started/precommit",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/precommit.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/precommit.md",
          "updatedTime": 1660566522000,
          "title": "Precommit",
          "slugs": [
            {
              "depth": 1,
              "value": "Pre-commit Hook",
              "heading": "pre-commit-hook"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Precommit - HeadMade Doc"
      },
      {
        "path": "/getting-started/prettier",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/prettier.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/prettier.md",
          "updatedTime": 1660566522000,
          "title": "Prettier",
          "slugs": [
            {
              "depth": 1,
              "value": "Prettier",
              "heading": "prettier"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Настройка Prettier",
              "heading": "настройка-prettier"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Prettier - HeadMade Doc"
      },
      {
        "path": "/getting-started/redmine",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/redmine.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/redmine.md",
          "updatedTime": 1660566522000,
          "title": "Redmine",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Redmine",
              "heading": "redmine"
            },
            {
              "depth": 2,
              "value": "Создание задач",
              "heading": "создание-задач"
            },
            {
              "depth": 2,
              "value": "Выполнение",
              "heading": "выполнение"
            },
            {
              "depth": 3,
              "value": "Этапы выполнения",
              "heading": "этапы-выполнения"
            },
            {
              "depth": 3,
              "value": "Смена исполнителя",
              "heading": "смена-исполнителя"
            },
            {
              "depth": 3,
              "value": "Статусы",
              "heading": "статусы"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Redmine - HeadMade Doc"
      },
      {
        "path": "/getting-started/ssh",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/ssh.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/ssh.md",
          "updatedTime": 1661498673000,
          "title": "SSH",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "SSH",
              "heading": "ssh"
            },
            {
              "depth": 2,
              "value": "Генерация SSH ключа",
              "heading": "генерация-ssh-ключа"
            },
            {
              "depth": 3,
              "value": "Шаг 1",
              "heading": "шаг-1"
            },
            {
              "depth": 3,
              "value": "Шаг 2",
              "heading": "шаг-2"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "SSH - HeadMade Doc"
      },
      {
        "path": "/getting-started/stylelint",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/stylelint.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/stylelint.md",
          "updatedTime": 1660566522000,
          "title": "Stylelint",
          "slugs": [
            {
              "depth": 1,
              "value": "Stylelint",
              "heading": "stylelint"
            },
            {
              "depth": 2,
              "value": "Характеристики",
              "heading": "характеристики"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Игнорирование кода",
              "heading": "игнорирование-кода"
            },
            {
              "depth": 3,
              "value": "Внутри файлов",
              "heading": "внутри-файлов"
            },
            {
              "depth": 2,
              "value": "Настройка Stylelint",
              "heading": "настройка-stylelint"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Stylelint - HeadMade Doc"
      },
      {
        "path": "/getting-started/terminal",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/terminal.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/terminal.md",
          "updatedTime": 1661498673000,
          "title": "Терминал",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Терминал",
              "heading": "терминал"
            },
            {
              "depth": 2,
              "value": "Oh My Zsh",
              "heading": "oh-my-zsh"
            },
            {
              "depth": 3,
              "value": "Темы",
              "heading": "темы"
            },
            {
              "depth": 3,
              "value": "Плагины",
              "heading": "плагины"
            },
            {
              "depth": 2,
              "value": "Oh My Fish",
              "heading": "oh-my-fish"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Терминал - HeadMade Doc"
      },
      {
        "path": "/getting-started/testing-check-list",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/testingCheckList.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/testingCheckList.md",
          "updatedTime": 1660566522000,
          "title": "Чек лист по тестированию",
          "slugs": [
            {
              "depth": 1,
              "value": "Чек лист по тестированию",
              "heading": "чек-лист-по-тестированию"
            },
            {
              "depth": 2,
              "value": "Проверка переходов по ссылкам с передачей GET-параметров",
              "heading": "проверка-переходов-по-ссылкам-с-передачей-get-параметров"
            },
            {
              "depth": 2,
              "value": "Проверка на соответствие макету",
              "heading": "проверка-на-соответствие-макету"
            },
            {
              "depth": 2,
              "value": "Проверка кода линтером",
              "heading": "проверка-кода-линтером"
            },
            {
              "depth": 2,
              "value": "Проверка кода валидатором",
              "heading": "проверка-кода-валидатором"
            },
            {
              "depth": 2,
              "value": "Проверка фавиконки",
              "heading": "проверка-фавиконки"
            },
            {
              "depth": 2,
              "value": "Шрифты",
              "heading": "шрифты"
            },
            {
              "depth": 2,
              "value": "Проверка на типографирование",
              "heading": "проверка-на-типографирование"
            },
            {
              "depth": 2,
              "value": "Проверка выделения текста",
              "heading": "проверка-выделения-текста"
            },
            {
              "depth": 2,
              "value": "Проверка иконок и изображений",
              "heading": "проверка-иконок-и-изображений"
            },
            {
              "depth": 2,
              "value": "Проверка интерактивных элементов",
              "heading": "проверка-интерактивных-элементов"
            },
            {
              "depth": 2,
              "value": "Проверка свайпа и drag'n'drop",
              "heading": "проверка-свайпа-и-dragndrop"
            },
            {
              "depth": 2,
              "value": "Проверка навигации по сайту с помощью клавиатуры",
              "heading": "проверка-навигации-по-сайту-с-помощью-клавиатуры"
            },
            {
              "depth": 2,
              "value": "Проверка кнопок",
              "heading": "проверка-кнопок"
            },
            {
              "depth": 2,
              "value": "Проверка ссылок",
              "heading": "проверка-ссылок"
            },
            {
              "depth": 2,
              "value": "Проверка кликабельной области элементов",
              "heading": "проверка-кликабельной-области-элементов"
            },
            {
              "depth": 2,
              "value": "Проверка анимаций",
              "heading": "проверка-анимаций"
            },
            {
              "depth": 2,
              "value": "Проверка верстки стресстестом",
              "heading": "проверка-верстки-стресстестом"
            },
            {
              "depth": 2,
              "value": "Проверка сайта с включенным блокировщиком рекламы",
              "heading": "проверка-сайта-с-включенным-блокировщиком-рекламы"
            },
            {
              "depth": 2,
              "value": "Проверка переходов на страницы по прямой ссылке",
              "heading": "проверка-переходов-на-страницы-по-прямой-ссылке"
            },
            {
              "depth": 2,
              "value": "Проверка переходов между страницами",
              "heading": "проверка-переходов-между-страницами"
            },
            {
              "depth": 2,
              "value": "Проверка навигации с помощью истории браузера",
              "heading": "проверка-навигации-с-помощью-истории-браузера"
            },
            {
              "depth": 2,
              "value": "Кроссбраузерность и кроссплатформенность",
              "heading": "кроссбраузерность-и-кроссплатформенность"
            },
            {
              "depth": 2,
              "value": "Проверка адаптивности (десктоп)",
              "heading": "проверка-адаптивности-десктоп"
            },
            {
              "depth": 2,
              "value": "Проверка адаптивности (планшеты и мобильные устройства)",
              "heading": "проверка-адаптивности-планшеты-и-мобильные-устройства"
            },
            {
              "depth": 2,
              "value": "Проверка работоспособности сайта при ресайзе",
              "heading": "проверка-работоспособности-сайта-при-ресайзе"
            },
            {
              "depth": 2,
              "value": "Проверка метатегов",
              "heading": "проверка-метатегов"
            },
            {
              "depth": 2,
              "value": "Проверка шеринга",
              "heading": "проверка-шеринга"
            },
            {
              "depth": 2,
              "value": "Проверка аналитики",
              "heading": "проверка-аналитики"
            },
            {
              "depth": 2,
              "value": "Проверка контента",
              "heading": "проверка-контента"
            },
            {
              "depth": 2,
              "value": "Проверка размера загружаемых ресурсов",
              "heading": "проверка-размера-загружаемых-ресурсов"
            },
            {
              "depth": 2,
              "value": "Проверка производительности сайта",
              "heading": "проверка-производительности-сайта"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "Чек лист по тестированию - HeadMade Doc"
      },
      {
        "path": "/getting-started/vscode",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/getting-started/vscode.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started/vscode.md",
          "updatedTime": 1660566522000,
          "title": "VS Code",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "VS Code",
              "heading": "vs-code"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Необходимые плагины для работы",
              "heading": "необходимые-плагины-для-работы"
            },
            {
              "depth": 3,
              "value": "Список необходимых плагинов",
              "heading": "список-необходимых-плагинов"
            },
            {
              "depth": 2,
              "value": "Command Line Interface (CLI)",
              "heading": "command-line-interface-cli"
            },
            {
              "depth": 3,
              "value": "Command line help",
              "heading": "command-line-help"
            },
            {
              "depth": 3,
              "value": "Launching from command line",
              "heading": "launching-from-command-line"
            },
            {
              "depth": 2,
              "value": "Параметры",
              "heading": "параметры"
            },
            {
              "depth": 2,
              "value": "Горячие клавиши",
              "heading": "горячие-клавиши"
            },
            {
              "depth": 3,
              "value": "Keyboard Shortcuts editor",
              "heading": "keyboard-shortcuts-editor"
            },
            {
              "depth": 3,
              "value": "Keyboard Shortcuts macOS",
              "heading": "keyboard-shortcuts-macos"
            },
            {
              "depth": 3,
              "value": "Keyboard Shortcuts Linux",
              "heading": "keyboard-shortcuts-linux"
            }
          ],
          "nav": {
            "path": "/getting-started",
            "title": "Начало работы"
          }
        },
        "title": "VS Code - HeadMade Doc"
      },
      {
        "path": "/learning/css-base",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/css-base.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/css-base.md",
          "updatedTime": 1660566522000,
          "title": "Основы работы с CSS",
          "slugs": [
            {
              "depth": 1,
              "value": "Основы работы c CSS",
              "heading": "основы-работы-c-css"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Основы работы с CSS - HeadMade Doc"
      },
      {
        "path": "/learning/css-block-markup",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/css-block-markup.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/css-block-markup.md",
          "updatedTime": 1660566522000,
          "title": "Основы блочной вёрстки",
          "slugs": [
            {
              "depth": 1,
              "value": "Основы блочной вёрстки",
              "heading": "основы-блочной-вёрстки"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Основы блочной вёрстки - HeadMade Doc"
      },
      {
        "path": "/learning/css-borders",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/css-borders.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/css-borders.md",
          "updatedTime": 1660566522000,
          "title": "Рамки",
          "slugs": [
            {
              "depth": 1,
              "value": "Рамки",
              "heading": "рамки"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Рамки - HeadMade Doc"
      },
      {
        "path": "/learning/css-experiments",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/css-experiments.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/css-experiments.md",
          "updatedTime": 1660566522000,
          "title": "Эксперименты с CSS",
          "slugs": [
            {
              "depth": 1,
              "value": "Эксперименты с CSS",
              "heading": "эксперименты-с-css"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Эксперименты с CSS - HeadMade Doc"
      },
      {
        "path": "/learning/css-formatting",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/css-formatting.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/css-formatting.md",
          "updatedTime": 1660566522000,
          "title": "Форматирование текста",
          "slugs": [
            {
              "depth": 1,
              "value": "Форматирование текста",
              "heading": "форматирование-текста"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Форматирование текста - HeadMade Doc"
      },
      {
        "path": "/learning/css-introducing",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/css-introducing.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/css-introducing.md",
          "updatedTime": 1660566522000,
          "title": "Введение",
          "slugs": [],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Введение - HeadMade Doc"
      },
      {
        "path": "/learning/css-lists",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/css-lists.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/css-lists.md",
          "updatedTime": 1660566522000,
          "title": "Списки",
          "slugs": [
            {
              "depth": 1,
              "value": "Списки",
              "heading": "списки"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Списки - HeadMade Doc"
      },
      {
        "path": "/learning/css-pseudo",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/css-pseudo.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/css-pseudo.md",
          "updatedTime": 1660566522000,
          "title": "Псевдоэлементы и псевдоклассы",
          "slugs": [
            {
              "depth": 1,
              "value": "Псевдоэлементы и псевдоклассы",
              "heading": "псевдоэлементы-и-псевдоклассы"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Псевдоэлементы и псевдоклассы - HeadMade Doc"
      },
      {
        "path": "/learning/html-cpc-map",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-cpc-map.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-cpc-map.md",
          "updatedTime": 1660566522000,
          "title": "Карты(CPC)",
          "slugs": [],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Карты(CPC) - HeadMade Doc"
      },
      {
        "path": "/learning/html-exercise-markup",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-exercise-markup.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-exercise-markup.md",
          "updatedTime": 1660566522000,
          "title": "Контрольное задание. Разметка",
          "slugs": [
            {
              "depth": 1,
              "value": "Разметка. Контрольное задание",
              "heading": "разметка-контрольное-задание"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Контрольное задание. Разметка - HeadMade Doc"
      },
      {
        "path": "/learning/html-forms",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-forms.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-forms.md",
          "updatedTime": 1660566522000,
          "title": "Формы",
          "slugs": [],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Формы - HeadMade Doc"
      },
      {
        "path": "/learning/html-frames",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-frames.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-frames.md",
          "updatedTime": 1660566522000,
          "title": "Фреймы",
          "slugs": [],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Фреймы - HeadMade Doc"
      },
      {
        "path": "/learning/html-images",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-images.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-images.md",
          "updatedTime": 1660566522000,
          "title": "Вставка графических изображений и других объектов",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Графические изображения",
              "heading": "графические-изображения"
            },
            {
              "depth": 3,
              "value": "Альтернативный текст",
              "heading": "альтернативный-текст"
            },
            {
              "depth": 3,
              "value": "Ширина и высота изображения",
              "heading": "ширина-и-высота-изображения"
            },
            {
              "depth": 3,
              "value": "Выравнивание",
              "heading": "выравнивание"
            },
            {
              "depth": 2,
              "value": "Изображение в качестве ссылки",
              "heading": "изображение-в-качестве-ссылки"
            },
            {
              "depth": 2,
              "value": "Карта изображения",
              "heading": "карта-изображения"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Вставка графических изображений и других объектов - HeadMade Doc"
      },
      {
        "path": "/learning/html-introducing",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-introducing.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-introducing.md",
          "updatedTime": 1660566522000,
          "title": "Введение",
          "slugs": [
            {
              "depth": 1,
              "value": "Интернет и WWW",
              "heading": "интернет-и-www"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Введение - HeadMade Doc"
      },
      {
        "path": "/learning/html-links",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-links.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-links.md",
          "updatedTime": 1660566522000,
          "title": "Ссылки",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Ссылки",
              "heading": "ссылки"
            },
            {
              "depth": 2,
              "value": "Абсолютные ссылки",
              "heading": "абсолютные-ссылки"
            },
            {
              "depth": 2,
              "value": "Относительные ссылки",
              "heading": "относительные-ссылки"
            },
            {
              "depth": 2,
              "value": "Ссылки внутри страницы",
              "heading": "ссылки-внутри-страницы"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Ссылки - HeadMade Doc"
      },
      {
        "path": "/learning/html-lists",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-lists.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-lists.md",
          "updatedTime": 1660566522000,
          "title": "Списки",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Списки",
              "heading": "списки"
            },
            {
              "depth": 2,
              "value": "Маркированные списки",
              "heading": "маркированные-списки"
            },
            {
              "depth": 2,
              "value": "Нумерованные списки",
              "heading": "нумерованные-списки"
            },
            {
              "depth": 2,
              "value": "Список определений",
              "heading": "список-определений"
            },
            {
              "depth": 2,
              "value": "Вложенные списки",
              "heading": "вложенные-списки"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Списки - HeadMade Doc"
      },
      {
        "path": "/learning/html-markup",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-markup.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-markup.md",
          "updatedTime": 1660566522000,
          "title": "Языки разметки",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Языки разметки",
              "heading": "языки-разметки"
            },
            {
              "depth": 2,
              "value": "Структурная(логическая) разметка",
              "heading": "структурнаялогическая-разметка"
            },
            {
              "depth": 2,
              "value": "Разметка представления",
              "heading": "разметка-представления"
            },
            {
              "depth": 2,
              "value": "Язык (X)HTML",
              "heading": "язык-xhtml"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Языки разметки - HeadMade Doc"
      },
      {
        "path": "/learning/html-page-structure",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-page-structure.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-page-structure.md",
          "updatedTime": 1660566522000,
          "title": "Структура web-страницы",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Структура web-страницы",
              "heading": "структура-web-страницы"
            },
            {
              "depth": 2,
              "value": "Раздел заголовка документа (head)",
              "heading": "раздел-заголовка-документа-head"
            },
            {
              "depth": 2,
              "value": "Тело документа (body)",
              "heading": "тело-документа-body"
            },
            {
              "depth": 2,
              "value": "Основные теги",
              "heading": "основные-теги"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Структура web-страницы - HeadMade Doc"
      },
      {
        "path": "/learning/html-tables",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-tables.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-tables.md",
          "updatedTime": 1660566522000,
          "title": "Таблицы",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Таблицы",
              "heading": "таблицы"
            },
            {
              "depth": 2,
              "value": "Элементы таблиц",
              "heading": "элементы-таблиц"
            },
            {
              "depth": 2,
              "value": "Форматирование таблиц",
              "heading": "форматирование-таблиц"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Таблицы - HeadMade Doc"
      },
      {
        "path": "/learning/html-text",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/html-text.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/html-text.md",
          "updatedTime": 1660566522000,
          "title": "Представление текста",
          "toc": "menu",
          "slugs": [
            {
              "depth": 1,
              "value": "Представление текста",
              "heading": "представление-текста"
            },
            {
              "depth": 2,
              "value": "Текстовые блоки",
              "heading": "текстовые-блоки"
            },
            {
              "depth": 2,
              "value": "Физическое выделение",
              "heading": "физическое-выделение"
            },
            {
              "depth": 2,
              "value": "Логическое выделение",
              "heading": "логическое-выделение"
            },
            {
              "depth": 2,
              "value": "Специальные символы",
              "heading": "специальные-символы"
            }
          ],
          "nav": {
            "path": "/learning",
            "title": "Обучение"
          }
        },
        "title": "Представление текста - HeadMade Doc"
      },
      {
        "path": "/learning",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/learning/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/learning/index.md",
          "updatedTime": 1660566522000,
          "title": "Начало",
          "order": 4,
          "nav": {
            "title": "Обучение",
            "order": 4,
            "path": "/learning"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Обучающие материалы",
              "heading": "обучающие-материалы"
            }
          ]
        },
        "title": "Начало - HeadMade Doc"
      },
      {
        "path": "/stack/antd",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/antd.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/antd.md",
          "updatedTime": 1660566522000,
          "title": "Ant Design",
          "slugs": [
            {
              "depth": 1,
              "value": "Ant Design",
              "heading": "ant-design"
            },
            {
              "depth": 1,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 1,
              "value": "Использование",
              "heading": "использование"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Ant Design - HeadMade Doc"
      },
      {
        "path": "/stack/bem",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/bem.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/bem.md",
          "updatedTime": 1660566522000,
          "title": "БЭМ",
          "slugs": [
            {
              "depth": 1,
              "value": "БЭМ (Блок, Элемент, Модификатор)",
              "heading": "бэм-блок-элемент-модификатор"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "БЭМ - HeadMade Doc"
      },
      {
        "path": "/stack/bootstrap",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/bootstrap.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/bootstrap.md",
          "updatedTime": 1660566522000,
          "title": "Bootstrap",
          "slugs": [
            {
              "depth": 1,
              "value": "Bootstrap",
              "heading": "bootstrap"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Bootstrap - HeadMade Doc"
      },
      {
        "path": "/stack/create-react-app",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/create-react-app.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/create-react-app.md",
          "updatedTime": 1660566522000,
          "title": "create-react-app",
          "slugs": [
            {
              "depth": 1,
              "value": "create-react-app",
              "heading": "create-react-app"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "create-react-app - HeadMade Doc"
      },
      {
        "path": "/stack/expo",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/expo.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/expo.md",
          "updatedTime": 1660566522000,
          "title": "Expo",
          "slugs": [
            {
              "depth": 1,
              "value": "Expo",
              "heading": "expo"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Инилиацизация проекта",
              "heading": "инилиацизация-проекта"
            },
            {
              "depth": 2,
              "value": "Запуск",
              "heading": "запуск"
            },
            {
              "depth": 2,
              "value": "Открытие приложения на телефоне / планшете",
              "heading": "открытие-приложения-на-телефоне--планшете"
            },
            {
              "depth": 2,
              "value": "Ошибки и отладка",
              "heading": "ошибки-и-отладка"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Expo - HeadMade Doc"
      },
      {
        "path": "/stack/foundation",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/foundation.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/foundation.md",
          "updatedTime": 1660566522000,
          "title": "Foundation",
          "slugs": [
            {
              "depth": 1,
              "value": "Foundation",
              "heading": "foundation"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Foundation - HeadMade Doc"
      },
      {
        "path": "/stack/gatsby",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/gatsby.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/gatsby.md",
          "updatedTime": 1660566522000,
          "title": "Gatsby JS",
          "slugs": [
            {
              "depth": 1,
              "value": "Gatsby JS",
              "heading": "gatsby-js"
            },
            {
              "depth": 1,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 1,
              "value": "Запуск",
              "heading": "запуск"
            },
            {
              "depth": 1,
              "value": "Локальный билд",
              "heading": "локальный-билд"
            },
            {
              "depth": 1,
              "value": "Запуск билда локально",
              "heading": "запуск-билда-локально"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Gatsby JS - HeadMade Doc"
      },
      {
        "path": "/stack",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/index.md",
          "updatedTime": 1660566522000,
          "title": "Технологии",
          "order": 2,
          "nav": {
            "title": "Технологии",
            "order": 2,
            "path": "/stack"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Технологии",
              "heading": "технологии"
            },
            {
              "depth": 2,
              "value": "Primitive technology",
              "heading": "primitive-technology"
            }
          ]
        },
        "title": "Технологии - HeadMade Doc"
      },
      {
        "path": "/stack/lodash",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/lodash.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/lodash.md",
          "updatedTime": 1660566522000,
          "title": "Lodash",
          "slugs": [
            {
              "depth": 1,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Пример",
              "heading": "пример"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Lodash - HeadMade Doc"
      },
      {
        "path": "/stack/pure",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/pure.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/pure.md",
          "updatedTime": 1660566522000,
          "title": "Pure CSS",
          "slugs": [
            {
              "depth": 1,
              "value": "Pure CSS",
              "heading": "pure-css"
            },
            {
              "depth": 2,
              "value": "Установка",
              "heading": "установка"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Pure CSS - HeadMade Doc"
      },
      {
        "path": "/stack/react",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/react.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/react.md",
          "updatedTime": 1660566522000,
          "title": "React",
          "slugs": [
            {
              "depth": 1,
              "value": "Введение",
              "heading": "введение"
            },
            {
              "depth": 2,
              "value": "Методы добавления React",
              "heading": "методы-добавления-react"
            },
            {
              "depth": 3,
              "value": "Добавление React с помощью тэга script",
              "heading": "добавление-react-с-помощью-тэга-script"
            },
            {
              "depth": 3,
              "value": "Добавление React с помощью create-react-app",
              "heading": "добавление-react-с-помощью-create-react-app"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "React - HeadMade Doc"
      },
      {
        "path": "/stack/react-admin",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/reactAdmin.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/reactAdmin.md",
          "updatedTime": 1660566522000,
          "title": "React admin",
          "slugs": [
            {
              "depth": 1,
              "value": "Установка",
              "heading": "установка"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "React admin - HeadMade Doc"
      },
      {
        "path": "/stack/react-tour",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/reactTour.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/reactTour.md",
          "updatedTime": 1660566522000,
          "title": "REACTOUR",
          "slugs": [
            {
              "depth": 1,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Пример",
              "heading": "пример"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "REACTOUR - HeadMade Doc"
      },
      {
        "path": "/stack/sass",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/sass.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/sass.md",
          "updatedTime": 1660566522000,
          "title": "Sass Scss",
          "slugs": [
            {
              "depth": 1,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Введение",
              "heading": "введение"
            },
            {
              "depth": 3,
              "value": "Переменные",
              "heading": "переменные"
            },
            {
              "depth": 3,
              "value": "Вложенности",
              "heading": "вложенности"
            },
            {
              "depth": 3,
              "value": "Фрагментирование",
              "heading": "фрагментирование"
            },
            {
              "depth": 3,
              "value": "Импорт",
              "heading": "импорт"
            },
            {
              "depth": 3,
              "value": "Миксины (примеси)",
              "heading": "миксины-примеси"
            },
            {
              "depth": 3,
              "value": "Расширение/Наследование",
              "heading": "расширениенаследование"
            },
            {
              "depth": 3,
              "value": "Математические операторы",
              "heading": "математические-операторы"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Sass Scss - HeadMade Doc"
      },
      {
        "path": "/stack/third-party",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/third-party.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/third-party.md",
          "updatedTime": 1660566522000,
          "title": "Полезные наборы компонентов",
          "slugs": [
            {
              "depth": 1,
              "value": "Полезные наборы компонентов",
              "heading": "полезные-наборы-компонентов"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Полезные наборы компонентов - HeadMade Doc"
      },
      {
        "path": "/stack/umi-create",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/umi-create.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/umi-create.md",
          "updatedTime": 1660566522000,
          "title": "umi-create",
          "slugs": [
            {
              "depth": 1,
              "value": "umi-create",
              "heading": "umi-create"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "umi-create - HeadMade Doc"
      },
      {
        "path": "/stack/umihooks",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/stack/umihooks.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/stack/umihooks.md",
          "updatedTime": 1660566522000,
          "title": "Umi Hooks",
          "slugs": [
            {
              "depth": 1,
              "value": "Установка",
              "heading": "установка"
            },
            {
              "depth": 2,
              "value": "Пример",
              "heading": "пример"
            }
          ],
          "nav": {
            "path": "/stack",
            "title": "Технологии"
          }
        },
        "title": "Umi Hooks - HeadMade Doc"
      },
      {
        "path": "/utilities",
        "component": require('C:/Users/ph.photovarov/Desktop/Work/doc-hm/docs/utilities/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/utilities/index.md",
          "updatedTime": 1660566522000,
          "title": "Полезные утилиты",
          "order": 1,
          "nav": {
            "title": "Полезные утилиты",
            "order": 5,
            "path": "/utilities"
          },
          "toc": "menu",
          "slugs": []
        },
        "title": "Полезные утилиты - HeadMade Doc"
      }
    ],
    "title": "HeadMade Doc",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
