# 35 佈署靜態網頁到 github pages

當網頁已經開發完成了，通常會想找個網路空間把網頁放上去，讓其他人輸入網址後就能在遠方看到網頁。網路雖然是自由的，但卻不是免費的，許多的網路空間都需要花錢錢才能使用。

不過，github 有提供一個免費託管靜態網頁的服務：github pages。透過這個服務，就能免費地將靜態網頁放上去，不用擔心伺服器費用的問題惹。


## github pages 的操作過程

github pages 可以直接透過網頁、git 命令就能操作，先了解 github pages 的操作方式，就更能了解 gulp 的自動化流程該怎麼與 github pages 連動。

不過這邊就只列出簡要的步驟惹。詳細的操作步驟可 google 或參考置底的資料

1. 在 Github 網頁中，建立一個專案(repository)
2. 打開 terminal
3. 將專案複製下來 `git clone xxx.git`
4. 修改一些檔案
5. 將檔案推上 github
```bash
# CLI
git add --all
git commit -m "Initial commit"
git push -u origin master
```
6. 在專案的 Setting 中調整 github pages 服務要顯示的網頁資料是在哪個 branch 中


## 搭配 gulp-gh-pages 套件

先安裝這個套件
```bash
# CLI
npm install --save-dev gulp-gh-pages
```

在 gulpfile 加入語法
```js
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
 
function deploy() {
  return gulp.src("./public/**/*").pipe($.ghPages())
}
exports.deploy = deploy
```

之後就能在 CLI 中下指令，將編譯好的網頁推到 github pages 上，讓大家都能看到網頁了

```bash
gulp deploy
```


## 其他

雖然這篇介紹到如何使用 gulp-gh-pages，將編譯好的靜態網頁佈署到 github pages，但這邊想留點提醒給想要嘗試的人：

一、這個套件沒有更新的很頻繁。github 上的最新更新是 2018 年，而 npm 上的最新更新則是 2015 年。雖然 gulp 也沒有什麼在更新啦(?)，但有點擔心當出現 bug 時，這個套件沒辦法即時處理掉。(而且該套件的 repo 沒有看到能反應 issue 的地方 @@)

二、我前幾個月嘗試使用該套件時失敗了。我不太確定原因是什麼，不曉得是不是該套件不支援 gulp4、或是不支援佈署到自己的私人專案。

因此若想省時間使用這個套件之前，最好還是先跑過 git CLI 的流程，除了更了解佈署到 github pages 的原理外，也能當作是該套件失效時的一個備案。


## 小結

今天談到了如何用 gulp-gh-pages，將編譯好的靜態網頁佈署到 github pages 上。明天將會講完賽心得。


## 參考資料

* [這是在講 Gulp 不是飲料是任務自動化工具這件事：GitHub Page 篇 | Welcome.Web.World](https://hsiangfeng.github.io/gulp/20190613/2745753059/)
* [GitHub Pages | Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.](https://pages.github.com/)