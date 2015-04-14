var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css');   
 
gulp.task('css', function() {
  return gulp.src([
    'app/src/stylesheets/style.css',
    'app/src/bower_components/angular-material/angular-material.min.css'
  ])
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('app/public/css'))
    .pipe(connect.reload())
});

gulp.task('scripts', function() {
  return gulp.src([
    'app/src/bower_components/angular/angular.min.js',
    'app/src/bower_components/angular-route/angular-route.min.js',
    'app/src/bower_components/angular-animate/angular-animate.min.js',
    'app/src/bower_components/angular-aria/angular-aria.min.js',
    'app/src/bower_components/angular-material/angular-material.min.js',
    'app/src/bower_components/hammerjs/hammer.min.js',
    'app/src/scripts/app.js',    
    'app/src/scripts/controllers/*.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/public/js'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('app/views/index.html')
    .pipe(connect.reload());
});

gulp.task('watch',function() {
  gulp.watch('app/public/scripts/**/*.js',['scripts']);
  gulp.watch('app/views/*.html',['html']);
})

/*gulp.task('connect',function() {
  connect.server({
    root:['../pompeu.github.io'],
    port: 8000,
    livereload: true
  })
});*/

gulp.task('default',['css' ,'scripts','html','watch'])