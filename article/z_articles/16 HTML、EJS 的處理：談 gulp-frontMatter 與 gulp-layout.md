# HTML、EJS 的處理：談 gulp-front-matter 與 gulp-layout

在前天的文章中曾展示了如何將 ejs 模板語言轉成 HTML 的 gulp 流水線程式碼，今天將介紹兩個大功臣套件：gulp-front-matter 與 gulp-layout。其中，gulp-front-matter 功能是將 HTML 檔案最前頭的 front-matter (yaml 格式)轉成 json 格式；然後透過 gulp `pipe()`將該 json 交給 gulp-layout，gulp-layout 就會把該 json 解析成 JS 物件並丟進 ejs 模板中，最後就會產生瀏覽器看得懂的 HTML 檔。

整個運作過程大概 4 這樣：
1. 目錄下有個具有 front-matter、ejs 模板的 HTML/EJS 檔案
2. gulp-front-matter 套件會解析檔案中的 front-matter 部份，並轉成 JS object
3. gulp-layout 接收 JS object，把它跟 ejs 模板摻摻在一起，產出瀏覽器看得懂的 HTML 檔


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

以下簡單介紹與展示 gulp-front-matter 與 gulp-layout 兩個套件


## gulp-front-matter

我們先離開 ~~二次元回到三次元~~ 電腦的世界。用現實世界的事物做例子的話，front-matter 指的是一本書最前面的部份，可能像是大綱、書本資訊。中文似乎沒有很好的翻譯。

回到 ~~二次元~~ 電腦的世界。在這個專案中，因為每個頁面會想客製化設定一些資訊，所以會在每個有使用到 EJS 模板的 HTML 檔的上方放上 front-matter。以首頁為例，front-matter 有著這些資訊：

```yaml
---
title: 首頁
layout: ./source/layout.ejs
engine: ejs
current: index
---
```

因此，在 EJS 模板中，就可以取用 `title` 變數來取得 `首頁` 的值、取用 `engine` 變數以便告知 gulp-layout 套件要用 ejs 引擎來渲染首頁，並以 `layout` 變數中設定的檔案當作模板…等等。

另外，這個 front-matter 中用的語法，是 yaml 格式。它用途與 json 相同，都是用來儲存資料用的。較為詳細的介紹可參考維基，以下引用部份介紹：

> YAML（/ˈjæməl/，尾音類似 camel 駱駝）是一個可讀性高，用來表達資料序列化的格式。YAML 參考了其他多種語言，包括： C 語言、 Python、Perl，並從 XML、電子郵件的資料格式（RFC 2822）中獲得靈感。Clark Evans 在 2001 年首次發表了這種語言，另外 Ingy döt Net 與 Oren Ben-Kiki 也是這語言的共同設計者。目前已經有數種程式語言或手稿語言支援（或者說解析）這種語言。
> YAML 是 "YAML Ain't a Markup Language"（YAML 不是一種標記語言）的遞迴縮寫。在開發的這種語言時， YAML 的意思其實是："Yet Another Markup Language"（仍是一種標記語言，但為了強調這種語言以資料做為中心，而不是以標記語言為重點，而用反向縮略語重新命名。

### 我知道 front-matter 是什麼東西了。但具體來說，它是怎麼被整合到 gulp-front-matter 中的？

gulp-front-matter 的運作，依賴一個叫 front-matter 套件。這邊複製官網的例子，體驗一下運作過程。

一、安裝 front-matter 套件
```bash
npm install front-matter
```

二、新增一個 example.md，並用 yaml 格式寫 front matter
```yaml
---
name: how bro
description: I love how bro, how bro no.1
age: 30
friends: 0
---
```

三、寫一個 JS 檔案操作 example.md，目標是將 front matter 中的 yaml 提取出來，並轉成 JS Object  
```js
// main.js
var fs = require('fs')
  , fm = require('front-matter')
 
fs.readFile('./example.md', 'utf8', function(err, data){
  if (err) throw err
 
  var content = fm(data)
 
  console.log(content)
})
```

四、用 nodejs 執行該檔案，就能獲得 JS Object 格式結果了
```bash
> node main.js 
{
  name: 'how bro',
  description: 'I love how bro, how bro no.1',
  age: 30
  friends: 0
}
```

# gulp-layout

除了幫每個網頁設定客製化資料外，當然最重要的還是將它們渲染成瀏覽器可讀 HTML 檔。gulp-layout 可以把它理解為一種渲染引擎，它除了支援 ejs 外，還支援 markdown 與 pug 語法（有依賴 ejs、gulp-markdown、pug 套件）。

我們結合 front-matter 與 ejs，模擬一下整個流程是怎麼跑的，為今天的文做最後一個例子吧


一、安裝套件
```bash
npm install front-matter
npm install ejs
```

二、新增一個 example.md，並用 yaml 格式寫 front matter
```yaml
---
name: how bro
description: I love how bro, how bro no.1
age: 30
friends: 0
---
```

三、新增 JS 檔，取得 front matter 設定內容，將資料送進 ejs 模板
```js
// ejs.js
var ejs = require('ejs') // 引入 ejs 套件
var fs = require("fs")
var fm = require("front-matter")

var template = `
  <% if (user.friends == 0) { %>
    我，沒有朋友。
  <% } %>
`

fs.readFile("./example.md", "utf8", function(err, data) {
  if (err) throw err;

  var user = fm(data);
  var html = ejs.render(template, {user: user.attributes})

  console.log(html)
});
```

四、執行結果
```bash
> node ejs.js

我，沒有朋友。
```

## 小結

今天是「HTML、EJS 的處理」的第三天，介紹了 gulp-front-matter 與 gulp-layout 這兩個套件，以及 front-matter 與 yaml 是什麼東西。明天將介紹方便引入 gulp 套件的 gulp-load-plugins 套件。

## 參考資料

* [Swig 以及 YAML front-matter 模板 - gulp.js 中文文檔 | gulp.js 中文網](https://v3.gulpjs.com.cn/docs/recipes/templating-with-swig-and-yaml-front-matter/)

YAML
* [YAML - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/YAML)
* [YAML 語言教程 - 阮一峰的網絡日志](http://www.ruanyifeng.com/blog/2016/07/yaml.html)
* [YAML 語法 — ansible 中文權威指南 1.0.1 documentation](https://chusiang.github.io/ansible-docs-translate/YAMLSyntax.html)
* [JSON 就夠了，爲什麼還要 TOML 和 YAML？ - WeZZard - Medium](https://medium.com/@WeZZard/json-就夠了-爲什麼還要-toml-和-yaml-9f0a288dcdbf)
* [What is the difference between YAML and JSON? - Stack Overflow](https://stackoverflow.com/questions/1726802/what-is-the-difference-between-yaml-and-json)
* [深入對比 TOML，JSON 和 YAML - sunsky303 - 博客園](https://www.cnblogs.com/sunsky303/p/9208848.html)
* [軟件開發 | JSON、XML、TOML、CSON、YAML 大比拼](https://linux.cn/article-10664-1.html)
* [[Day06] 儲存資料 - File、檔案類型 (csv、xml、json、yaml)](https://ithelp.ithome.com.tw/articles/10202695)
* [14. 延伸補充 - YAML](https://ithelp.ithome.com.tw/articles/10206454)
* [The Official YAML Web Site](https://yaml.org/)

什麼是 fornt matter
* [Front-matter | Hexo](https://hexo.io/zh-tw/docs/front-matter.html)
* [What is front matter? definition and meaning - BusinessDictionary.com](http://www.businessdictionary.com/definition/front-matter.html)
* [Book design - Wikipedia](https://en.wikipedia.org/wiki/Book_design#Front_matter)

gulp-front-matter
* [gulp-front-matter - npm](https://www.npmjs.com/package/gulp-front-matter/v/2.0.0-0)
* [front-matter - npm](https://www.npmjs.com/package/front-matter)
* [shinnn/gulp-front-matter: Extract front-matter header from files](https://github.com/shinnn/gulp-front-matter)


swig 模板
* [前端筆記 - javascript - Swig](https://vuejs.com/2016/10/21/swig.html)
* [gulp-swig 動態數據模板編譯輸出 html 文件 - 小青蛙的博客 - CSDN 博客](https://blog.csdn.net/wu5229485/article/details/90903296)

gulp-layout
* [gulp-layout - npm](https://www.npmjs.com/package/gulp-layout)
* [macoshita/gulp-layout: Gulp plugin to apply a defferent template for each file (like a jekyll)](https://github.com/macoshita/gulp-layout)
* [前端樣板結合Gulp處理流程｜SoarLin's blog](https://soarlin.github.io/2016/12/26/frontend-templates-with-gulp/)
* [consolidate - npm](https://www.npmjs.com/package/consolidate)

gulp-ejs
* [gulp-ejs - npm](https://www.npmjs.com/package/gulp-ejs)
* [rogeriopvl/gulp-ejs: 🎨 Gulp plugin for ejs templates](https://github.com/rogeriopvl/gulp-ejs)
* [ejs - npm](https://www.npmjs.com/package/ejs)
