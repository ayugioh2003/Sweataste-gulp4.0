# HTML、EJS 的處理：談 HTML 樣板語言

在網頁開發領域發展的初期，前端和後端是沒分這麼開的。有些開發者直接把 HTML、CSS、JS 檔案放到後端語言裡頭（如 php）；將這些檔案重新處理後，才傳給那些需要資料的瀏覽器。

後來，有些開發者覺得在 php 或其他後端語言寫 HTML 太麻煩了，於是就又另外開發了能在 HTML 擴充更多功能（如條件判斷、迴圈、字串模板）的樣板語言（template language/engine）。比較有名的如 handlebar、pug、ejs。以下簡單展示 pug 與 ejs 的用法。

## pug

比起 HTML 的語法，pug 語法可以說簡潔很多。以下展示用 pug 處理 case 判斷，轉成 HTML 的結果

```pug
// example.pug
- var friends = 0  // pug 可在 .pug 檔中直接放變數，也能透過後端傳參數進來
case friends
  when 0
    p 您没有朋友
  when 1
    p 您有一个朋友
  default
    p 您有 #{friends} 個朋友
```

```html
<!-- example.html -->
<p>您沒有朋友</p>
```

想體驗 pug，可直接用 codpen 來試刀看看
* [A Pen by Chiu](https://codepen.io/ayugioh2003/pen/VwZJEea)

> 小八卦是，pug 本來名字叫做 jade（玉），因為名字跟其他的軟體名衝到了，可能有商標的爭議，所以後來就改成 pug（哈巴狗）惹。

## ejs

EJS 的全稱是 Embedded JavaScript templating。它的用法跟 HTML 語法很像，可以當作 HTML 的擴充版。以下展示 EJS 處理 if 判斷，轉成 HTML 的結果。因為 EJS 沒辦法在 codepen 上使用，在這邊給兩個能較快速體驗的方式

一、在 ejs playground 上體驗
* [EJS Playground](https://ionicabizau.github.io/ejs-playground/)
```ejs
<!-- exapmle.ejs -->
<%
  var user = {
    name: 'how bro',
    age: 30
  }
%>
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

```html
<!-- example.html -->
<h2>how bro</h2>
```

二、用 nodejs 將 ejs 模板轉成 html

1.先安裝 ejs 套件
```js
mkdir ejs_example
cd ejs_example
npm install ejs
```


2.寫 ejs.js 控制語法
```js
// ejs.js
var ejs = require('ejs') // 引入 ejs 套件
// ejs 模板。如果有建立好完整後端環境的話，就能將此模板放進 example.ejs 中，再透過後端環境轉成 example.html
var template = `
  <% if (user) { %>
    <h2><%= user.name %></h2>
  <% } %>
`
// 判斷式中傳入的參數變數
var user = {
  name: 'how bro',
  age: '30'
}
// 透過 ejs 套件，使用它的渲染函數。第一個參數放模板，第二個參數放想傳入的變數。最後回傳 html  
var html = ejs.render(template, {user: user})

console.log(html)
```

3.印出結果
```bash
> node ejs.js
<h2>how bro</h2>
```


## 小結

今天是「HTML、EJS 的處理」系列的第二天，談到了 HTML 樣板語言是什麼，以及簡單展示了 pug 與 ejs 的用法。明天將會介紹 gulp-layout 與 gulp-frontMatter 這兩個 gulp 套件。


## 參考資料

樣板語言比較與介紹
* [Day8– 前端小字典三十天【每日一字】– Template Engine - iT 邦幫忙：：一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10158878)
* [Top 14 Templating Engines for JavaScript 2019 - Colorlib](https://colorlib.com/wp/top-templating-engines-for-javascript/)
* [7 JavaScript Templating Engines with Code Examples - Developer Drive](https://www.developerdrive.com/best-javascript-templating-engines/)
* [How to Modularize HTML Using Template Engines and Gulp | Zell Liew](https://zellwk.com/blog/nunjucks-with-gulp/)


handlebar
* [Handlebars.js: Minimal Templating on Steroids](http://handlebarsjs.com/)

ejs
* [EJS -- Embedded JavaScript templates](https://ejs.co/)
* [EJS -- 嵌入式 JavaScript 模板引擎 | EJS 中文文檔](https://ejs.bootcss.com/)
* [Day11. MVC 網站框架 (四) 使用 EJS 樣版動態生成網頁 - iT 邦幫忙：：一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10187106)
* [Node + Express 完全新手教學 - 3 [Template - EJS 介紹 + 使用] - KDZONE](https://www.kdzone.net/2016/01/node-express-3-template-ejs.html)
* [EJS：Client 端嵌入式（Embedded）JavaScript - G. T. Wang](https://blog.gtwang.org/programming/ejs-embedded-javascript/)
* [王者歸來：Node.js 學習課程 3 之 6 – EJS 模板 – AI Art Hedge Fund](https://www.aiart.io/王者歸來：node-js-學習課程-36-ejs-模板/)
* [node express ejs 使用模版引擎做的一個示例 demo | 程式前沿](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/230316/)

pug
* [如果你是常切版的前端工程師，你一定要知道pug! - 林罡北 - Medium](https://medium.com/@NorthBei/如果你是常切版的前端工程師-你一定要知道pug-8b2cbc0a784c)
* [Getting Started – Pug](https://pugjs.org/api/getting-started.html)
* [入門指南 – Pug 中文文檔](https://pug.bootcss.com/api/getting-started.html)
* [HTML 模版語言 - pug 介紹與安裝 - iT 邦幫忙：：一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10204206)
* [[Note] PUG 學習筆記（Learn to Use PUG） | PJCHENder 私房菜](https://pjchender.github.io/2017/09/25/note-pug-學習筆記（learn-to-use-pug）//)
* [網頁模板 pug 基本語法 | LITREILY](https://www.litreily.top/2018/08/31/pug-synax/)
* [如何看待模板引擎 Jade 改名为 Pug？ - 知乎](https://www.zhihu.com/question/46418330)

template literals
* [[筆記] JavaScript ES6 中的模版字符串（template literals）和標籤模版（tagged template） ~ PJCHENder<br > 那些沒告訴你的小細節](https://pjchender.blogspot.com/2017/01/javascript-es6-template-literalstagged.html)

template 元素
* [<template> - HTML | MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/template)

Web Components
* [2017，讓我們再來看看 Web Components 吧！ | TechBridge 技術共筆部落格](https://blog.techbridge.cc/2017/01/06/web-components/)
* [從 HTML Components 的衰落看 Web Components 的危機・Issue #3・xufei/blog](https://github.com/xufei/blog/issues/3)
