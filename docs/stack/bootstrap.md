---
title: Bootstrap
---

# Bootstrap

## Установка

npm

```bash
$ npm install bootstrap
```

`require('bootstrap')` will load all of Bootstrap’s jQuery plugins onto the jQuery object. The bootstrap module itself does not export anything. You can manually load Bootstrap’s jQuery plugins individually by loading the `/js/*.js` files under the package’s top-level directory.

Bootstrap’s `package.json` contains some additional metadata under the following keys:

-   `sass` - path to Bootstrap’s main [Sass](https://sass-lang.com/) source file
-   `style` - path to Bootstrap’s non-minified CSS that’s been precompiled using the default settings (no customization)

yarn

```bash
$ yarn add bootstrap
```

[Официальная документация](https://getbootstrap.com/)
