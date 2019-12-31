# CSS 的處理：談壓縮 CSS 與 gulp-clean-css 

對於前端開發來說，除了要切版、開發功能外，也需要讓 client 端接收的檔案越小越好，這樣能降低網頁的讀取時間。這時候，就可以透過壓縮檔案來降低檔案體積。

在 npm 中，有很多的 gulp 套件都能壓縮 CSS，像是 gulp-css、gulp-minify、gulp-cssnano、gup-clean-css。我一開始是使用 gulp-minify，後來發現它被列入 gulp black list 惹，就轉用 gulp 最新推薦的 gulp-clean-css。

## CSS 壓縮

其實 CSS 壓縮做的事情還滿好懂的，最基本的就是把原本分散在很多行的語法，通通壓在同一行就好惹。

```css
/* before */
*, 
::after,
::before {
  box-sizing: border-box;
}

/* after */
*,::after,::before{box-sizing:border-box}
```

## gulp-clean-css

gulp-clean-css 的功能來自於 clean-css。就現況（2019）來說，clean-css 是近期內 npm 下載次數最多的 CSS 壓縮套件，聽說能自訂的 options 也是最多的（但我都用預設配置就是了）。附上 npm 上的配置範例

```js
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
```

## 小結

今天是「CSS 的處理」的第四天，介紹了 ~~日本的壓縮機非常稀少~~ CSS 的壓縮。明天將會介紹 source-map 這個好用的東西。

## 參考資料

npm
* [gulp-minify-css - npm](https://www.npmjs.com/package/gulp-minify-css)
* [gulp-clean-css - npm](https://www.npmjs.com/package/gulp-clean-css)

其他
* [gulp 插件：gulp-cssnano，gulp-minify-css 和 gulp-clean-css - 奮斗的小綠蘿 - CSDN 博客](https://blog.csdn.net/weixin_40817115/article/details/81095176)
* [gulp-clean-css vs gulp-csso vs gulp-minify vs gulp-cssnano | npm trends](https://www.npmtrends.com/gulp-clean-css-vs-gulp-csso-vs-gulp-minify-vs-gulp-cssnano)
