var config        = require('./config');
var gulp          = require('gulp');
var webpack       = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
  return gulp.src([
    webpackConfig.entry.bundle
  ])
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(webpackConfig.output.assetsPath))
});
