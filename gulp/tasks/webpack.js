var config        = require('./config');
var gulp          = require('gulp');
var webpack       = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var uglify        = require('gulp-uglify');
var rev           = require('gulp-rev');

gulp.task('webpack', function() {
  return gulp.src([
    webpackConfig.entry.bundle
  ])
  .pipe(webpack(webpackConfig))
  .pipe(uglify())
  .pipe(rev())
  .pipe(gulp.dest(webpackConfig.output.assetsPath))
  .pipe(rev.manifest(config.manifest.dest, config.manifest.opts))
  .pipe(gulp.dest(config.assetsPath))
});
