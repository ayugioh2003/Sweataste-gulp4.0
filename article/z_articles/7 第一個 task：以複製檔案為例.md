# 第一個 task：以複製檔案為例

上個系列以 hello gulp 為例，示範了要怎麼在 gulp 中定義一個 task，並如何從 CLI 界面執行這些 task。這篇文將定義一個稍微實用一點的 taks：將檔案從 A 地複製到 B 地。

## 將 HTML 檔案們從 source 資料夾複製到 public 資料夾

早期的網頁開發，只要開一個資料夾，在裡面放好 HTML、CSS、JS 檔案，就可以做好一個專案了。但現代的網頁開發，時常會將開發中的 HTML、CSS、JS 檔都先放在 source 資料夾中，之後透過如 gulp、webpack 等建構工具加工後，才將編譯完成的檔案放進 public 資料夾中，然後將 pubic 資料夾中的檔案上傳到網路上，讓使用者能瀏覽該網站。

本文想做一個簡單的複製工作：將 source 資料夾中的所有 .html 檔案，都複製到 public 資料夾中。簡單步驟如下：
1. 定義一個 copyHTML function，並 export 出來，之後就能從 CLI 呼叫該 task
2. 透過 `gulp.src()` API 來取得想複製的檔案路徑
3. 透過 `gulp.dest()` API 將複製的檔案複製到該路徑

```js
import gulp from 'gulp'

export function copyHTML() {
  return gulp.src('./source/**/*.html')
    .pipe(gulp.dest('./public'))
}
```

最後再透過 CLI 指令 `gulp copyHTML` 來呼叫該命令
```bash
gulp copyHTML

[15:50:29] Requiring external module @babel/register
[15:50:41] Using gulpfile D:\Users\Chu\Desktop\鐵人賽：試著把切版專案升級到gulp4吧\Sweataste-gulp4.0\gulpfile.babel.js        
[15:50:41] Starting 'copyHTML'...
[15:50:42] Finished 'copyHTML' after 324 ms
```

就會看到專案目錄下多了 public 資料夾，裡面有剛剛從 source 路徑底下複製過來的 HTML 檔案。
```
├── gulpfile.babel.js
├── package-lock.json
├── package.json
├── public
│   ├── carts.html
│   ├── checkout-1.html
│   ├── checkout-2.html
│   ├── checkout-3.html
│   ├── checkout-4.html
│   ├── index.html
│   ├── page.html
│   ├── product.html
│   ├── register.html
│   └── test.html
├── README.md
└── source
    ├── carts.html
    ├── checkout-1.html
    ├── checkout-2.html
    ├── checkout-3.html
    ├── checkout-4.html
    ├── images
    ├── index.html
    ├── javascripts
    ├── layout.ejs
    ├── page.html
    ├── product.html
    ├── register.html
    ├── stylesheets
    └── test.html
```

## 小結

這是「第一個 task 」系列的第一篇文，談了如何從 A 地複製一個檔案到 B 地。明天將介紹 gulp 3.9.1 時期常用的 3 個 API：task、src、dest、watch。