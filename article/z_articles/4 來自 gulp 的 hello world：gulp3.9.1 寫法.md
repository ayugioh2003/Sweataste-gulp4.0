# 來自 gulp 的 hello world：gulp 3.9.1 寫法

gulp 作為一種前端的建構工具，用途當然就是用指令呼叫 task、以及將 task 自動化，因此在 gulp 內會設定很多task。這篇文將建立一個簡單的 task 範例：hello gulp。不過這裡先用 gulp 3.9.1 版本的寫法來設定 task。

## 來個 hello gulp 吧

一、在專案內建立 gulpfile.js

資料夾結構變成醬
```
├─source
│   ├─images
│   ├─javascripts
│   └─stylesheets
│       ├─components
│       ├─helpers
│       └─pages
├─.gitignore
├─gulpfile.js
└─README.md 
```

二、在 gulpfile.js 內設定一個 hello3 task 
```js
// gulp 3.9.1 寫法
// 在 CLI 輸入 gulp hello3，會印出 hello gulp 3.9.1

var gulp = require('gulp')  // CommonJS 引入模組寫法。引用 gulp 模組

gulp.task('hello3', function(cb) { // gulp 3.9.1 的 task 寫法。設定 hello3 這個 task
  console.log('hello gulp 3.9.1')
  cb()
})
```

三、在 CLI 操作 gulp 3.9.1

透過 CLI 界面輸入 `gulp hello3`，就能得到這個 task 印出的結果囉

```bash
gulp hello3
# hello gulp 3.9.1
```

## 小結

今天是 hello gulp 篇的第一篇。明天將會談 gulp 4 的 task 寫法。

## 參考資料

官方
* [入門指南 - gulp.js 中文文檔 | gulp.js 中文網](https://v3.gulpjs.com.cn/docs/getting-started/)
