import gulp from "gulp"
import del from "del"
import autoprefixer from "autoprefixer"
import browserSync from "browser-sync"
import minimist from "minimist"

const $ = require("gulp-load-plugins")()

/*****************************************************
 * 變數 block
 *****************************************************/
var envOptions = {
  string: "env",
  default: { env: "develop" }
}
var options = minimist(process.argv.slice(2), envOptions) // process.argv = [node, gulp.js, arg1, arg2, ...]
var envIsPro = options.env === "production" || options.env == "pro"

export function envNow(cb) {
  console.log(`env now is: ${options.env}, so envIsPro is ${envIsPro}`)
  console.log(options)
  cb()
}

/*****************************************************
 * Hello gulp block
 *****************************************************/
gulp.task("hello3", function(cb) {
  console.log("hello gulp 3.9.1")
  cb()
})

function hello4CommonJS(cb) {
  console.log("hello gulp 4.0, CommonJS format")
  cb()
}
exports.hello4CommonJS = hello4CommonJS

export function hello4ES6(cb) {
  console.log("hello gulp 4.0, ES6 format")
  cb()
}

/*****************************************************
 * 複製檔案 block
 *****************************************************/
export function copyHTML() {
  return gulp.src("./source/**/*.html").pipe(gulp.dest("./public"))
}

export function cpBsVar() {
  return gulp
    .src("./node_module/bootstrap/scss/_variables.scss")
    .pipe(gulp.dest(".source/stylesheets/hellper/"))
}

export function copy() {
  return gulp
    .src([
      "./source/**/**",
      "!source/javascripts/**/**",
      "!source/stylesheets/**/**",
      "!source/**/*.ejs",
      "!source/**/*.html"
    ])
    .pipe(gulp.dest("./public"))
}

/*****************************************************
 * 清除暫存 block
 *****************************************************/
export function clean() {
  return del(["./public", "./.tmp"])
}

/*****************************************************
 * HTML 處理 block
 *****************************************************/
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
    .pipe($.if(!envIsPro, browserSync.stream()))
}

/*****************************************************
 * CSS 處理 block
 *****************************************************/
export function sass() {
  // PostCSS AutoPrefixer
  // const processors = [
  //   autoprefixer({
  //     browsers: ["last 5 version"]
  //   })
  // ];
  const processors = [autoprefixer()]

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
    .pipe($.if(envIsPro, $.cleanCss()))
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest("./public/stylesheets"))
    .pipe($.if(!envIsPro, browserSync.stream()))
}

/*****************************************************
 *  JS 處理 block
 *****************************************************/
export function vendorJS() {
  return gulp
    .src([
      "./node_modules/jquery/dist/jquery.slim.min.js",
      "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ])
    .pipe($.concat("vendor.js"))
    .pipe(gulp.dest("./public/javascripts"))
}

export function babel() {
  return gulp
    .src("./source/javascripts/**/*.js")
    .pipe($.sourcemaps.init())
    .pipe(
      $.babel({
        presets: ["@babel/env"]
      })
    )
    .pipe($.concat("all.js"))
    .pipe(
      $.if(
        envIsPro,
        $.uglify({
          compress: {
            drop_console: true
          }
        })
      )
    )
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest("./public/javascripts"))
    .pipe($.if(!envIsPro, browserSync.stream()))
}

/*****************************************************
 *  圖片處理 block
 *****************************************************/
export function imageMin(cb) {
  return gulp
    .src("./source/images/*")
    .pipe($.if(envIsPro, $.imagemin()))
    .pipe(gulp.dest("./public/images"))
    .pipe($.if(envIsPro, browserSync.stream()))
  cb()
}

/*****************************************************
 *  實時預覽 block
 *****************************************************/
export function browser() {
  browserSync.init({
    server: {
      baseDir: "./public",
      reloadDebounce: 2000
    }
  })
}

export function watch() {
  gulp.watch(["./source/**/*.html", "./source/**/*.ejs"], ejs)
  // gulp.watch(['./source/**/*.jade', './source/**/*.pug'], ['jade'])
  gulp.watch(
    ["./source/stylesheets/**/*.sass", "./source/stylesheets/**/*.scss"],
    sass
  )
  gulp.watch("./source/javascripts/**/*.js", babel)
  console.log("watching file ~")
}

/*****************************************************
 *  指令 block
 *****************************************************/
exports.default = gulp.parallel(
  imageMin,
  babel,
  vendorJS,
  sass,
  ejs,
  browser,
  watch
)

exports.build = gulp.series(
  gulp.series(clean, copy),
  gulp.parallel(vendorJS, babel, sass, ejs, imageMin)
)

// = gulp build --env production
exports.buildPro = gulp.series(
  cb => {
    envIsPro = true
    cb()
  },
  gulp.series(clean, copy),
  gulp.parallel(vendorJS, babel, sass, ejs, imageMin)
)

function deploy() {
  return gulp.src("./public/**/*").pipe($.ghPages())
}
exports.deploy = deploy
