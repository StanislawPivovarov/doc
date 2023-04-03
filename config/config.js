import { defineConfig } from 'dumi';

import logo from '../assets/logo';

export default defineConfig({
	title: 'HeadMade Doc',
	mode: 'site',
	description: 'Онбординг чтобы вкатиться в работу',
	base: '/',
	publicPath: '/',
	exportStatic: {},
	locales: [
		['ru-RU', 'Русский'],
		// ['en-US', 'English'],
	],
	menus: {
		'/getting-started': [
			{
				title: 'Начало работы',
				children: ['getting-started/index'],
			},
			{
				title: 'Окружение',
				children: [
					'getting-started/terminal',
					'getting-started/git-base',
					'getting-started/nodejs',
					'getting-started/ssh',
				],
			},
			{
				title: 'Среда разработки',
				children: [
					'getting-started/vscode',
					'getting-started/gitignore',
					'getting-started/precommit',
					'getting-started/npmrc',
					'getting-started/browserlistrc',
					'getting-started/js-doc',
				],
			},
			{
				title: 'Браузер',
				children: [
					'getting-started/browser-chrome',
					'getting-started/browser-fireFox',
				],
			},
			{
				title: 'Процесс разработки',
				children: [
					'getting-started/redmine',
					'getting-started/git-repository',
					'getting-started/git-redmine',
				],
			},
			{
				title: 'Debugging',
				children: [
					'getting-started/postman',
					'getting-started/nodeJsDebugging',
					'getting-started/debugger',
					'getting-started/lighthouse',
					'getting-started/alpha-chrome',
					'getting-started/testingCheckList',
				],
			},
			{
				title: 'Правила оформления кода',
				children: [
					'getting-started/prettier',
					'getting-started/stylelint',
					'getting-started/eslint',
					'getting-started/editorconfig',
				],
			},
			{
				title: 'Git - работа с репозиториями',
				children: [
					'getting-started/gitconfig',
					'getting-started/conflicts',
				],
			},
		],
		'/stack': [
			{
				title: 'Введение',
				children: ['stack/index'],
			},
			{
				title: 'Утилиты',
				children: [
					'stack/create-react-app',
					'stack/expo',
					'stack/umi-create',
				],
			},
			{
				title: 'UI-frameworks',
				children: ['stack/antd'],
			},
			{
				title: 'Список библиотек',
				children: [
					'stack/third-party',
					'stack/react',
					'stack/gatsby',
					'stack/lodash',
					'stack/umihooks',
					'stack/reactTour',
					'stack/reactAdmin',
				],
			},
			{
				title: 'CSS-frameworks',
				children: [
					'stack/bootstrap',
					'stack/foundation',
					'stack/pure',
					'stack/sass',
				],
			},
			{
				title: ' БЭМ',
				children: ['stack/bem'],
			},
		],
		'/learning': [
			{
				title: 'Обучение',
				children: ['learning/index'],
			},
			{
				title: 'HTML и XHTML',
				children: [
					'learning/html-introducing',
					'learning/html-markup',
					'learning/html-page-structure',
					'learning/html-text',
					'learning/html-exercise-markup',
					'learning/html-lists',
					'learning/html-tables',
					'learning/html-links',
					'learning/html-images',
					'learning/html-frames',
					'learning/html-forms',
					'/learning/html-cpc-map',
				],
			},
			{
				title: 'CSS',
				children: [
					'learning/css-introducing',
					'learning/css-base',
					'learning/css-formatting',
					'learning/css-borders',
					'learning/css-lists',
					'learning/css-pseudo',
					'learning/css-block-markup',
					'learning/css-experiments',
				],
			},
		],
	},
	theme: {
		'@c-primary': '#28c23e',
		'@c-heading': '#454d64',
		'@c-text': '#454d64',
		'@c-secondary': '#717484',
		'@c-link': '@c-primary',
		'@c-border': '#ebedf1',
		'@c-light-bg': '#f9fafb',

		'@s-nav-height': '64px',
		'@s-mobile-nav-height': '50px',
		'@s-menu-width': '260px',
		'@s-site-menu-width': '350px',
		'@s-menu-mobile-width': '240px',
	},
	logo,
	favicon: logo,
	// more config: https://d.umijs.org/config
});
