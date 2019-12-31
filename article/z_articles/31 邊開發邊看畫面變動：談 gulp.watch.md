# 邊開發邊看畫面變動：談 gulp.watch

想要達到邊開發邊看到畫面改動，有兩個比較重要的事情要做：一個是監控開發中的檔案是否有變動、另一個是建立一個暫時性的網頁伺服器，用來看畫面的變動。這篇先講 gulp 的監控檔案變動。

## gulp 3.9.1 的 watch 方式

Gulp 從早期就有內建方便監控檔案變動的 API。例如在 3.9.1 版本，就可以用 `gulp.watch()` 函式、或是用 `gulp.watch().on()` 來監控檔案變動。

在 `gulp.watch()` 函式中參數有檔案路徑、以及一個 callback 函數。當路徑下的檔案變動時，gulp 就會自動執行對應的callback 函式。情境像是，如果 .sass 檔案被修改的話，那就執行將 sass 編譯成 css 的函式。

以下是 gulp 3.9 版本的官網範例

```js
// gulp.watch()
gulp.watch('js/**/*.js', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

// gulp.watch().on
var watcher = gulp.watch('js/**/*.js', ['uglify','reload']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
```

不過，gulp 3.9.1 內建的 `gulp.watch()` 似乎只能監聽到修改檔案這個事件，而沒辦法監聽到新增、刪除這些事件，導致每次多新增一個 .scss 檔時，要重啟一次 gulp 才能看到修改後的畫面。而這個狀況有兩個方式可以排除掉:其中一個是使用 gulp-watch 套件。

以下放 npm 的範例程式碼：

```js
var gulp = require('gulp'),
    watch = require('gulp-watch');
 
gulp.task('stream', function () {
    // Endless stream mode
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
 
gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });
});
```

## gulp 4 的 watch 方式

若想讓 gulp 監控到新增、刪除檔案這些變動，除了使用 gulp-watch 套件外，也可以將 gulp 3.9.1 升級到 gulp 4 來達到。Gulp 4 的 `watch()` 用法和 gulp 3.9.1 的用法差不多，不過 gulp 4 的很多 API 好像都改成 async 的方式，所以在 `watch()` 中 callback 函式，裡面要再傳入一個 callback 函式，並在 `watch()` 中的 callback 函式中呼叫，這樣 gulp 才知道 `watch()` 中的 callback 函式執行結束了沒有。

滿繞口的 =_= 詳細用法請參考 gulp 官網範例


```js
const { watch } = require('gulp');

watch(['input/*.js', '!input/something.js'], function(cb) {
  // body omitted
  cb();
});
```

## watch 在這個專案中的使用方式

在使用 `gulp.watch()` 來監聽檔案時，通常會需要監聽不同路徑的變動，讓他們做不同的事情。例如，監聽 styleshttes 這個資料夾路徑，如果底下的 .scss 檔案有變動，那就執行將 scss 編譯成 css 的 task。

為了方便管理，這邊沒有直接將 `gulp.watch()` 直接散落在 gulpfile.js 中，而是將他們集中在 `function watch()` 函式裡面，並且 export 成 gulp 可以呼叫的 task。

如此，輸入對應的 gulp CLI 指令 `gulp watch`，就能監聽開發檔案的變動，並自動編譯那些檔案惹

```js
export function watch() {
  gulp.watch(["./source/**/*.html", "./source/**/*.ejs"], ejs)
  gulp.watch(
    ["./source/stylesheets/**/*.sass", "./source/stylesheets/**/*.scss"],
    sass
  )
  gulp.watch("./source/javascripts/**/*.js", babel)
  console.log("watching file ~")
}
```

```bash
# CLI
gulp watch
```

## 小結

今天談到了，如何透過 gulp 內建的 `watch()` API，來監聽檔案的變動狀況，並且自動執行對應的編譯工作。明天將會透過 browserSync 來建立一個開發用的暫時性伺服器，以便即時看到修改的畫面。



## 參考資料

* [watch() · gulp.js](https://gulpjs.com/docs/en/api/watch)
* [Watching Files · gulp.js](https://gulpjs.com/docs/en/getting-started/watching-files)
* [gulp-watch - npm](https://www.npmjs.com/package/gulp-watch)
* [gulp.js - 基于流的自动化构建工具。 | gulp.js 中文网](https://v3.gulpjs.com.cn/docs/api/)