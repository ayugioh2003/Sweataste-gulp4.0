# 來自 gulp 的 hello world：gulp4 寫法

在 Gulp4 中，task() API 已經不被推薦，改成用 function 定義 task。使用 function 定義 task 有個好處，就是如果該 function 沒有被 export 出來的話，gulp cli 就沒辦法取用，讓 tasks 清單更加地簡潔。

而讓 function export 出來，跟把 module export 出來的用法是很像的。export 出 function 定義的 task 有兩種寫法：CommonJS 與 ESM 寫法。不過就先只單純看 gulp 4 的 task 寫法吧。


## 將 gulp 3.9.1 寫法轉成 gulp 4 寫法

當要在 gulp 建立 task 時，gulp 3.9.1 本來是使用 `gulp.task()` 的方式來建立 task，之後就能在 CLI 中透過 `gulp 工作名稱` 來執行 task。但在 gulp 4 中，官方不推薦使用 `gulp.task()` 的方式建立 task了；取而帶之的，是透過 `function 工作名稱() {}` 來建立 task，之後再用 `exports.工作名稱 = 函式名稱` 來導出 task，讓開發者能在 CLI 中執行 task。

> 附帶一提，`require()` 和 `exports` 是 Node.js 要引用、導出 JavaScript module 的方式，屬於 CommonJS 規範。延伸討論會在 Day6 提到。


一、建立 gulp 4 的 task 函式 
```js
// gulpfile.js
// 在 CLI 輸入 gulp hello4CommonJS，會印出 hello gulp , CommonJS format

var gulp = require('gulp') 

function hello4CommonJS(cb) {
  console.log('hello gulp 4.0, CommonJS format' )
  cb();
}

exports.hello4CommonJS = hello4CommonJS
```

二、在 CLI 操作 gulp4

```bash
gulp hello4CommonJS
> hello gulp 4.0, CommonJS format
```


## gulp 4 設定 task 從 CommonJS 改成 ESM 寫法

想引入 npm 的模組（套件）、或是 export 出 gulp 的函式，除了 Node.js 原生支援的 CommonJS 寫法外，也能使用 ES6 module 新引入的 import、export 語法。不過如果直接用的話，會出現問題：node.js 不認識 import 這個 keyword。

試著將 `require`、`exprots` 等 CommonJS 寫法改成 `import`、`export` 等ES6 module 寫法： 
```js
// gulpfile.js
// 在 CLI 輸入 gulp hello4ES6，會印出 錯誤訊息
import gulp from 'gulp' 

export function hello4ES6(cb) {
  console.log('hello gulp 4.0, ES6 format')
  cb()
}
```

結果會出現錯誤訊息，node.js 看不懂 import 這個關鍵字。
```bash
gulp hello4CommonJS

import gulp from 'gulp' // ES6 引入模組寫法
       ^^^^
SyntaxError: Unexpected identifier
```

因此，為了讓 node.js 認識 import 關鍵字，根據 [gulp 在 npm 的建議](https://www.npmjs.com/package/gulp#use-latest-javascript-version-in-your-gulpfile)，有兩個可嘗試的方式：一是開啟 node.js 的 esm module 功能，一是透過 babel 將 import 關鍵字轉成 require 這個 node.js 看得懂得關鍵字。這邊嘗試使用第二種方式。

一、首先，將 gulpfile.js 檔案改名為 gulpfile.babel.js，讓 gulp-cli 知道這個 gulpfile 檔案內有 ES6 語法，需要用 babel 去轉換。不過，若只改了檔名而沒有配套措施的話，在 CLI 輸入 gulp hello4ES6 後會出現錯誤訊息：

```js
// gulpfile.babel.js
// 在 CLI 輸入 gulp hello4ES6，會印出錯誤訊息

import gulp from 'gulp' 

export function hello4ES6(cb) {
  console.log('hello gulp 4.0, ES6 format')
  cb()
}
```

```bash
gulp hello4CommonJS

[18:51:07] Failed to load external module @babel/register
[18:51:07] Failed to load external module babel-register
[18:51:08] Failed to load external module babel-core/register
[18:51:08] Failed to load external module babel/register
```

二、根據錯誤訊息與 gulp 在 npm 的說明，還需要在 CLI 安裝 babel 相關插件、新增 babel 設定，才能讓 gulpfile.babel.js 使用 ES6 的 import 語法

```bash
# 讓 gulp 內能使用 import/export 語法
npm install --save-dev @babel/register @babel/core @babel/preset-env

+ @babel/register@7.6.0
+ @babel/core@7.6.0
+ @babel/preset-env@7.6.0
```

三、新增 .babelrc 檔案

```json
{
  "presets": ["@babel/preset-env"]
}
```

四、在 CLI 操作 gulp4。運行成功。（檔名改成 gulpfile.babel.js 後，CLI 會自動 requrie @babel/register）

```bash
gulp hello4ES6

[19:20:40] Requiring external module @babel/register
[19:20:42] Using gulpfile D:\Users\Chu\Desktop\test\Sweataste-gulp4.0\gulpfile.babel.js
[19:20:42] Starting 'hello4ES6'...
hello gulp 4.0, ES6 format
[19:20:42] Finished 'hello4ES6' after 275 ms
```



## 小結 

最後的資料夾結構會長這樣
```
├─source
│   ├─images
│   ├─javascripts
│   └─stylesheets
│       ├─components
│       ├─helpers
│       └─pages
├─.babelrc
├─.gitignore
├─gulpfile.js
└─README.md 
```

關於 gulp 3.9.1、gulp4 CommonJS 與 gulp4 ESM 寫法的比較
```js
// gulpfile.babel.js

import gulp from 'gulp' // ES6 引入模組寫法

// gulp 3.9.1 寫法
// var gulp = require('gulp') // CommonJS 引入模組寫法
gulp.task('hello3', function(cb){
  console.log('hello gulp 3.9.1')
  cb()
})

// gulp 4.0、CommonJS 寫法
// const gulp = require('gulp') // CommonJS 引入模組寫法
function hello4CommonJS(cb) {
  console.log('hello gulp 4.0, CommonJS format' )
  cb();
}
exports.hello4CommonJS = hello4CommonJS

// gulp 4.0、ES6 寫法
// import gulp from 'gulp' // ES6 引入模組寫法
export function hello4ES6(cb) {
  console.log('hello gulp 4.0, ES6 format')
  cb()
}
```

今天是 hello gulp 篇的第二篇，比較了 gulp 3.9.1 與 gulp 4 的 task 寫法差異。明天將會談 JavaScript 的 module 規範。

## 參考資料

官方
* [Creating Tasks · gulp.js](https://gulpjs.com/docs/en/getting-started/creating-tasks)

在 gulp 使用 import
* [Quick: ES6 gulpfile using Gulp 4 with Babel - Goede Site](https://goede.site/quick-es6-gulpfile-using-gulp-4-with-babel)