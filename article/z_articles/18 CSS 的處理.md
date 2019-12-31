# CSS 的處理

談完了 HTML 的處理，接下來要談 CSS 的處理了。在這個專案中，除了會用到 SCSS 來撰寫 CSS 外，也會另外引入 BS4 的 SCSS 來幫助切版。

一、首先下載處理 CSS 時需要的套件，以及 Bootstrap4
```bash
npm install gulp-sourcemaps --save-dev # 產生 source map
npm install node-sass gulp-sass --save-dev # 將 sass bang 成 css
npm install gulp-postcss --save-dev # 將 CSS 做更進一步的轉換。如使用未來的 CSS、加瀏覽器前綴詞等等
npm install autoprefixer --save-dev # 為 CSS 加入瀏覽器前綴詞
npm install gulp-clean-css --save-dev # 壓縮 CSS 檔案，減少檔案容量

npm install bootstrap
```

二、在 gulpfile 中建立 scss task
```js
import gulp from "gulp";
import autoprefixer from "autoprefixer";

const $ = require("gulp-load-plugins")();


/*****************************************************
 * CSS 處理 block
 *****************************************************/
export function scss() {
  // PostCSS AutoPrefixer
  // const processors = [
  //   autoprefixer({
  //     browsers: ["last 5 version"]
  //   })
  // ];
  const processors = [ 
    autoprefixer()
  ];

  return gulp
    .src(["./source/stylesheets/**/*.sass", "./source/stylesheets/**/*.scss"])
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass({
        outputStyle: "nested",
        includePaths: ["./node_modules/bootstrap/scss"]
      }).on("error", $.sass.logError)
    )
    .pipe($.postcss(processors))
    .pipe($.cleanCSS())
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest("./public/stylesheets"));
}
```

三、在根目錄新增 `.browserlistrc` 檔案，並在裡面貼上以下文字
```
# Browsers that we support

last 5 version
> 1%
IE 10 # sorry
```

四、在 CLI 界面執行 scss task
```bash
> gulp scss

[15:59:14] Requiring external module @babel/register
[15:59:32] Using gulpfile D:\Users\Chu\Desktop\鐵人賽：試著把切版專案升級到gulp4吧\Sweataste-gulp4.0\gulpfile.babel.js
[15:59:32] Starting 'scss'...
[15:59:37] Finished 'scss' after 5.06 s
```

五、最後就可以在 public 資料夾底下看到 stylesheets 資料夾，裡面有 .css 與 .css.map 檔案。

```
├── gulpfile.babel.js
├── package.json     
├── public/
│   └── stylesheets/
│       ├── all.css
│       └── all.css.map
└── source/
    └── stylesheets/
        ├── all.scss
        ├── components/
        ├── helpers/
        └── pages/
```


## 小結

今天是「CSS 的處理」的第一天，展示了在 gulp 處理 CSS 的 task 設定。明天將會談 sass 是什麼，以及如何透過 gulp-sass 將 sass/scss 轉成瀏覽器看得懂的 CSS。  

## 參考資料

* [Transpile and minify Javascript, HTML and CSS using Gulp 4 - Goede Site](https://goede.site/transpile-and-minify-javascript-html-and-css-using-gulp-4)
* [Setting up gulp 4 for automatic Sass compilation and CSS injection - Goede Site](https://goede.site/setting-up-gulp-4-for-automatic-sass-compilation-and-css-injection)
