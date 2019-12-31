# Gulp 在前端工程化中的角色

在 Day1 的文章曾提到，gulp 作為一種建構工具，是用來幫助前端開發過程的建構自動化。那究竟，前端工程化後，對網頁開發產生了什麼影響呢？我們可以先回到沒有前端建構工具的那段時光來窺探一二。



## 早期的網頁開發狀況

如今，我們最常使用的一種網路服務，全球資訊網（world wide web），是在 1989 年被 Tim Berners-Lee 發明的。同年間，用 HTML 語法來表示網頁內容的構想也被提出。1995 年，Brendan Eich 被 Netscape 招募，開發出 JavaScript 腳本語言，用來操控網頁上的元素。1994 年，CSS 的概念被挪威人 Håkon Wium Lie 提出。在 1996、97 年間，CSS 有了第一版的規範、W3C 也組織了 CSS 工作群組；但因為當時瀏覽器市場競爭激烈，CSS 語法規範並沒有被良好支援。2003 年，加拿大網頁設計師 Dave Shea 發佈網站 [CSS ZEN GRADEN（禪意花園）](http://www.csszengarden.com/tr/zh-tw/)，呼籲 CSS 對網頁開發的重要性。

直至今日，網頁開發仍圍繞在這三種語言：HTML、CSS、JavaScript。但今日網頁開發的複雜程度已不可與當日相比了。

自從 JavaScript 在 1995 年被發明出來後，各家瀏覽器廠商（Netscape、IE、Firefox、Chrome、Safari…）、與制定 ECMAScript 規範的 ECMA TC39 組織就不斷地替 JavaScript 添加新的功能，讓它變得更加強大。像是在 2004 年，Google 開發出讓使用者能順暢地、不用換頁收信的 gmail，使用到了 IE 在 1999 年提出的 XMLHttpRequest 這隻 web API。

隨著網頁應用變得複雜，如何更有效管理 JavaScript 程式碼變成了重要的議題。2006 年，jQuery、MooTools 等 library 被提出，開發者們可以用更少的程式碼來獲取元素的 id、發出 Ajax 請求，藉此提昇開發效率。

此外，也開始有人思考，讓 JavaScript 擁有自己的模組系統，使網頁開發者能方便取用各種現成的第三方模組。可能會在 Day6 提到的 AMD 規範，就是一個試圖讓 JavaScript 能在瀏覽器環境下也能有模組系統。不過，這些現況在 Node.js 出現後，有了極大的變化。



## 由 node.js 發起的前端工程化生態

在 2008 年，原本主要業務是網頁搜尋的 Google，也開始踏足網頁瀏覽器領域，釋出 Chrome 這個瀏覽器。此外，還釋出能直譯 JavaScript 的 V8 引擎，效能比當時檯面上許多瀏覽器內的 JavaScript 引擎還要好。2009 年，Node.js 就應運而生了。

Node.js 的誕生，讓 JavaScript 不再只是跑在瀏覽器上的腳本語言，而是能跑在本地端的程式語言，就像 Python、Ruby 這些語言一樣。JavaScript 自此被添加了許多的外掛上身。

2010 年，npm（node package manager）發布，讓 JavaScript 套件有了可發布、下載、管理的平台。2011、2012 年間，browserify、webpack 等模組打包工具誕生，能夠讓瀏覽器端的 JavaScript 看懂原先只有 Node.js 才能使用的 `require()` 語法，讓在瀏覽器的 JavaScript 也有了模組化、依賴的功能。2012、2013 年間，gurnt、gulp 與 npm script 等工作執行工具誕生，開發者自此可以更方便地制定前端建構工作、並將工作依序或同時執行，讓前端開發的建構流程自動化。

在前端工程化的早期，gulp 曾是最主流的建構工具。但時至今日，網頁應用越來越複雜（如 angular、react、vue），前端開發的額外需求越來越多，gulp 已不再能輕鬆的勝任這些任務。在近日取而代之的主流，是用 webpack 當打包工具，搭配 npm script 下語法來執行工作。

|      | Package manager | Task runner      | Module bundler |
| ---- | --------------- | ---------------- | -------------- |
| 2010 | npm             |                  |                |
| 2011 |                 |                  | browserify     |
| 2012 | bower           | grunt            | webpack        |
| 2013 |                 | gulp, npm script |                |
| 2016 | yarn            |                  |                |
| 2017 |                 |                  | parcel, rollup |



## 本系列文想做的事情

之所以想寫這系列文，一方面是因為 gulp 是我第一個學習的建構工具，雖然可能沒那麼流行了，但還是想多認識它一點。一方面是因為若多瞭解 gulp，也能夠更瞭解前端開發時，需要有哪些建構的工作，以及如何讓他們自動化。

在幾個月前，我曾經用 gulp 3.9.1 當作建構工具，練習做了一個[電商網站的切版專案](https://github.com/ayugioh2003/Sweataste)。本系列文將以此專案為例，將過去使用的 gulp 3.9.1 環境砍掉重練，升級成 gulp 4，並記錄在這過程中的一些心得。



## 參考資料

前端工程化簡史參考資料
* [A brief history of Node.js](https://nodejs.dev/a-brief-history-of-nodejs)
* [npm (software) - Wikipedia](https://en.wikipedia.org/wiki/Npm_(software))
* [Browserify - Wikipedia](https://en.wikipedia.org/wiki/Browserify)
* [About · Bower](https://bower.io/docs/about/)
* [Grunt (software) - Wikipedia](https://en.wikipedia.org/wiki/Grunt_(software))
* [Webpack - Wikipedia](https://en.wikipedia.org/wiki/Webpack)
* [Gulp vs. Grunt 2019: differentiating between the two task runners - IONOS](https://www.ionos.com/digitalguide/websites/web-development/gulp-vs-grunt-differentiating-between-the-task-runners/)
* npm script
  * [用 npm-run 自動化任務 - SegmentFault 業界資訊 - SegmentFault 思否](https://segmentfault.com/a/1190000000344102)
  * [task automation with npm run](https://web.archive.org/web/20131117181759/https://substack.net/task_automation_with_npm_run)
  * [Self-contained Node.js scripts • Thomas Parisot](https://oncletom.io/2014/self-contained-node-scripts/)
  * [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
  * [The npm Blog — npm@2.0.0](https://blog.npmjs.org/post/98131109725/npm200)
  * [npm-run-script | npm Documentation](https://docs.npmjs.com/cli/run-script)
  * [npm-scripts | npm Documentation](https://docs.npmjs.com/misc/scripts)
* [Yarn: A new package manager for JavaScript - Facebook Engineering](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/)
* [parcel/CHANGELOG.md at master · parcel-bundler/parcel](https://github.com/parcel-bundler/parcel/blob/master/CHANGELOG.md)
* [rollup/CHANGELOG.md at master · rollup/rollup](https://github.com/rollup/rollup/blob/master/CHANGELOG.md)

打包

* [前端代碼的 “最后一公里”——module bundler・Issue #2・szrenwei/blog](https://github.com/szrenwei/blog/issues/2)