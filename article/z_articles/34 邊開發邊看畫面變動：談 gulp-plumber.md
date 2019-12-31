# 邊開發邊看畫面變動：談 gulp-plumber

利用 gulp 來進行前端開發、執行預先定義好的 task 時，如果過程中有例外錯誤產生，原本正在 watch 檔案的執行程式會被中止。

不過，只要使用了 gulp-plumber，錯誤訊息就只是單純顯示在 CLI 界面上，而不會直接中止整個 gulp 。

## gulp-plumber

gulp-plumber 的使用方式還算直覺。只要在有可能出現錯誤訊息的 task 中，使用 `.pipe(plumber())` 補上，來截獲錯誤就好

```bash
# CLI
npm install --save-dev gulp-plumber
```

```js
import gulp from "gulp"
const $ = require("gulp-load-plugins")()

export function ejs() {
  return gulp
    .src(["./source/**/*.ejs", "./source/**/*.html"])
    .pipe($.plumber()) // 在一開始補上 plumber 來接獲錯誤訊息
    .pipe($.frontMatter())
    .pipe(
      $.layout(file => {
        return file.frontMatter
      })
    )
    .pipe(gulp.dest("./public"))
    .pipe($.if(!envIsPro, browserSync.stream()))
}
```

像在這個專案中，`ejs`、`sass`、`babel` 這些 task 都有可能噴錯，所以在一開始最好都放上 `.pipe(plumber())` 來避免噴錯後整個 gulp 就停止執行了。

## 小結

今天是「邊開發邊看畫面變動」系列的最後一篇，談到了如何使用 gulp-plumber 套件，來避免錯誤訊息噴出時直接停止整個 gulp 程式。明天將介紹如何佈署靜態網頁到 github pages 上。


## 參考資料

* [【gulp-plumber】例外處理 | gulp 學習筆記](http://kejyun.github.io/gulp-learning-notes/plguins/Tool/Plugins-Tool-gulp-plumber.html)
* [Gulp 筆記：安裝、撰寫 Task、監看、例外錯誤處理和套件使用 | Summer。桑莫。夏天](https://cythilya.github.io/2016/08/20/gulp/)
* [gulp-plumber - npm](https://www.npmjs.com/package/gulp-plumber)