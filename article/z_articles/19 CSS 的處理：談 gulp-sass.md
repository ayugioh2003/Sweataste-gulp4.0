# CSS 的處理：談 gulp-sass

gulp-sass 是 gulp 為了處理 sass/scss 檔而誕生的套件。然而，sass/scss 是什麼呢？SASS 的官網是這麼介紹 SASS 的：

> Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
> Sass 是 J 格世界上最成熟、最穩定、以及最強大的 pro 級 CSS 擴充語言。

簡單的說，SASS（Syntactically Awesome Stylesheets）是 CSS 語法的擴充。SASS 語法增加了很多 CSS 沒有的功能，像是變數（現在 CSS3 有支援變數了）巢狀縮排、@mixin、@for 等等。而 SASS 又分為兩種寫法，一種是 SASS（用縮排代表巢嵌關係）、一種是 SCSS（用尖括號+縮排代表巢嵌關係）。以下是 SASS 官方範例語法：

這是 SCSS 的寫法，看起來就像是 CSS 的寫法一樣，不過可以用縮排與尖括號表示巢嵌關係
```scss
// scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

這是 SASS 的寫法，用縮排即可表示巢嵌關係，看起來很簡潔
```python
// sass
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

以上兩種寫法，在編譯後都可以得到以下的 CSS 語法
```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

## gulp-sass 的用法

在昨天的 CSS 處理展示中，就有使用到 gulp-sass 的使用，只要前頭有 `gulp.src()` sass/scss 檔，在後面就可以用 `pipe()` 連接 stream，並傳進 `sass()` 函式中，將 sass/scss 檔處理成瀏覽器看得懂的 CSS。

```js
.pipe(
  $.sass({
    outputStyle: "nested",
    includePaths: ["./node_modules/bootstrap/scss"]
  }).on("error", $.sass.logError)
)
```

`.on("error", $.sass.logError)` 指的是當有 error 發生時，就會顯示訊息在 CLI 上。而 `sass()` 中間的參數，則是 gulp-sass 依賴的 node-sass 套件提供的 Options，可以在自訂一些額外的條件進去。

## node-sass

接下來看看上方程式碼 `sass()` 中使用的 options 代表的各是什麼意思。

outputStyle 指的是編譯出來的 CSS 要長成什麼樣子。以下是 node-sass 在 npm 給的介紹
> Determines the output format of the final CSS style.
> 決定最後輸出 CSS 語法的輸出格式
* Type: String
* Default: nested
* Values: nested, expanded, compact, compressed

includePaths 則是在 SASS 檔中 `@import` 其他 SASS 檔案時，會額外從哪些路徑尋找。以下是 node-sass 在 npm 的介紹
> An array of paths that LibSass can look in to attempt to resolve your @import declarations. When using data, it is recommended that you use this.
> includePaths 的值是包含著許多路徑的 array，讓 LibSass (用 c++ 寫的 SASS 編譯器) 可以去尋找、解析在 SASS 檔案中的 `@import` 宣告。當你在處理 SASS 檔案時，推薦你使用這個配置。

* Type: Array<String>
* Default: []

## 小結

今天是「CSS 的處理」的第二天，談到了 SASS 是什麼，以及 gulp-sass 與 node-sass 的一些設定。明天就會談到幫 CSS 加上瀏覽器前綴詞的 postcss 與 autoprefixer 套件。

## 參考資料

* [gulp-sass - npm](https://www.npmjs.com/package/gulp-sass)
* [sass/node-sass: Node.js bindings to libsass](https://github.com/sass/node-sass#includepaths)
* [sass/node-sass: Node.js bindings to libsass](https://github.com/sass/node-sass#outputstyle)

