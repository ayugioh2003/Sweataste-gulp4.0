# CSS 的處理：談 sourcemap 與 gulp-sourcemaps

還記得我一開始學寫網頁的與 JS 的時候，就是在編輯器如 Sublime、VSCode 上把 HTML 與 JS 寫好，然後點擊 index.html 檔，看網頁有沒有如預期的正常運作、動態效果有沒有出來。後來漸漸的才知道，瀏覽器中有 Devtools 這種東西，能夠方便開發者測試程式碼。

而 devtools 的存在，與 sourcemap 的誕生有很大的關係。


## sourcemap

從 2005 年起，ajax 的概念漸為人知後，網頁能開發的應用複雜程度越來越高，JS 的撰寫也就開始愈趨複雜。2009 年，nodejs 項目誕生，JS 也開始往後端進攻，許多專案中的 JS 檔都會被加工過才上生產環境。例如，先用 CoffeeScript 撰寫，之後將 coffeescript 轉成瀏覽器可讀的 JS 檔，最後用 uglifyjs 套件將 JS 壓縮，減小體積。

這時，被加工過的程式碼會有一個問題：最原先的程式碼（如 CoffeeScript），與最後轉換、壓縮過的 JS 檔，是完全不一樣的。當這些被處理過程式碼在瀏覽器運行中出錯時，開發者沒辦法找到錯誤在哪，因為瀏覽器不曉得原來的程式碼長怎樣，沒辦法提供是原始碼中的哪行出錯的資訊。

於是在 2011 年，Firefox 與 Google 的工程師共同推動了 sourcemap 規範。根據 firefox 工程師的說法，sourcemap 一開始就是想解決 CoffeeScript 與 uglifyjs 的議題，即沒辦法 debug 編譯後的 JS。

他從 JVM、Clojure 項目中尋找靈感。Clojure 是 Lisp 語言的擴充版，Clojure 決定讓它跑在 JVM 虛擬機上，這樣偏好 Lisp 風格的開發者，就能用 Clojure 來寫 Java 相關的應用。

吸取了 JVM、Clojure 的經驗後，他決定採用 sourcemap 來記錄原始碼的位置資訊。也就是在轉換 JS 碼的過程中，另外新增一個 .map 檔案記錄原始碼位置資訊，這樣將轉換過的 JS 碼搭配這個 .map 檔後，就能還原成原來的程式碼。約在 2012、13 年間，Firefox 與 Chrome 瀏覽器的 devtool 開始支援解析 sourcemap，這樣發生錯誤時，就能知道來源是在原始碼的那一行。像 jQuery 1.9 版項目就在 2013 年加入了 sourcemap。


## gulp-sourcemaps

sourcemap 發展至今，也能記錄從 SASS 轉換到 CSS 的位置資訊，而 gulp 也有 gulp-sourcemaps 來處理。用法也算簡單，在 `gulp.scr()` 後面，接一個 `pipe(sourcemaps.init())` 表示開始記錄原始碼 sourcemap。中間可以接幾個 pipe 處理原始碼。等到轉碼過程都完畢後，就可以透過 `.pipe(sourcemaps.write(.)` 來將原始碼資訊都記錄到 .map 檔中。

如此，在瀏覽器上發現錯誤時，就能夠知道是原始碼中的那一行造成的。


```js
// Day19 處理 CSS 的部份程式碼
  return gulp
    .src(["./source/stylesheets/**/*.sass", "./source/stylesheets/**/*.scss"])
    .pipe($.sourcemaps.init()) // 開始記錄 sourcemap
    .pipe(
      $.sass({
        outputStyle: "nested",
        includePaths: ["./node_modules/bootstrap/scss"]
      }).on("error", $.sass.logError)
    )
    .pipe($.postcss(processors))
    .pipe($.cleanCSS())
    .pipe($.sourcemaps.write(".")) // 新增 .map，並將原始碼位置資訊都寫進 .map 裡
    .pipe(gulp.dest("./public/stylesheets"));
```

## 小結

今天是「CSS 的處理」系列的第六天，介紹了 sourcemap 是什麼與如何和 gulp 流程結合。明天開始將進入 JS 的處理系列。


## 參考資料

* [gulpjs/vinyl-fs: Vinyl adapter for the file system.](https://github.com/gulpjs/vinyl-fs#optionssourcemaps)
* [gulp-sourcemaps - npm](https://www.npmjs.com/package/gulp-sourcemaps)
* [source-map - npm](https://www.npmjs.com/package/source-map)
* [Source Map Revision 3 Proposal - Google 文件](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit)
* [Compiling to JavaScript, and Debugging with Source Maps - Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2013/05/compiling-to-javascript-and-debugging-with-source-maps/)
* [dest() · gulp.js 中文文档](https://www.gulpjs.com.cn/docs/api/dest/#sourcemaps)

npm
* [gulp-sourcemaps - npm](https://www.npmjs.com/package/gulp-sourcemaps)
* [css - npm](https://www.npmjs.com/package/css)
* [source-map-support - npm](https://www.npmjs.com/package/source-map-support)
* [source-map - npm](https://www.npmjs.com/package/source-map)

其他
* [Node.js 調試指南 - Source Map - Golang 中文社區 - 和地鼠們分享你的知識、經驗和見解](https://m.golang123.com/book/18?chapterID=556)
* [前端工程師不可不知的 Source Maps 應用技巧](https://www.slideshare.net/WillHuangTW/must-known-source-maps-skills)
* [Introduction to JavaScript Source Maps - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
* [YouTube](https://www.youtube.com/watch?v=2aQw1dSIYko)
* [SourceMaps in Chrome - YouTube](https://www.youtube.com/watch?v=-xJl22Kvgjg)
* [mozilla/source-map: Consume and generate source maps.](https://github.com/mozilla/source-map/)
* [Use a source map - Firefox Developer Tools | MDN](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)
* [Enabling Source Maps in Chrome](https://www.dannycroft.co.uk/enabling-source-maps-in-chrome/)
* [Source Map 入門教程 | Fundebug 博客](https://blog.fundebug.com/2017/03/13/sourcemap-tutorial/)
* [生成 Source Map・Fundebug 文檔](https://docs.fundebug.com/notifier/javascript/sourcemap/generate/)
* [JavaScript Source Map 詳解 - 阮一峰的網絡日志](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
* [BASE64 VLQ 編碼規則 | Allen.M 成長的路](https://web.archive.org/web/20130102060508/http://blog.allenm.me/2012/12/base64-vlq-encoding/)
* [打破砂鍋問到底：詳解 Webpack 中的 sourcemap - 教練，我想寫前端 - SegmentFault 思否](https://segmentfault.com/a/1190000008315937)
* [前端構建：Source Maps 詳解 - ^_^ 肥仔 John - 博客園](https://www.cnblogs.com/fsjohnhuang/p/4208566.html)
* [[譯] 源代碼映射（Source Map）簡介 - 掘金](https://juejin.im/post/5bd65e1ae51d457aa071feaa)
* [使用 source map - Firefox 開發者工具 | MDN](https://developer.mozilla.org/zh-CN/docs/Tools/Debugger/How_to/Use_a_source_map)
* [source map 的原理探究 - 劉哇勇 - 博客園](https://www.cnblogs.com/Wayou/p/understanding_frontend_source_map.html)
* [Source Maps under the hood – VLQ, Base64 and Yoda – David Nissimoff's blog](https://blogs.msdn.microsoft.com/davidni/2016/03/14/source-maps-under-the-hood-vlq-base64-and-yoda/#comment-626)
* [devtool](https://webpack.docschina.org/configuration/devtool/)
* [An Introduction to Source Maps | Treehouse Blog](https://blog.teamtreehouse.com/introduction-source-maps)
* [Node.js 中 source map 使用問題總結 - 知乎](https://zhuanlan.zhihu.com/p/26267678)
* [Debug Your Node.js Projects with Source Maps | Product Blog • Sentry](https://blog.sentry.io/2019/02/20/debug-node-source-maps)
