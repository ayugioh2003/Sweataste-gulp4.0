# 8 第一個 task：以複製檔案為例，談 task、src、dest、watch API

在 gulp 3.9.1 的時候，有四個最常被使用的 gulp API，分別是 `task()`、`src()`、`dest()`、以及 `watch()`。其中，`task()` 已在 hello gulp 篇、以及昨天的複製檔案現身過，`src()` 與 `dest()` 則在昨天的複製檔案初出茅廬。本文將簡單介紹這四個 API。

## task()
在 hellp gulp 篇的第一篇文，`gulp.task()` 的用法就有在 gulp 3.9.1 的範例寫法出現過。不過呢，這種寫法已經不再被 gulp 4 推薦了。取而代之的，是用 `function` 定義一個 task，然後再 `export` 出來給 CLI 使用。
```js
var gulp = require('gulp')  

// gulp 3.9.1 寫法
gulp.task('hello3', function(cb) { 
  console.log('hello gulp 3.9.1')
  cb()
})

// gulp 4 推薦寫法
function hello4CommonJS(cb) {
  console.log('hello gulp 4.0, CommonJS format' )
  cb();
}
exports.hello4CommonJS = hello4CommonJS
```

不過這樣介紹好像有點少，那再來介紹幾個 gulp task 的八卦好了。

一、gulp.task() API 其實是包裝了另一個 npm 套件：這個套件的名字叫做 orchestrator。不過我沒有特別想深入研究，就貼上這個套件在 github 上的範例用法，給大家參考看看。

1. Get a reference:
```js
var Orchestrator = require('orchestrator');
var orchestrator = new Orchestrator();
```
2. Load it up with stuff to do:
```js
orchestrator.add('thing1', function(){
  // do stuff
});
orchestrator.add('thing2', function(){
  // do stuff
});
```
3. Run the tasks:
```js
orchestrator.start('thing1', 'thing2', function (err) {
  // all done
});
```

二、gulp 4 的 task 分成公開與私有的 task：原先在 gulp 3.9.1 時，只能用 `gulp.task()` 來定義 task，而這時全部的 task 都會被 CLI 給偵測到（可以用 `gulp --tasks` 來確認目前 gulp 有定義哪些 tasks）。而在 gulp 4 中，若只用 `function` 設定的 task 就是 private task，不會被 CLI 偵測到；想被偵測到的話，就必須要 `export` 出來才行。

三、gulp 4 task 的內部預設是異步（非同步）執行的：非同步執行會有一個問題，就是不曉得 task 會什麼時候結束，這時 gulp 就會出現提示訊息，說不確定 task 結束了沒有。

```js
//  執行同步函式 console.log
export function hello4ES6() {
  console.log('hello gulp 4.0, ES6 format')
}
```
```bash
> gulp helloES6

hello gulp 4.0, ES6 format
[14:15:45] The following tasks did not complete: hello3
[14:15:46] Did you forget to signal async completion?
```

因此，若想讓 gulp 可以確認 task 是否已經完成，官方建議可以在 `function` 放入一個 cb 回調函式當參數，然後將 cb 插在最後調用它。
```js
//  執行同步函式 console.log
export function hello4ES6(cb) {
  console.log('hello gulp 4.0, ES6 format')
  cb()
}
```
```bash
> gulp hello4ES6

hello gulp 4.0, ES6 format
```

## src()、dest()

在昨天示範如何將檔案從 A 地複製到 B 地時，已經有悄悄地使用到這兩個 gulp API 了。
```js
import gulp from 'gulp'

export function copyHTML() {
  return gulp.src('./source/**/*.html')
    .pipe(gulp.dest('./public'))
}
```

可以想成，每一個檔案都有自己的 Vinyl 虛擬檔案格式，就像是 json 或是物件的形式那樣，有很多的屬性。舉個例子，在 test 資料夾中有個 file.js 檔案，內容是 `var x = 123`。那麼用 Vinyl 格式模擬起來就會像是這樣：
```js
{
  cwd: '/',
  base: '/test/',
  path: '/test/file.js',
  contents: new Buffer('var x = 123')
}
```

但要比較清楚說明這兩個 API，最好可以先提到 gulp 私有的 Vinyl 虛擬檔案格式。除此之外，gulp 根據 Vinyl 這種虛擬檔案，在其上建構了 Vinyl-fs 檔案系統，並賦予這個檔案系統一些能操作檔案的 API；當然，`src()` 與 `dest()` 就是其中的兩支 API。

`src(globs, [options])` 這支 API 預設會吃 globs 參數（檔案的路徑），功能是讀取到該路徑下檔案的資訊（Vinyl），並開啟一個 readible stream（Node.js 的一種格式）。而 `dest([directory, [options])` 這支 API 預設吃 directory 參數（要輸出到那的資料夾），功能是開啟一個 writable stream，將傳來的檔案資訊（Vinyl）寫到檔案系統中。


## watch()

watch 可接受參數如下
```js
watch(globs, [options], [task])
```

顧名思義就是，監聽某個路徑下的檔案變化；有改變的話，就執行某個 task。放上官網的範例：

```js
const { watch, series } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

// 可以只关联一个任务
watch('src/*.css', css);
// 或者关联一个任务组合
watch('src/*.js', series(clean, javascript));

```

這隻 API 會在此系列文的後面幾天再次提到。

## 小結

今天談到了在 gulp 3.9.1 常被用到的 API：`task()`、`src`、`dest()`、`watch()`。其中，gulp 4 已經不推薦 `task()` 的寫法定義 task，而改用 `function` 定義 task，再透過 `export` 讓該 task 變成 public task，讓該 task 能在 CLI 被呼叫。

「以複製檔案為例」系列，明天將會談談 `src()`、`dest()` 中的 globs 檔案路徑表示方式。

## 參考資料

官方
* [入門指南 - gulp.js 中文文檔 | gulp.js 中文網](https://v3.gulpjs.com.cn/docs/getting-started/)
* [gulp.js - The streaming build system](https://gulpjs.com/)
* [快速入门 · gulp.js 中文文档](https://www.gulpjs.com.cn/docs/getting-started/quick-start/)

task() API
* [Creating Tasks · gulp.js](https://gulpjs.com/docs/en/getting-started/creating-tasks)
* [Async Completion · gulp.js](https://gulpjs.com/docs/en/getting-started/async-completion)

src()、dest() API
* [Working with Files · gulp.js](https://gulpjs.com/docs/en/getting-started/working-with-files)
* [src() · gulp.js](https://gulpjs.com/docs/en/api/src)
* [dest() · gulp.js](https://gulpjs.com/docs/en/api/dest)

vinyl
* [Vinyl · gulp.js](https://gulpjs.com/docs/en/api/vinyl)
* [Vinyl · gulp.js 中文文档](https://www.gulpjs.com.cn/docs/api/vinyl/)
* [gulpjs/vinyl: Virtual file format.](https://github.com/gulpjs/vinyl)
* [gulpjs/vinyl-fs: Vinyl adapter for the file system.](https://github.com/gulpjs/vinyl-fs)

watch()
* [Watching Files · gulp.js](https://gulpjs.com/docs/en/getting-started/watching-files)