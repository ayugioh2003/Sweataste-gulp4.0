# Gulp4 環境配置

正如 Day2 提到的，這個系列文我想要記錄，將先前的切版專案從 gulp 3.9.1 升級到 gulp 4 的過程。因此在正式建構 gulp 4 環境前，先來說明先前的專案在幹麻吧。

## 先前的專案
![甜點電商首頁示意圖](https://camo.githubusercontent.com/e109de87f365afc49d24440a7c92c39c081c1fe4/68747470733a2f2f692e696d6775722e636f6d2f6a3938386a34732e706e67)

去年（2018）的時候，六角學院舉辦了一系列前端練功活動，其中一關是要[切版切出一個甜點電商](https://www.facebook.com/groups/173311386703334/permalink/247893602578445/)。在裡頭，除了用到有 jQuery 和 bootstrap 等 library 外，也用到 ejs 和 scss 來方便 HTML、CSS 的編寫。以下是專案資料夾的結構。

```
├─public
│  ├─images
│  ├─javascripts
│  └─stylesheets
├─source
│   ├─images
│   ├─javascripts
│   └─stylesheets
│       ├─components
│       ├─helpers
│       └─pages
├─.gitignore
├─gulpfile.js
├─package.json
└─README.md 
```

source 資料夾存放了所有的網頁開發檔案，包含 .html、layout.ejs、.scss、all.js、與各種圖片檔。gulpfile.js 則是主要撰寫 gulp 工作邏輯的地方。public 是透過 gulp 自動生成的資料夾，最後要將專案佈署到網路上時，就會上傳 public 裡面的檔案。

## 來建立 gulp 4 環境吧

因為我想要從頭開始建立 gulp 4 環境，所以就把 gulp 3.9.1 相關的東西砍掉重練吧。砍掉後，資料夾路徑會長得像這樣：

```
├─source
│   ├─images
│   ├─javascripts
│   └─stylesheets
│       ├─components
│       ├─helpers
│       └─pages
├─.gitignore
└─README.md 
```

再來，簡單的記錄從頭建構 gulp 4 環境的流程：

一、根據作業系統，安裝對應的 node.js，並確認安裝版本
```bash
ver # Microsoft Windows [版本 10.0.18362.356]
node -v # v10.16.0
```

二、用 command line 建置環境
```bash
mkdir Sweataste-gulp4.0 # 建立專案的資料夾
cd Sweataste-gulp4.0 # 切進去

npm init # 初始化 package.json
npm install gulp-cli -g # 全域安裝 gulp-cli，讓開發者能透過 cli 來下 gulp 指令
# npm install gulp -g 舊的寫法
# npm rm --global gulp # 刪除先前安裝過的 gulp-cli。因為我先前安裝過，所以要額外刪掉

npm install gulp --save-dev # 安裝 gulp 4 到專案中，讓開發者能用 gulp 4 API 來自訂自動建構 task
```

三、確認環境是否建立成功
最後一步，當然就是確認 gulp 環境有沒有安裝成功了。輸入 `gulp -v` 後，應該能看到 gulp 目前 CLI 的版本，以及在專案內使用的版本。

```bash
gulp -v # 確認 gulp-cli 安裝版本。
# CLI version: 2.2.0
# Local version: 4.0.2
```

明天，就先試著讓 gulp 輸出一個 hello world 範例，來簡單理解 gulp 是怎麼運作的吧。




## 參考資料
官方
- [gulp - npm](https://www.npmjs.com/package/gulp)
- [gulp.js - The streaming build system](https://gulpjs.com/)
- [gulp-cli - npm](https://www.npmjs.com/package/gulp-cli)
- [Node.js](https://nodejs.org/zh-tw/)

參考
* [Sweataste/gulpfile.js at master · ayugioh2003/Sweataste](https://github.com/ayugioh2003/Sweataste/blob/master/gulpfile.js)
* [使用 Gulp 4.0 新的 (CLI) 命令行界面 — 1010Code](https://andy6804tw.github.io/2018/01/23/Gulp-tutorial/)

