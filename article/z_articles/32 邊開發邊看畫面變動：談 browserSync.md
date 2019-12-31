# 邊開發邊看畫面變動：談 browserSync

前端開發時除了看程式碼外，當然也會想看到目前的界面長得怎樣以便調整：即時的畫面回饋，能讓開發更方便。而 browserSync 就是一個這樣的東西：建立起一個暫時性的開發用伺服器。搭配 gulp 使用，就能達成檔案修改時，browserSnyc 會自動重整畫面，讓開發者能在瀏覽器上即時看到修改後的畫面。

## browserSync

browserSync 這個套件有很多能搭配使用的方式。在官網上，除了原生的 API 外，也有支援 Gulp、Grunt、以及 Command line。先來個 Command line 的例子來熟悉一下好了

```bash
# CLI
npm install -g browser-sync # 在全域環境安裝
cd public # 切換到檔案已編譯好的資料夾
browser-sync start --server # 開啟暫時用的開發伺服器
```

## browserSync 搭配 gulp 使用

印象中有 gulp 生態系中沒有 browser-sync 的相依套件，所以直接將 browserSync 整合到 gulpfile 中就好。以下是簡單的整合步驟說明


### 一、一開始，將 browser-sync 安裝到專案中
```bash
# CLI
npm install browser-sync gulp --save-dev
```

### 二、在 gulpfile 中整合 browser-sync

這樣在 gulp CLI 中呼叫 `gulp brwoser`，就能開啟一個伺服器。打開對應的網址，就能看到即時畫面。對應的網址會出現在 browserSync 提供的 CLI 訊息中，通常預設是 `localhost:3000` 的樣子

```js
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
export function browser() {
  browserSync.init({
    server: {
      baseDir: "./public",
    }
  })
}
```

### 三、在檔案修改時，即時重整畫面
光叫出一個伺服器是不夠的；因為預設的設定，不會讓網頁畫面隨著開發檔案的修改而即時變動。因此需要在監控到檔案有變動的時候，重整網頁畫面，這樣瀏覽器才能抓到更新後的資料重新渲染。

```js
export function ejs() {
  return gulp
    .src(["./source/**/*.ejs", "./source/**/*.html"])
    .pipe($.frontMatter())
    .pipe(
      $.layout(file => {
        return file.frontMatter
      })
    )
    .pipe(gulp.dest("./public"))
    .pipe(browserSync.stream())  // 監控到檔案變動後，執行完編譯工作，最後重整網頁
}
```

## 小結

在昨天，提到了如何用 `gulp.watch()` 來監聽檔案的變動，以便執行對應的編譯工作。今天則談到，如何用 browser-sync 套件架一個暫時用的開發伺服器來檢視目前網頁畫面，並在檔案變動時重整畫面。

但，目前 `watch()` 與 `browser()` 這兩個在專案中自訂好的指令是分離的，需要在 CLI 分別輸入後才能達到邊開發邊看畫面變動的需求，很不方便。明天將會提到如何把這兩個指令，以及過去建立好的指令整合在一起，讓開發者能夠一鍵預覽目前開發網頁的畫面。



## 參考資料

官網
* https://www.browsersync.io/
* https://www.npmjs.com/package/browser-sync

其他
* [這是在講 Gulp 不是飲料是任務自動化工具這件事：瀏覽器同步顯示 (browser-sync) | Welcome.Web.World](https://hsiangfeng.github.io/gulp/20190611/1422913585/)
* [Browsersync + Gulp.js](https://www.browsersync.io/docs/gulp)
* [【browser-sync】瀏覽器同步檢視・gulp 學習筆記](https://kejyuntw.gitbooks.io/gulp-learning-notes/plguins/Tool/Plugins-Tool-browser-sync.html)
* [[Tool]使用BrowserSync自動刷新頁面 | 攻城獅跳火圈 - 點部落](https://dotblogs.com.tw/lapland/2015/09/08/153315)