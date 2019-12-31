# 圖片壓縮處理：談 gulp-imagemin

除了 CSS、JS 檔需要壓縮外，圖片因為體積較大，所以更是需要壓縮。圖片壓縮除了用修圖軟體降低畫質外，也可以靠一些線上服務來作到。而在 gulp、webpack 等建構工具在世的現在，當然也有相對應的工具可以使用。在 gulp 中，其中一款就是 gulp-imagemin。

## gulp-imagemin

一、安裝 gulp-imagemin
```
npm install --save-dev gulp-imagemin
```

二、在 gulpfile 以 `$.imagemin()` 來建立一個 task

```js
import gulp from 'gulp'
const $ = require("gulp-load-plugins")()

export function imageMin() {
  return gulp
    .src("./source/images/*")
    .pipe($.imagemin())
    .pipe(gulp.dest("./public/images"))
}
```

三、在 CLI 中呼叫這個 task

呼叫這個 task 後，gulp-imagemin 會跟你說壓縮了多少圖片、以及體積被壓縮了多少。

```bash
> gulp imageMin

[13:00:11] Starting 'imageMin'...
[13:00:18] gulp-imagemin: Minified 17 images (saved 8.42 kB - 5.1%)
[13:00:18] Finished 'imageMin' after 6.74 s
```

## 小結

今天介紹了圖片壓縮的處理。明天會談到，如何在一般開發環境時不壓縮檔案、而是在生產環境時才壓縮檔案，以節省編譯的時間。


## 參考資料

npm
* [gulp-imagemin - npm](https://www.npmjs.com/package/gulp-imagemin)
* [gulp-image - npm](https://www.npmjs.com/package/gulp-image)

其他
* [gulp-imagemin vs gulp-webp vs gulp-tinypng vs gulp-image vs gulp-image-optimization vs gulp-responsive | npm trends](https://www.npmtrends.com/gulp-imagemin-vs-gulp-webp-vs-gulp-tinypng-vs-gulp-image-vs-gulp-image-optimization-vs-gulp-responsive)
* [如何做圖片壓縮？ | Summer。桑莫。夏天](https://cythilya.github.io/2018/08/22/image-compression/)
* [【gulp-imagemin】壓縮圖片 | gulp 學習筆記](http://kejyun.github.io/gulp-learning-notes/plguins/File/Plugins-File-gulp-imagemin.html)
* [Learning Gulp #9 - Easy Image Compression - YouTube](https://www.youtube.com/watch?v=oXxMdT7T9qU&index=8&list=PLLnpHn493BHE2RsdyUNpbiVn-cfuV7Fos)
* [How to minify images with Gulp & gulp-imagemin and boost your site’s performance](https://www.freecodecamp.org/news/how-to-minify-images-with-gulp-gulp-imagemin-and-boost-your-sites-performance-6c226046e08e/)
* [Image Compression Using Gulp and Imagemin | Hackers and Slackers](https://hackersandslackers.com/simple-image-size-optimization-using-imagemin-and-gulp/)
* [best image compression settings (gulp-imagemin)](https://gist.github.com/LoyEgor/e9dba0725b3ddbb8d1a68c91ca5452b5)
* [Using Imagemin with Gulp  |  web.dev](https://web.dev/codelab-imagemin-gulp)
* [Gulp - Optimizing Images - Tutorialspoint](https://www.tutorialspoint.com/gulp/gulp_optimizing_images.htm)
