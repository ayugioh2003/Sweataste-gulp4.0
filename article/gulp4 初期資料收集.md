# 鐵人賽參賽評估

大綱草稿管理

* [鐵人賽gulp4.0文章管理 - Google 試算表](https://docs.google.com/spreadsheets/d/1cRwuSB34OPfdlKhGUF_uOObMpibV0DkBIHH7jtRp-JA/edit#gid=0)

Github 原專案的 gulpfile.js

* [Sweataste/gulpfile.js at master · ayugioh2003/Sweataste](https://github.com/ayugioh2003/Sweataste/blob/master/gulpfile.js)

## 動機

* [2019 IT 鐵人邦有獎徵文活動 | 六角學院](https://www.hexschool.com/2019/08/20/2019-08-20-ithelp-2020ironman/)
* [六角學院 - 學員社團](https://www.facebook.com/groups/110635703123103/?multi_permalinks=465276084325728&notif_id=1566358383039884&notif_t=group_activity&ref=notif)

## 資源

* [分類: Gulp | Welcome.Web.World](https://hsiangfeng.github.io/categories/gulp/page/2/)
* [使用 gulp 進行網頁前端自動化 | Udemy](https://www.udemy.com/course/gulp-learning/)
* [iT 邦幫忙：：一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/search?tab=article&search=gulp&page=1)
* [使用 Gulp 搭建輕量級前端開發環境](https://www.ibm.com/developerworks/cn/web/wa-using-gulp-to-build-lightweight-frontend-environment/index.html)
* [全棧開發一（webpack+gulp 構建 vue 前端開發環境） - 簡書](https://www.jianshu.com/p/ee68710c7c7e)
* [Gulp：任務自動管理工具 -- JavaScript 標準參考教程（alpha）](https://javascript.ruanyifeng.com/tool/gulp.html)
* [簡介: gulp - sass ( include update for gulp4.0) - Ashe_Li - Medium](https://medium.com/@Ashe_Li/%E5%88%9D%E5%BF%83%E8%80%85%E7%9A%84%E5%89%8D%E7%AB%AF%E8%87%AA%E5%8B%95%E5%8C%96%E7%AD%86%E8%A8%98-%E7%B0%A1%E5%96%AE%E4%BD%BF%E7%94%A8gulp-concat-uglify-sass-postcss-6ad9bc3ddfad)
* [twtrubiks/Gulp-Beginners-Guide: Gulp 基本教學 - 從無到有 Gulp-Beginners-Guide](https://github.com/twtrubiks/Gulp-Beginners-Guide)
* [Gulp 學習 1 - 安裝與執行 - OXXO.STUDIO](https://www.oxxostudio.tw/articles/201503/gulp-install-webserver.html)
* [An Introduction to Gulp.js - SitePoint](https://www.sitepoint.com/introduction-gulp-js/)
* [gulp.src () 内部實現探究 - 程序猿小卡 - 博客園](https://www.cnblogs.com/chyingp/p/gulp-src-implement.html)
* [Platform-CUF/use-gulp: gulp 資料收集](https://github.com/Platform-CUF/use-gulp)
* [介紹 | gulp 學習筆記](http://kejyun.github.io/gulp-learning-notes/index.html)

官方

* [gulp.js - The streaming build system](https://gulpjs.com/)
* [快速入門・gulp.js 中文文檔](https://www.gulpjs.com.cn/docs/getting-started/quick-start/)
* [gulpjs/gulp: The streaming build system](https://github.com/gulpjs/gulp)
* [gulp.js - Wikipedia](https://en.wikipedia.org/wiki/Gulp.js)
* [gulp-v4 - npm](https://www.npmjs.com/package/gulp-v4)

升級 4.0

* [升級到 gulp 4.0 | Sukka's Blog](https://blog.skk.moe/post/update-gulp-to-4/)
* [是時候升級你的 gulp 到 4.0 了 | AlloyTeam](http://www.alloyteam.com/2015/07/update-your-gulp/)
* [How to Migrate to Gulp.js 4.0 — SitePoint](https://www.sitepoint.com/how-to-migrate-to-gulp-4/)
* [gulp4 坑：assert.js throw err AssertionError - IT 閱讀](https://www.itread01.com/content/1544596816.html)
* [[譯] Gulp 4 入門指南・Issue #62・cssmagic/blog](https://github.com/cssmagic/blog/issues/62)
* [使用 Gulp 4.0 新的 (CLI) 命令行界面 — 1010Code](https://andy6804tw.github.io/2018/01/23/Gulp-tutorial/)

Node.js

* [Stream | Node.js v12.9.0 Documentation](https://nodejs.org/api/stream.html)
* [jabez128/stream-handbook: stream-handbook 的完整中文版本](https://github.com/jabez128/stream-handbook)

要調整的套件

* gulp --verify 看套件有沒有 blacklist
* gulp -- tasks 看目前有的工作
* gulp-clean: use the `del` module
* gulp-browserify: use the browserify module directly (好像沒用到，考慮刪掉)
  * [browserify/browserify: browser-side require() the node.js way](https://github.com/browserify/browserify#api-example)
  * [基于 Gulp + Browserify 構建 ES6 環境下的自動化前端項目 - Joe_Sky - SegmentFault 思否](https://segmentfault.com/a/1190000004917668)
  * [Browserify 入門 « 關於網路那些事...](https://adon988.logdown.com/posts/2910237-browserify-tutorial)
  * [Browserify：瀏覽器加載 Node.js 模塊 -- JavaScript 標準參考教程（alpha）](https://javascript.ruanyifeng.com/tool/browserify.html)
  * [browserify 原理](http://zhenhua-lee.github.io/nodejs/browserify.html)
  *  [前端模塊及依賴管理的新選擇：Browserify - 庭院茶 - SegmentFault 思否](https://segmentfault.com/a/1190000002941361)
  * [browserify 使用手冊 - 詩 & 遠方 - 博客園](https://www.cnblogs.com/liulangmao/p/4920534.html)
  * [Browserify: 取代 RequireJS ?](http://josephj.com/entry.php?id=394)
* gulp-minify-css: deprecated. use gulp-clean-css.
* jade -> pug
* 黑名單
  * [plugins/blackList.json at master · gulpjs/plugins](https://github.com/gulpjs/plugins/blob/master/src/blackList.json)
  * [Automating your workflow with Gulp.js](https://www.slideshare.net/appleboy/automating-your-workflow-with-gulp)

## 可參考配置

* [CP 值很高的 Gulp](https://www.slideshare.net/yvonne_yu/cp-gulp)
  * [gulp/docs/recipes at master · gulpjs/gulp](https://github.com/gulpjs/gulp/tree/master/docs/recipes)
  * [web-starter-kit/gulpfile.babel.js at master · google/web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)
  * [g0v.tw/gulpfile.ls at master · g0v/g0v.tw](https://github.com/g0v/g0v.tw/blob/master/gulpfile.ls)
  * [Automating your workflow with Gulp.js | 小惡魔 - 電腦技術 - 工作筆記 - AppleBOY](https://blog.wu-boy.com/2014/07/automating-your-workflow-with-gulp-js/)
* [gulp配合vue压缩代码格式化 - 宋宇 - 博客园](https://www.cnblogs.com/webSong/p/7406630.html)
* [alferov/awesome-gulp: A curated list of awesome gulp resources, plugins, and boilerplates for a better development workflow automation - http://alferov.github.io/awesome-gulp](https://github.com/alferov/awesome-gulp)
* [Gulp资料大全：入门、插件、脚手架、包清单 - 知乎](https://zhuanlan.zhihu.com/p/20734615)
* [前端樣板結合Gulp處理流程｜SoarLin's blog](https://soarlin.github.io/2016/12/26/frontend-templates-with-gulp/)

## 工程化演化

* Grunt + RequireJS
* Gulp + Browserify
* webpack

## Webpack

* [關於 Webpack，它是什麼？能夠做什麼？為什麼？怎麼做？— freeCodeCamp 的筆記 - Askie's Coding Life](https://askiebaby.github.io/what-is-webpack/#%E5%BD%B1%E7%89%87%E6%95%99%E5%AD%B8)

## 目錄

第一次整理

| 摘要                    | 內容                                                         |
| ----------------------- | ------------------------------------------------------------ |
| 前言 1                  | 參賽的目的，想獲得什麼                                       |
| Gulp 介紹 1             | 前端工程化的歷史<br />Gulp 的地位<br />升級到 Gulp4 的優點   |
| 升級專案 1              | 幫先前的 side project 升級<br />先測試還能跑                 |
| 砍掉重練 2              | 將 package.json、gulpfile.js 砍掉<br />重新建構 Gulp 環境<br />Console.log<br />* 建立 task |
| 第一個 task：複製檔案 4 | 複製檔案、_variables.scss<br />* src API<br />* dest API<br />* pipe API (node)<br /> |
| 第一個插件：清除暫存 3  | 把 public、tmp 刪掉<br />* 使用插件<br />* gulp-clean 插件的使用與時機 |
| HTML 的處理 6           | HTML 的處理過程<br />* glob<br />* gulp-plumber<br />* gulp-frontMatter<br />* gulp-layout<br />* browserSync |
| HTML 的處理 3           | HTML 的處理過程<br />* gulp-if<br />* gulp-pug               |
| CSS 的處理 3-4          | CSS 的處理過程<br />* sourcemaps <br />* gulp-sass<br />* gulp-postcss |
| vendor JS 的處理 2      | vendor JS 的處理<br />* gulp-concat                          |
| ES6 JS 的處理 3         | ES6 JS 的處理<br />* gulp-babel<br />* gulp-uglify           |
| 圖片壓縮 2              | 圖片壓縮的過程<br />* gulp-imagemin<br />* gulp-if (不確定要擺哪) |
| 本地端伺服器 2          | 建立本地端 server<br />* browerSync                          |
| 監控檔案變動 2          | 監控檔案變動，重整頁面、執行編譯工作<br />* watch<br />* gulp-watch |
| 佈署專案 1              | 佈署專案<br />* gulp-ghPages                                 |
| Gulp 的未來 1           | 前端工程化的現況<br />前端工程化的未來                       |

第二次整理

1. 前言
2. Gulp 定位
3. Gulp 4.0 差異
4. 從升級專案練習 Gulp4.0 (本次鐵人賽目標
5. 一、Gulp4.0 環境建立
   1. 先確認 Gulp3.9.1 還能跑
   2. 建立 Gulp4.0 環境
   3. Gulp4.0 的 task 建立
6. 二、用 Gulp API 複製檔案
   1. Gulp, Undertaker, EventEmitter 的 API
      1. Gulp: src(), dest(), watch()
      2. Undertaker: task(), series(), parrallel()
      3. EventEmitter(stream): pipe()
   2. task
   3. src
   4. dest
7. 三、用套件清除暫存 使用插件的方式
   1. gulp-clean del
8. HTML 的處理
   1. glob
   2. gulp-plumber
   3. gulp-frontMatter
   4. gulp-layout
9. CSS 的處理
   1. sourcemaps 
   2. gulp-sass
   3. gulp-postcss
   4. gulp-minify-css (gulp-clean-css)
10. JS 的處理 vendorjs babel
    1. gulp-concat
    2. gulp-babel
    3. gulp-uglify
11. 圖片的處理
    1. gulp-imagemin
    2. gulp-if
12. 即時更新畫面 本地伺服器、監控檔案變動
    1. browerSync
    2. gulp-watch watch
13. 佈署專案
    1. gulp-ghPages
14. Gulp 的未來