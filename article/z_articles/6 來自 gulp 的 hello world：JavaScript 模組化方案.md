在 day4、day5 用到的 `require`、`import` 等語法，其實就是 JavaScript 內建的模組化寫法。但其實 JavaScript 被創始之初，是沒有模組化方案的。

因此，早期的 JavaScript 開發者為了讓網頁開發更有條理，就在規範還不支援的情況下，土砲了許多模組化方案。直至今日，雖然 ECMAScript 已經有了內建的模組系統，但在瀏覽器端與 Node.js 端上仍然不完備。以下是簡單的 JavaScript 模組規範歷史整理：

|      | 瀏覽器端                                                     | 伺服器端                                                     |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
|      | globals。透過立即函式、物件實現命名空間。                    | - （ - 表伺服器端用法相似）                                  |
| 2009 |                                                              | CommonJS 規範。Node.js 初期有遵守此規範。若想在瀏覽器上用 CommonJS 的模組規範，可透過 Browerify、webpack 等 module bundler 來轉成瀏覽器看得懂的模組規範（如 AMD 規範）。 |
| 2011 | AMD, CMD 規範。實現了 AMD  規範的 module loader 有 require.js，而實現了 CMD 規範的則有 sea.js。 |                                                              |
| 2011 | UMD 規範。兼容 AMD、CommonJS規範寫法                         | -                                                            |
| 2013 | SystemJS，一種 module loader，可導入 CommonJS、UMD、AMD、ES6 的模組。 | -                                                            |
| 2015 | ES6 Modules。ECMAScript 的官方內建模組規範。在瀏覽器端用 script 引入要添加 type=module。在伺服器端使用須將 .js 後綴名改成 .jsm。雖然規範已定，但如何實現還沒塵埃落定，所以使用細節可能會再有變動。 | -                                                            |

在這次系列文中，會用到的只有 CommonJS、ES6 Modules 這兩組模組規範，因此將重點介紹這兩種。



## CommonJS 

CommonJS 模組規範，是 *Mozilla* 工程師 Kevin Dangoor 在 2009 年 1 月提出，最初名為ServerJS，而後在同年 8 月改名 CommonJS。目前主要有使用 CommonJS 規範的項目有 Node.js。因此，如果要在後端用 JavaScript 的模組系統的話，在早期都是用 CommonJS 的語法形式。

在 Day5 的時候，有寫到 gulp 的引入、導出模組時的 CommonJS 寫法。主要用法是，要導入模組時，就用 `require('模組名稱')`，在範例中這樣寫 `const gulp = require('gulp') `。要導出模組時，就用 `exports.想被使用的名字 = 想導出的函式或變數`，在範例中是這樣寫 `exports.hello4CommonJS = hello4CommonJS`。

```js
// gulpfile.js
// 在 CLI 輸入 gulp hello4CommonJS，會印出 hello gulp , CommonJS format

const gulp = require('gulp') 

function hello4CommonJS(cb) {
  console.log('hello gulp 4.0, CommonJS format' )
  cb();
}

exports.hello4CommonJS = hello4CommonJS
```



## ES6 Modules 

ES6 Modules，簡稱 ESM，是 ECMA TC39 組織在 2015 推出的 JavaScript 內建模組功能，親兒子來著。

在 Day5 的時候，有寫到 gulp 的引入、導出模組時的 CommonJS 寫法。主要用法是，要導入模組時，就用 `import 想被使用的名字 from '模組名字'`，在範例中這樣寫 `import gulp from 'gulp' `。要導出模組時，就用 `exports 想導出的函式或變數`，在範例中是這樣寫 `export function hello4ES6(){}`。

```js
// gulpfile.babel.js
// 在 CLI 輸入 gulp hello4ES6，會印出 hello gulp 4.0, ES6 format

import gulp from 'gulp' 

export function hello4ES6(cb) {
  console.log('hello gulp 4.0, ES6 format')
  cb()
}
```



## 小結

在 ESM 方案出來前，在 Node.js 上都是用 CommonJS 規範的 `require`、`exports` 語法來操作模組。但有了 babel、webpack 等工具出來後，就算 ESM 的實現還不成熟，但已經有著正式使用的品質了。在接下來的數日，會主要使用 ESM 的語法來操作模組。

在 hello gulp 篇，整理了 glup 3.9.1 與 gulp 4 的寫法差異，以及 CommonJS 與 ESM 規範的寫法差異。明天就來個稍微實用一點的 task：複製檔案吧。



## 參考資料

JS module 比較
* [Unbundling the JavaScript module bundler - DublinJS July 2018](https://slides.com/lucianomammino/unbundling-the-javascript-module-bundler-dublinjs#/46)
* [AMD , CMD, CommonJS，ES Module，UMD - 掘金](https://juejin.im/post/5b7d2f45e51d4538826f4c28)
* [使用 AMD、CommonJS 及 ES Harmony 编写模块化的 JavaScript](http://justineo.github.io/singles/writing-modular-js/)
* [JavaScript模块化（ES Module/CommonJS/AMD/CMD） - 簡書](https://www.jianshu.com/p/da2ac9ad2960)
* [彻底搞清楚javascript中的require、import和export - 最骚的就是你 - 博客园](https://www.cnblogs.com/libin-1/p/7127481.html)
* [JavaScript 模块简史-WEB前端开发](https://www.html.cn/archives/7628)
* [模組系統 - HiSKIO 跨領域學程式 | 專業程式線上課程平台 | 嗨 程式技能](https://hiskio.com/courses/87/lectures/2067)
* [前端模块化开发那点历史 · Issue #588 · seajs/seajs](https://github.com/seajs/seajs/issues/588)
* [歡迎來到大分叉時代 - AMD 與 CommonJS 的發展](https://ithelp.ithome.com.tw/articles/10191574)
* [与 RequireJS 的异同 · Issue #277 · seajs/seajs](https://github.com/seajs/seajs/issues/277)
* [前言 | Webpack 中文指南](https://zhaoda.net/webpack-handbook/preface.html)

CommonJS
* [CommonJS - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/CommonJS)
* [什麼？！我們竟然有 3 個標準？ - 你有聽過 CommonJS 嗎？(Day9) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10191478)
* [CommonJS Spec Wiki](http://wiki.commonjs.org/wiki/CommonJS)
* [CommonJS规范 -- JavaScript 标准参考教程（alpha）](https://javascript.ruanyifeng.com/nodejs/module.html)
* [Modules | Node.js v12.10.0 Documentation](https://nodejs.org/docs/latest/api/modules.html)
* [CommonJS 规范 | Webpack 中文指南](https://zhaoda.net/webpack-handbook/commonjs.html)
* [介绍 CommonJS – JavaScript 完全手册（2018版）-WEB前端开发](https://www.html.cn/archives/10285)

AMD
* [AMD (中文版) · amdjs/amdjs-api Wiki](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88))
* [Modules/AsynchronousDefinition - CommonJS Spec Wiki](http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition)
* [amdjs/amdjs-api: Houses the Asynchronous Module Definition API](https://github.com/amdjs/amdjs-api)
* [RequireJS History](https://requirejs.org/docs/history.html)
* [Javascript模块化编程（三）：require.js的用法 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

CMD
* [CMD 模块定义规范 · Issue #242 · seajs/seajs](https://github.com/seajs/seajs/issues/242)
* [从 CommonJS 到 Sea.js · Issue #269 · seajs/seajs](https://github.com/seajs/seajs/issues/269)
* [seajs/seajs: A Module Loader for the Web](https://github.com/seajs/seajs)

UMD
* [umdjs/umd: UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.](https://github.com/umdjs/umd)

system.js
* [模块化 js: SystemJS和jspm的新手入门 - 众成翻译](https://www.zcfy.cc/article/300)
* [systemjs - systemjs入門 | systemjs Tutorial](https://riptutorial.com/zh-TW/systemjs)
* [Releases · systemjs/systemjs](https://github.com/systemjs/systemjs/releases?after=0.2.2)
* [systemjs/systemjs: Dynamic ES module loader](https://github.com/systemjs/systemjs)
* [使用 jspm 把握 JavaScript 模块的未来](https://www.ibm.com/developerworks/cn/web/wa-use-jspm-javascript-modules/index.html)
* [YouTube](https://www.youtube.com/watch?v=iukBMY4apvI)
* [第一次用 jspm 就上手 | DEVLOG of andyyou](https://andyyou.github.io/2015/08/13/jspm-getting-started/)
* [ES Module Package Manager - jspm.org](https://jspm.org/)

ES6 module

* [深入解析ES Module - 知乎](https://zhuanlan.zhihu.com/p/40733281)
* [为何 ES Module 如此姗姗来迟 - Coding Amio - SegmentFault 思否](https://segmentfault.com/a/1190000004940294)
* [Module 的语法 - ECMAScript 6入门](http://es6.ruanyifeng.com/#docs/module)
* [Module 的加载实现 - ECMAScript 6入门](http://es6.ruanyifeng.com/#docs/module-loader)
* [图说 ES Modules - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000014318751)
* [深入理解 ES6 模块机制 - 知乎](https://zhuanlan.zhihu.com/p/33843378)
* [網站如何開始使用 ES6 / ES2015 模組化技術進行前端開發 | The Will Will Web](https://blog.miniasp.com/post/2019/01/29/How-to-get-start-with-ES6-ES2015-Modules-with-Parcel)
* [JavaScript ES6 新增特性整理 - 4.类和模块机制 - IT笔录](https://itbilu.com/javascript/js/EJr8w3SJG.html)
* [ES6 Modules(模块)系统及语法详解-WEB前端开发](https://www.html.cn/archives/6974)
* [System JS Wiki | Barbarian Meets Coding](https://www.barbarianmeetscoding.com/wiki/system-js/)

瀏覽器端 HTML 的 script[type=module]
* [为什么 ES Module 的浏览器支持没有意义 - 知乎](https://zhuanlan.zhihu.com/p/25046637)
* [万岁，浏览器原生支持ES6 export和import模块啦！ « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2018/08/browser-native-es6-export-import-module/)
* [ES6模組匯入 | iThome](https://www.ithome.com.tw/voice/132470?fbclid=IwAR0MzEFHKE_GcOV2STlhhlx2e5cdGlO5H59N9Ngv5HBkJS8BsYLwjd3v_zY)