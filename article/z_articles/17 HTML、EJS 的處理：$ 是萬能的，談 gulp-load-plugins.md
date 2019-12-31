# HTML、EJS 的處理：$ 是萬能的，談 gulp-load-plugins

在 Day14 中，曾經談過要怎麼處理 EJS 模板，並轉成瀏覽器看得懂的 HTML。不過在 gulpfile.bable.js 檔中，竟然沒有 import 進 gulp-front-matter、gulp-layout 等處理 front matter 與 EJS 的套件，為什麼呢？

這是因為，~~有錢什麼都辦得到~~ 有 gulp-load-pluins 套件的幫忙。

## gulp-load-pluins 的功能與使用方式

先來看看 npm 頁面的簡介吧：

> Loads gulp plugins from package dependencies and attaches them to an object of your choice.

簡單說就是，在專案中 `npm install` 了套件後，就能在 gulpfile 設定檔案中更方便地引用這些套件。具體來說，要怎麼使用呢？同樣以 Day14 的展示為例吧：

一、`npm install` 為了處理 front matter 與 EJS 所需要的套件

```bash
npm install ejs --save-dev # 因為該專案用 EJS 樣板語言來寫 HTML，所以裝它
npm install gulp-front-matter --save-dev # 可以幫每頁 HTML 個別設定變數，好用
npm install gulp-layout --save-dev # 可以先接收 front-matter 傳來的值，然後傳到 EJS 模板接收變數，再轉成 HTML
```

二、在平常的使用下，需要用 `import` 或 `require` 語法，引入套件後才能使用它們

```js
import gulp from 'gulp'
import frontMatter from 'gulp-front-matter'
import layout from 'gulp-layout'

export function ejs() {
  return  gulp.src(['./source/**/*.ejs', './source/**/*.html'])
    .pipe(frontMatter())
    .pipe(
      layout((file) => {
        return file.frontMatter;
      }),
    )
    .pipe(gulp.dest('./public'))
}
```


三、不過，若有一拖拉庫的 gulp 套件需要引入的話，就要 `import` 很多次，gulpfile 就會變得繁雜。這時，就可以 `npm install` gulp-load-pluins 這個套件
```bash
npm install gulp-load-pluins --save-dev
```

四、然後神奇的事就發生了。我們可以在開頭先設定好 gulp-file-plugins 的相關設定，將所有 `gulp-` 開頭的套件都引入 $ 這個變數當中，這樣以後就不用在開頭一直 `import` / `require` 套件，而可以用 `$.套件的名字` 來使用套件提供的函式啦。 

```js
import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-file-plugins'
const $ = gulpLoadPlugins()

export function ejs() {
  return  gulp.src(['./source/**/*.ejs', './source/**/*.html'])
    .pipe($.frontMatter())
    .pipe(
      $.layout((file) => {
        return file.frontMatter;
      }),
    )
    .pipe(gulp.dest('./public'))
}
```

講解了 Day14 的設定是怎麼做的之後，再根據官方的例子做些改寫來加深記憶。以下這三段程式碼是等效的：
```js
// 一、在 gulpfile 中，預設是這樣引入套件
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const frontMatter = require('gulp-front-matter')
const layout = require('gulp-layout') 

jshint()
layout()
... 


// 二、但用了 gulp-load-plugins 後，在 gulpfile 中就可以不用引入那麼多的 gulp 套件，通通都從 $ 裡面去拿就好
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

$.jshint()
$.layout()
...


// 三、其實用了 gulp-load-plugins 後，就像是將套件都放在 $ 裡面一樣，這樣大家就能從 $ 中取得這些 gulp 套件
const gulp = require('gulp');

let plugins = {}
$.jshint = require('gulp-jshint');
$.concat = require('gulp-concat');
$.frontMatter = require('gulp-front-matter')
$.layout = require('gulp-layout') 

$.jshint()
$.layout()
...
```

`$ = gulpLoadPlugins()` 在沒有傳入參數的情況下，會預設讀入 `gulp-` 開頭的所有透過 `npm install` 安裝的套件。其他的細節在 npm 頁面中有介紹，不過通常使用預設值應該就夠用了。


## 小節

今天是「HTMl、EJS 的處理」的第四天，介紹了如何用 gulp-load-plugins 減少在 gulpfile 中 `import` / `require` 的頻率，讓使用套件所需的時間成本能降低。明天開始將會介紹如何用 gulp 處理 SCSS 與 CSS。

## 參考資料
* [gulp-load-plugins - npm](https://www.npmjs.com/package/gulp-load-plugins)
* [gulp 插件之 gulp-load-plugins-珞辰的博客-51CTO博客](https://blog.51cto.com/luochen2015/1957973)
