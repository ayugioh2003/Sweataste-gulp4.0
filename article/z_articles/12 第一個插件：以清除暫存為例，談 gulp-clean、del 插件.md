# 第一個插件：以清除暫存為例，談 gulp-clean、del 插件

最早我開始學 gulp 的刪除暫存時，引入的套件其實是 gulp-clean，引入該模組的方式是 `npm install --save-dev gulp-clean`。gulp 有自己的插件生態系，只要該 npm 套件名前套用 `gulp-` 開頭的就是了。gulp-clean 的使用方式可以參考該 npm 頁面的使用例子：

```js
var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('default', function () {
  return gulp.src('app/tmp', {read: false})
    .pipe(clean());
});
```

第一次學完後，我想進行二周目的學習，就從頭 `npm install` 套件一次。結果發現 terminal 顯示說，推薦使用 del 這個套件。現在連官方的刪除檔案範例也是使用這個套件了，可能是想有現成的 npm 套件能用，就不要另外造 gulp 插件的輪子了。附上昨天的使用 del 套件刪除暫存的範例碼：


```js
import del from 'del'

export function clean() {
  return del(['./public', './.tmp'])
```

用法是，引入 del 套件且命名 del，透過 `del()` 執行他，並在該函式中放想要刪除的檔案路徑 globs。

## 小結

今天是「以清除暫存為例」的第二篇，簡單介紹如何用 gulp-clean 和 del 清除暫存。明天將會介紹 gulp 的插件黑名單機制。 


## 相關資料
刪除
* [Transpile and minify Javascript, HTML and CSS using Gulp 4 - Goede Site](https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4)
* [gulp/delete-files-folder.md at master · gulpjs/gulp](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)

npm
* [gulp-clean - npm](https://www.npmjs.com/package/gulp-clean)
* [del - npm](https://www.npmjs.com/package/del)