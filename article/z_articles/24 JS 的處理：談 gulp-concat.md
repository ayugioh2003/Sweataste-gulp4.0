# JS 的處理：談 gulp-concat

在網頁開發的歷史早期，若要使用第三方套件/函式庫的話，常常會使用 `<script src="函式庫網址"></script>` 的方式引入，像是 jQuery 的函式庫。

但有時候網頁開發，會使用到多個函式庫。如果全部的第三方函式庫都用 `<script src="函式庫網址"></script>` 的方式個別引入的話，就會多好幾次的 HTTP 請求、耗費較多的時間。

因此，有些開發者就會將需要的函式庫都先下載下來，然後複製到同一個 JS 檔案中，綁成一大包。不過手動複製貼上也是要花時間的，而 gulp-concat 可以幫我們代勞。


## gulp-concat

這個套件的取名滿好懂的，concat 是 concatenate（連結 v）的前六字縮寫，在 `Array.prototype.concat()` 中也有用到它，所以對 JS 開發者不會太陌生。

使用的方式也不會很難，以下是 npm 頁面的範例

```js
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
```

該範例會去抓在 `./lib/` 路徑底下的所以副檔名為 `js` 的檔案，之後把他們綑成一個 `all.js` 檔，將這個 `all.js` 檔放在 `./dist/` 路徑底下。

## 小結

今天是「JS 的處理」系列的第二天。明天會談到 gulp-babel，看它如何把 ES6+ 語法轉成 ES5 語法。


## 參考資料
* [gulp-concat - npm](https://www.npmjs.com/package/gulp-concat)
* [javascript - 關于 gulp-concat 合並 js 的先后順序 - SegmentFault 思否](https://segmentfault.com/q/1010000003791626)
