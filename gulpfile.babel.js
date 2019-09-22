// gulpfile.babel.js

import gulp from 'gulp' // ES6 引入模組寫法

// gulp 3.9.1 寫法
// var gulp = require('gulp') // CommonJS 引入模組寫法
gulp.task('hello3', function(cb) { // gulp 3.9.1 的 task 寫法
  console.log('hello gulp 3.9.1')
  cb()
})

// gulp 4.0、CommonJS 寫法
// const gulp = require('gulp') // CommonJS 引入模組寫法
function hello4CommonJS(cb) { // gulp 4 的 task 寫法
  console.log('hello gulp 4.0, CommonJS format' )
  cb();
}
exports.hello4CommonJS = hello4CommonJS // CommonJS 導出模組寫法

// gulp 4.0、ES6 寫法
// import gulp from 'gulp' // ES6 引入模組寫法
export function hello4ES6(cb) { // ES6 導出模組 + gulp 4 的 task 寫法
  console.log('hello gulp 4.0, ES6 format')
  cb()
}