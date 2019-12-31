# CSS 的處理：談 gulp-postcss 與 autoprefixer

昨天談完了將 SASS 轉成瀏覽器看得懂的 CSS，今天談的工具：gulp-postcss 與 autoprefixer，則能幫 CSS 兼容各個瀏覽器的私有前綴 CSS 屬性，例如 `webkit-`。不過先來些名詞介紹好了

## 什麼是 precss、postcss 

在前端工程化後，很多時候編寫 HTML、CSS、JS 時已經不是直接寫完全原生的語法，而是擴充後的語法。例如，EJS、Pug 可以經過編譯後變成 HTML；CoffeeScript、ClosureScript、ES next（尚未被瀏覽器完全支援的 ECMAScript 草案）可以轉成 ES5；而 CSS 呢，則可以透過 SASS、LESS 等 CSS 擴增語言來轉成。

不過，對於 CSS 來說，光從 SASS 生成 CSS 可能還不夠。因為每家瀏覽器可能對 CSS 的支援度不一樣，而且瀏覽器本身不同版本時所支援的 CSS 屬性也可能不同。這時，我們就需要再對 CSS 做一次處理，像是替 CSS 樣式添加上瀏覽器的私有前綴。

因為 CSS 開發過程有很多的產物，所以我會分階段去理解他們在幹麻：從 SASS 被轉成 CSS 的過程，我稱之為 precss；而幫 CSS 再後續添加瀏覽器前綴、或是壓縮 CSS 碼的過程，我稱之為 postcss。


## 瀏覽器前綴

目前我們在用的網路，全球資訊網（World wide web，WWW）的概念是在 1989 年出來的。1991 年後，各種能夠連上這種網路瀏覽內容的程式，就被稱為瀏覽器（web browser）。

如今網路的優點是很開放多元的，但反過來說，規範與實現也很不一致。例如，W3C 組織在 1996 年推出第一版 CSS，但其他很多家瀏覽器卻沒有好好的去實現這個規範，或是只實現自家瀏覽器能用的樣式語法。直到 2003 年有設計師用 Zen Garden 推廣 CSS 的重要性後，許多開發者才開始重視 CSS。

這些只有自家瀏覽器能用、實驗性質的 CSS 屬性，為了不要和正式的 CSS 屬性混在一起，就會在前面加上瀏覽器代號的前綴，這樣就不會搞混了。MDN 上提到目前主流瀏覽器引擎的前綴如下：

* -webkit- (谷歌, Safari, 新版Opera瀏覽器, 以及幾乎所有iOS系統中的瀏覽器(包括iOS 系統中的火狐瀏覽器); 簡單的說，所有基於 WebKit 内核的瀏覽器)
* -moz- (火狐瀏覽器)
* -o- (舊版Opera瀏覽器)
* -ms- (IE瀏覽器 和 Edge瀏覽器)

以下是 wiki 的使用範例：
```css
/* Cross-browser css3 linear-gradient */
.linear-gradient {

  /* Gecko browser (Firefox) */
  background-image: -moz-linear-gradient(top, #D7D 0%, #068 100%);

  /* Opera */
  background-image: -o-linear-gradient(top, #D7D 0%, #068 100%);

  /* older Webkit syntax */
  background-image: -webkit-gradient(linear, left top, left bottom,
    color-stop(0, #D7D), color-stop(1, #068));

  /* Webkit (Safari, Chrome, iOS, Android) */
  background-image: -webkit-linear-gradient(top, #D7D 0%, #068 100%);

  /* W3C */
  background-image: linear-gradient(to bottom, #D7D 0%, #068 100%);

}

```

## gulp-postcss 與 autoPrefixer 

簡介完 postcss 的用途以及瀏覽器前綴是什麼之後，就可以回過頭看 gulp-postcss 和 autoPrefixer 要怎麼用了。CSS 檔透過 `gulp.scr()` 可以讀取 CSS 檔，並透過 `pipe()` 將 stream 傳給 `postcss()`。

`postcss()` 可以接受一個 processors 陣列當作參數。該陣列會放入能在 postcss 階段做些事情的 postcss plugins，例如 autoprefixer 能夠幫 CSS 將上瀏覽器前綴、cssnano 能夠壓縮 CSS 碼。

```js
export function scss() {
  const processors = [ 
    autoprefixer()
  ];

  return gulp
    .src(["./source/stylesheets/**/*.sass", "./source/stylesheets/**/*.scss"])
    .pipe($.postcss(processors))
    .pipe(gulp.dest("./public/stylesheets"));
}
```

## 瀏覽器列表

前面提到，autoPrefixer 可以替 CSS 部份較新的屬性加上瀏覽器前綴，讓同一份 CSS 可以相容在更多的瀏覽器上。而且，autoPrefixer 還能夠指定要相容於多早之前的瀏覽器版本。靠的就是在專案根目錄底下，新增 .browserlistrc 檔案。

```
# Browsers that we support

last 5 version
> 1%
IE 10 # sorry
```

更詳細的設定可以在 browserlist 的 github 頁面查看。至於這份 browserlist 清單是參考哪裡的呢？答案是前端工程師常常會參考的 Can I use 網站。可以說用了 autoPrefixer 並搭配 browserlist 的話，就跟著採用了會實時更新的活字典呢。


## 小結

今天是「CSS 的處理」系列的第三天，談到了 precss 與 postcss 的觀念，以及瞭解透過 autoPrefixer 可以幫 CSS 加上瀏覽器前綴，讓更多瀏覽器能吃到同一份 CSS。明天將會提到 CSS 的壓縮。


## 參考資料
npm
* [gulp-postcss - npm](https://www.npmjs.com/package/gulp-postcss)
* [autoprefixer - npm](https://www.npmjs.com/package/autoprefixer)


postcss
* [這是在講 Gulp 不是飲料是任務自動化工具這件事：安裝 PostCSS 篇 | Welcome.Web.World](https://hsiangfeng.github.io/gulp/20190610/4048666562/)
* [PostCSS - Wikipedia](https://en.wikipedia.org/wiki/PostCSS)
* [鐵人賽 11 - Gulp - 透過 PostCSS 加入 CSS Prefix | 卡斯伯 Blog - 前端，沒有極限](https://wcc723.github.io/css/2016/12/11/gulp-postcss/)
* [keywords:postcss-plugin - npm search](https://www.npmjs.com/search?q=keywords:postcss-plugin)

瀏覽器前綴
* [瀏覽器引擎前綴 - 術語表 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)
* [CSS hack - Wikipedia](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes)


broswer list
* [Browserslist (@Browserslist) / Twitter](https://twitter.com/browserslist)
* [browserslist/browserslist: 🦔 Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env](https://github.com/browserslist/browserslist#readme)
