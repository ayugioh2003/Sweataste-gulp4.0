import gulp from "gulp"
import del from "del"
import autoprefixer from "autoprefixer"

const $ = require("gulp-load-plugins")()

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
  gulp
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
}

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
    .pipe($.cleanCss())
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest("./public/stylesheets"))
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
      $.uglify({
        compress: {
          drop_console: true
        }
      })
    )
    .pipe($.sourcemaps.write("."))
    .pipe(gulp.dest("./public/javascripts"))
}

/*****************************************************
 *  圖片處理 block
 *****************************************************/
export function imageMin(cb) {
  gulp
    .src("./source/images/*")
    .pipe($.imagemin())
    .pipe(gulp.dest("./public/images"))
  cb()
}
