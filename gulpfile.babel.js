import gulp from 'gulp'

/*****************************************************
 * Hello gulp block
 *****************************************************/
gulp.task('hello3', function(cb){
  console.log('hello gulp 3.9.1')
  cb()
})

function hello4CommonJS(cb) {
  console.log('hello gulp 4.0, CommonJS format' )
  cb();
}
exports.hello4CommonJS = hello4CommonJS

export function hello4ES6(cb) {
  console.log('hello gulp 4.0, ES6 format')
  cb()
}

/*****************************************************
 * 複製檔案 block
 *****************************************************/
export function copyHTML() {
  return gulp.src('./source/**/*.html')
    .pipe(gulp.dest('./public'))
}

export function cpBsVar() {
  return gulp.src('./node_module/bootstrap/scss/_variables.scss')
    .pipe(gulp.dest('.source/stylesheets/hellper/'))
}
