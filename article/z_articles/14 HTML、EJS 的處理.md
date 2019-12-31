
# HTML、EJS 的處理

終於要開始一個跟前端開發比較相關的 task 惹。在網頁開發早期，寫一個網頁只需要一個 HTML 檔案就好；但後來，有些人覺得 HTML 語法能提供的功能太少，於是就增加了像是 EJS、PUG 等樣板語言，來替 HTML 語言加入條件判斷、for 迴圈、元件化、套用模板等等功能。今天先貼上完整語法，後幾天再一一介紹相關套件功能。

首先，先用 `npm install` 安裝相關套件

```bash
npm install ejs --save-dev # 因為該專案用 EJS 樣板語言來寫 HTML，所以裝它
npm install gulp-front-matter --save-dev # 可以幫每頁 HTML 個別設定變數，好用
npm install gulp-layout --save-dev # 可以先接收 front-matter 傳來的值，然後傳到 EJS 模板接收變數，再轉成 HTML

npm install gulp-load-plugins --save-dev # 讓 gulp- 相關套件就算沒 import 到 gulpfile.js 中，也能從 $ 中引用到
```

接著在 gulpfile.bable.js 中定義好 ejs task

```js
export function ejs() {
  return  gulp.src(['./source/**/*.ejs', './source/**/*.html'])
    .pipe($.frontMatter())
    .pipe(
      $.layout((file) => {
        return file.frontMatter;
      }),
    )
    .pipe(gulp.dest('./public'))
}
```

最後在 CLI 中呼叫該 task，就可以順利將使用 EJS 模板的 HTML，轉成瀏覽器看得懂的 HTML 囉

```bash
> tree . 
├── gulpfile.babel.js
├── package.json
└── source
    ├── carts.html
    ├── checkout-1.html
    ├── checkout-2.html
    ├── checkout-3.html
    ├── checkout-4.html
    ├── index.html
    ├── layout.ejs
    ├── page.html
    ├── product.html
    ├── register.html
    └── test.html

> gulp ejs
[22:04:01] Requiring external module @babel/register
[22:04:10] Using gulpfile D:\Users\Chu\Desktop\鐵人賽：試著把切版專案升級到gulp4吧\Sweataste-gulp4.0\gulpfile.babel.js   
[22:04:10] Starting 'ejs'...
[22:04:12] Finished 'ejs' after 2.77 s

> tree .
├── gulpfile.babel.js
├── package.json
├── public
│   ├── carts.html     
│   ├── checkout-1.html
│   ├── checkout-2.html
│   ├── checkout-3.html
│   ├── checkout-4.html
│   ├── index.html
│   ├── layout.ejs
│   ├── page.html
│   ├── product.html
│   ├── register.html
│   └── test.html
└── source
    ├── carts.html
    ├── checkout-1.html
    ├── checkout-2.html
    ├── checkout-3.html
    ├── checkout-4.html
    ├── index.html
    ├── layout.ejs
    ├── page.html
    ├── product.html
    ├── register.html
    └── test.html
```

Before: 原先 HTML 的 EJS + Front-matter 舉例

```html
<!-- layout.ejs -->
<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
  <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
    <li class="nav-item mr-60 <% if (current === 'index') {%>active<%} %>">
      <a class="nav-link" href="./index.html">首頁</a>
    </li>
    <li class="nav-item mr-60 <% if (current === 'product') {%>active<%} %>">
      <a class="nav-link " href="./product.html">甜點</a>
    </li>
    <li class="nav-item mr-60 <% if (current === 'register') {%>active<%} %>">
      <a class="nav-link " href="./register.html">登入</a>
    </li>
  </ul>
</div>
```

```html
<!-- index.html -->
---
title: 甜點
layout: ./source/layout.ejs
engine: ejs
current: product
---

<li class="page-item ">
  <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
</li>
```

After: 瀏覽器能讀懂的 HTML
```html
<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
  <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
    <!-- 只有第一個 li 的 class 會放入 active，其他 li 沒有 -->
    <li class="nav-item mr-60 active">
      <a class="nav-link" href="./index.html">首頁</a>
    </li>
    <li class="nav-item mr-60 ">
      <a class="nav-link " href="./product.html">甜點</a>
    </li>
    <li class="nav-item mr-60">
      <a class="nav-link " href="./register.html">登入</a>
    </li>
  </ul>
</div>
```

## 小結

今天是「HTML、EJS 的處理」系列的第一篇，列出了該怎麼將使用 EJS 的 HTML 轉成瀏覽器能看懂得 HTML。明天將會簡單介紹 EJS 模板語言是什麼東西。

## 參考資料

* [Transpile and minify Javascript, HTML and CSS using Gulp 4 - Goede Site](https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4)