'use strict';

var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var paths = ['*.js', 'lib/*.js', 'lib/*.js', 'test/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
   .pipe(lint())
   .pipe(lint.format());
});
gulp.task('mocha', function(){
  console.log(__dirname);
  return gulp.src('./test/bitmap-test.js')
  .pipe(mocha());
});

gulp.task('default', ['lint']);
