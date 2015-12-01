'use strict';

const gulp      = require('./heroku_biuld.js');
const uglify    = require('gulp-uglify');
const concat    = require('gulp-concat');
const connect   = require('gulp-connect');
const minifyCSS = require('gulp-minify-css');
const htmlmin   = require('gulp-htmlmin');
const imagemin  = require('gulp-imagemin');
const pngquant  = require('imagemin-pngquant');
const paths     = require('./gulp.paths');

gulp.task('img', function () {
  return gulp.src('app/src/image/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('app/public/image/'));
});

gulp.task('css', function() {
  return gulp.src(paths.css)
  .pipe(concat('all.min.css'))
  .pipe(minifyCSS({keepBreaks:true}))
  .pipe(gulp.dest('app/public/css'))
  .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src(paths.js)
  .pipe(concat('all.min.js'))
  .pipe(gulp.dest('app/public/js'))
  .pipe(connect.reload());
});

gulp.task('scriptprod', function() {
  return gulp.src(paths.js)
  .pipe(uglify())
  .pipe(concat('all.min.js'))
  .pipe(gulp.dest('app/public/js'));
});


gulp.task('uglify', () =>
  gulp.src(paths.js)
  .pipe(uglify())
  .pipe(gulp.dest('app/public/js')));

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
  .pipe(connect.reload());
});

gulp.task('html-min', function() {
  return gulp.src('app/src/views/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('app/public/views'))
  .pipe(connect.reload());
});

gulp.task('directives', () => {
  return gulp.src('app/src/scripts/directives/**/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('app/public/js'))
  .pipe(connect.reload());
});

gulp.task('html-partials-min', function() {
  return gulp.src('app/src/public/partials/**/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('app/public/partials'))
  .pipe(connect.reload());
});

gulp.task('watch',function() {
  gulp.watch('app/src/**/*.js',['scripts']);
  gulp.watch('app/src/**/*.html',['html','html-min' ,'html-partials-min','directives']);
  gulp.watch('app/src/**/*.css',['css']);
});

gulp.task('serve',function() {
  connect.server({
    root       : ['../rede/app/public/','../rede/app/public/views'],
    port       : 8000,
    livereload : true
  });
});

gulp.task('prod',paths.prodTaks );
gulp.task('dev',paths.devTaks);
gulp.task('default',paths.defultTaks);
