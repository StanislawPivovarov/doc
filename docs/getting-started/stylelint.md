---
title: Stylelint
---

# Stylelint

Мощный современный линтер, который поможет избежать ошибок и обеспечить соблюдение соглашений в ваших стилях.

## Характеристики

- понимает новейший синтаксис CSS, включая настраиваемые свойства и селекторы уровня 4
- извлекает встроенные стили из HTML, маркдаун и литералов объектов и шаблонов CSS-in-JS
- анализирует CSS-подобные синтаксисы, такие как SCSS, Sass, Less и SugarSS
- имеет более 170 встроенных правил для обнаружения ошибок, применения ограничений и соблюдения стилистических соглашений
- поддерживает плагины, поэтому вы можете создавать свои собственные правила или использовать плагины, написанные сообществом
- автоматически исправляет большинство стилистических нарушений
- поддерживает общие конфигурации, которые вы можете расширять или создавать

## Установка

npm

```bash
$ npm install --save-dev stylelint stylelint-config-standard
```

yarn

```bash
$ yarn add -D stylelint stylelint-config-standard
```

Далее необходимо создать файл конфигурации `.stylelintrc.json` в корневой директории проекта:

```json
{
  "extends": "stylelint-config-standard"
}
```

Затем создайте файл `.stylelintignore`, чтобы редакторы знали, какие файлы не форматировать. Вот пример:

```
node_modules
public
config
scripts
*.*
!*.css
!*.scss
```

Добавьте ваш.stylelintignore в .gitignore и .eslintignore (если они есть).

Команда для запуска редактирования кода:

```bash
$ npm stylelint "**/*.css"

$ yarn stylelint "**/*.css"
```

## Игнорирование кода

Вы можете игнорировать:

- внутри файлов
- файлы полностью

### Внутри файлов

Вы можете временно отключить правила, используя специальные комментарии в вашем CSS. Например, вы можете отключить все правила:

```css
/* stylelint-disable */
a {
}
/* stylelint-enable */
```

Или вы можете отключить отдельные правила:

```css
/* stylelint-disable selector-no-id, declaration-no-important */
#id {
  color: pink !important;
}
/* stylelint-enable selector-no-id, declaration-no-important */
```

Вы также можете отключить правила для следующей строки только с /_ stylelint-disable-next-line _/комментарием, после чего вам не нужно явно повторно включать их:

```css
#id {
  /* stylelint-disable-next-line declaration-no-important */
  color: pink !important;
}
```

## Настройка Stylelint

Для настройки Stylelint необходимо добавить ваш конфиг в файл `.stylelintrc.json`.

Конфигурация:

```json
{
	"plugins": [
		"stylelint-order",
		"stylelint-scss",
		"stylelint-prettier"
	],
	"rules": {
		"prettier/prettier": true,
		"color-no-invalid-hex": true,
		"font-family-no-duplicate-names": true,
		"font-family-no-missing-generic-family-keyword": true,
		"function-calc-no-invalid": true,
		"function-calc-no-unspaced-operator": true,
		"function-linear-gradient-no-nonstandard-direction": true,
		"string-no-newline": true,
		"unit-no-unknown": true,
		"property-no-unknown": true,
		"keyframe-declaration-no-important": true,
		"declaration-block-no-duplicate-properties": true,
		"declaration-block-no-shorthand-property-overrides": true,
		"block-no-empty": true,
		"selector-pseudo-class-no-unknown": true,
		"selector-pseudo-element-no-unknown": true,
		"selector-type-no-unknown": true,
		"media-feature-name-no-unknown": true,
		"at-rule-no-unknown": true,
		"comment-no-empty": true,
		"no-descending-specificity": true,
		"no-duplicate-at-import-rules": true,
		"no-duplicate-selectors": true,
		"no-empty-source": true,
		"no-extra-semicolons": true,
		"no-invalid-double-slash-comments": true,
		"alpha-value-notation": "number",
		"hue-degree-notation": "angle",
		"color-function-notation": "legacy",
		"color-named": "always-where-possible",
		"color-no-hex": [
			true,
			{
				"message": "Please use the rgb or rgba function."
			}
		],
		"length-zero-no-unit": true,
		"font-weight-notation": "numeric",
		"function-allowed-list": [
			"scale",
			"rgba",
			"linear-gradient"
		],
		"function-disallowed-list": ["hsl", "hsla"],
		"function-url-no-scheme-relative": true,
		"function-url-scheme-allowed-list": [
			"data",
			"/^http/",
			"/^https/"
		],
		"function-url-scheme-disallowed-list": ["file:"],
		"keyframes-name-pattern": "letter-.+",
		"number-max-precision": 2,
		"time-min-milliseconds": 100,
		"unit-allowed-list": {
			"rem": [
				"line-height",
				"font-size"
			],
			"%": [
				"width",
				"height"
			],
			"px": [
				"width",
				"height"
			]
		},
		"unit-disallowed-list": [
			"em"
		],
		"shorthand-property-no-redundant-values": true,
		"value-no-vendor-prefix": true,
		"custom-property-pattern": "letter-.+",
		"property-allowed-list": [
			"display",
			"animation",
			"/^background/"
		],
		"property-disallowed-list": [
			"text-rendering",
			"animation",
			"/^background/"
		],
		"property-no-vendor-prefix": true,
		"declaration-block-no-redundant-longhand-properties": null,
		"declaration-no-important": true,
		"declaration-property-unit-allowed-list": {
			"font-size": [
				"rem",
				"px"
			]
		},
		"declaration-property-unit-disallowed-list":
		{
			"font-size": [
				"em"
			]
		},
		"declaration-property-value-allowed-list": {
			"whitespace": [
				"nowrap"
			]
		},
		"declaration-property-value-disallowed-list": {
			"position": [
				"sticky"
			]
		},
		"declaration-block-single-line-max-declarations": 1,
		"selector-attribute-operator-allowed-list": [
			"=",
			"|="
		],
		"selector-attribute-operator-disallowed-list": [
			"*="
		],
		"selector-class-pattern": [
			"^[a-z0-9\\-]+$",
			{
				"message": "Selector should be written in lowercase with hyphens (selector-class-pattern)"
			},
			{
				"resolveNestedSelectors": true
			}
		],
		"selector-combinator-allowed-list": [
			">",
			" ",
			"+",
			"~"
		],
		"selector-combinator-disallowed-list": [],
		"selector-id-pattern": [
			"^[a-z0-9\\-]+$",
			{
				"message": "Selector should be written in lowercase with hyphens (selector-id-pattern)"
			}
		],
		"selector-max-attribute": 1,
		"selector-max-class": 3,
		"selector-max-combinators": 2,
		"selector-max-compound-selectors": 3,
		"selector-max-empty-lines": 0,
		"selector-max-id": [
			1,
			{
				"ignoreContextFunctionalPseudoClasses": [
					":not"
				]
			}
		],
		"selector-max-pseudo-class": 2,
		"selector-max-specificity": [
			"0,3,0",
			{
				"ignoreSelectors": [
					":global",
					":local",
					"/letter-/"
				]
			}
		],
		"selector-max-type": [
			3,
			{
				"ignore": [
					"child",
					"compounded",
					"descendant",
					"next-sibling"
				]
			}
		],
		"selector-max-universal": 2,
		"selector-nested-pattern": "^&:(?:hover|focus)$",
		"selector-no-qualifying-type": {
			true,
			ignore: ["attribute", "class", "id"]
		},
		"selector-no-vendor-prefix": {
			true,
			ignoreSelectors: ["/regex/", "non-regex"]
		},
		"selector-pseudo-class-allowed-list": ["hover", "/^nth-/"],
		"selector-pseudo-class-disallowed-list": "["hover", "/^nth-/"]",
		"selector-pseudo-element-allowed-list": "["before", "/^my-/i"]",
		"selector-pseudo-element-colon-notation": "single",
		"selector-pseudo-element-disallowed-list": ["select", "/^my-/i"],
		"media-feature-name-allowed-list": ["min-width"],
		"media-feature-name-disallowed-list": ["max-width"],
		"media-feature-name-no-vendor-prefix": true,
		"media-feature-name-value-allowed-list": {
			"min-width": ["768px", "1024px"],
			"/resolution/": ["/dpcm$/"]
		},
		"custom-media-pattern": "foo-.+",
		"at-rule-allowed-list": ["extend", "keyframes"],
		"at-rule-disallowed-list": ["extend", "keyframes"],
		"at-rule-no-vendor-prefix": true,
		"at-rule-property-required-list": {
			"at-rule-name": ["array", "of", "properties"]
		},
		"comment-pattern": "foo .+",
		"comment-word-disallowed-list": ["/^TODO:/", "badword"],
		"color-hex-case": "upper",
		"color-hex-length": "long",
		"font-family-name-quotes": "always-unless-keyword",
		"function-comma-newline-after": "never-multi-line",
		"function-comma-newline-before": "never-multi-line",
		"function-comma-space-after": "always",
		"function-comma-space-before": "never",
		"function-max-empty-lines": 0,
		"function-name-case": "lower",
		"function-parentheses-newline-inside": "never-multi-line",
		"function-parentheses-space-inside": "never",
		"function-url-quotes": "always",
		"function-whitespace-after": "always",
		"number-leading-zero": "never",
		"number-no-trailing-zeros": true,
		"string-quotes": "double",
		"unit-case": "lower",
		"value-keyword-case": "lower",
		"value-list-comma-newline-after": "never-multi-line",
		"value-list-comma-newline-before": "never-multi-line",
		"value-list-comma-space-after": "always",
		"value-list-comma-space-before": "always",
		"value-list-max-empty-lines": 0,
		"custom-property-empty-line-before": "never",
		"property-case": "lower",
		"declaration-bang-space-after": "always",
		"declaration-bang-space-before": "always",
		"declaration-colon-newline-after": "always",
		"declaration-colon-space-after": "always",
		"declaration-colon-space-before": "never",
		"declaration-empty-line-before": "never",
		"declaration-block-semicolon-newline-after": "always",
		"declaration-block-semicolon-newline-before": "never-multi-line",
		"declaration-block-semicolon-space-after": "always-single-line",
		"declaration-block-semicolon-space-before": "never",
		"declaration-block-trailing-semicolon": "always",
		"block-closing-brace-empty-line-before": {
			"never",
			"except": ["after-closing-brace"],
		},
		"block-closing-brace-newline-after": "always",
		"block-closing-brace-newline-before": "always-multi-line",
		"block-closing-brace-space-after": "always",
		"block-closing-brace-space-before": "always",
		"block-opening-brace-newline-after": "never-multi-line",
		"block-opening-brace-newline-before": "never-single-line",
		"block-opening-brace-space-after": "always",
		"block-opening-brace-space-before": "always",
		"selector-attribute-brackets-space-inside": "never",
		"selector-attribute-operator-space-after": "never",
		"selector-attribute-operator-space-before": "never",
		"selector-attribute-quotes": "always",
		"selector-combinator-space-after": "always",
		"selector-combinator-space-before": "always",
		"selector-descendant-combinator-no-non-space": true,
		"selector-pseudo-class-case": "lower",
		"selector-pseudo-class-parentheses-space-inside": "never",
		"selector-pseudo-element-case": "lower",
		"selector-type-case": "lower",
		"selector-list-comma-newline-after": "always-multi-line",
		"selector-list-comma-newline-before": "always-multi-line",
		"selector-list-comma-space-after": "always",
		"selector-list-comma-space-before": "always",
		"rule-empty-line-before": "always",
		"media-feature-colon-space-after": "always",
		"media-feature-colon-space-before": "never",
		"media-feature-name-case": "lower",
		"media-feature-parentheses-space-inside": "never",
		"media-feature-range-operator-space-after": "always",
		"media-feature-range-operator-space-before": "always",
		"media-query-list-comma-newline-after": "never-multi-line",
		"media-query-list-comma-newline-before": "never-multi-line",
		"media-query-list-comma-space-after": "always",
		"media-query-list-comma-space-before": "never",
		"at-rule-empty-line-before": "always",
		"at-rule-name-case": "lower",
		"at-rule-name-newline-after": "always-multi-line",
		"at-rule-name-space-after": "always",
		"at-rule-semicolon-newline-after": "always",
		"at-rule-semicolon-space-before": "never",
		"comment-empty-line-before": "always",
		"comment-whitespace-inside": "always",
		"indentation": "tab",
		"linebreaks": "unix",
		"max-empty-lines": {
			2,
			ignore: ["comments"]
		},
		"max-line-length": {
			120,
			ignore: ["non-comments"]
		},
		"no-eol-whitespace": true,
		"no-missing-end-of-source-newline": true,
		"no-empty-first-line": true,
		"unicode-bom": "always"

		"scss/at-extend-no-missing-placeholder": true,
		"scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
		"scss/at-import-no-partial-leading-underscore": true,
		"scss/at-import-partial-extension-blacklist": [
			"scss"
		],
		"scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
		"scss/at-rule-no-unknown": true,
		"scss/dollar-variable-colon-space-after": "always",
		"scss/dollar-variable-colon-space-before": "never",
		"scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
		"scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",
		"scss/selector-no-redundant-nesting-selector": true,
		"selector-list-comma-newline-after": "always",
		"selector-no-vendor-prefix": true,
		"selector-pseudo-element-colon-notation": "double",
		"string-quotes": "single"
	},
	"ignoreFiles": [
		"**/*.js",
		"**/*.json"
	]
}
```
