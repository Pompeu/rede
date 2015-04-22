var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin');   

gulp.task('html-min', function() {
  return gulp.src('app/src/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app/public/views'))
});

gulp.task('html-partials-min', function() {
  return gulp.src('app/src/public/partials/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app/public/partials'))
});

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
    'app/src//bower_components/a0-angular-storage/dist/angular-storage.min.js',
    'app/src/bower_components/angular-jwt/dist/angular-jwt.min.js',
    'app/src/scripts/app.js',    
    'app/src/scripts/controllers/*.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/public/js'))
    .pipe(connect.reload());
});

gulp.task('uglify', function() {
    return gulp.src('app/public/js/all.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/public/js'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('watch',function() {
  gulp.watch('app/src/**/*.js',['scripts']);
  gulp.watch('app/src/**/*.html',['html','html-min' ,'html-partials-min']);
  gulp.watch('app/src/**/*.css',['css']);
})

gulp.task('connect',function() {
  connect.server({
    root:['../rede/app/public/',
    '../rede/app/public/views'],
    port: 8000,
    livereload: true
  })
});

gulp.task('default',
  ['watch','css' ,'scripts','html-min',
  'html-partials-min','html','connect']);