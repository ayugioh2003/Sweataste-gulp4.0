# JS 的處理：談 gulp-uglify

當我們把 JS 從 ES6+ 語法轉碼成 ES5 後，雖然解決了舊瀏覽器看不懂新語法的需求，但卻還有一個基本需求尚未解決：可不可以把檔案變得更小呢？

答案是可行的。在 Day22 的談 sourcemap 文章中曾提到，當時 sorucemap 的出現，就是為了解決 uglifyjs 壓縮檔案後，無法對應回原始碼 debug 的問題。也就是說在 gulp 中，css 檔可以透過 gulp-clean-css 來壓縮，而 js 檔則是透過 gulp-uglify 來壓縮了。


## gulp-uglify

用 Day23 的範例做些修改做展示：

```js
import gulp from "gulp"
const $ = require("gulp-load-plugins")()

xport function uglifyjs() {
  return gulp
    .src("./source/javascripts/**/*.js")
    .pipe($.uglify())
    .pipe(gulp.dest("./public/javascripts"))
}
```

其中，`uglify()` 中也是可以放參數 options 進去的。相關設定可參考 gulp-uglify 與 uglify-js 的 npm 頁面。

## 小結

今天是「JS 的處理」系列的第五篇，簡單 ~~水了一篇~~ 介紹了 gulp-uglify 的使用。明天將介紹圖片的壓縮。

## 參考資料

* [gulp-uglify - npm](https://www.npmjs.com/package/gulp-uglify)
* [uglify-js - npm](https://www.npmjs.com/package/uglify-js)


