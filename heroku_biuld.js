'use strict';

const gulp = require('gulp');

gulp.task('app', () => {
	return gulp.src([
		'./app/public/**/*'
	]).pipe(gulp.dest('../heroku-rede/app/public'));
});

gulp.task('controllers', () => {
	return gulp.src([
		'./controllers/**/*'
	]).pipe(gulp.dest('../heroku-rede/controllers/'));
});

gulp.task('middlewares', () => {
	return gulp.src([
		'./middlewares/**/*'
	]).pipe(gulp.dest('../heroku-rede/middlewares/'));
});

gulp.task('models', () => {
	return gulp.src([
		'./models/**/*'
	]).pipe(gulp.dest('../heroku-rede/models/'));
});

gulp.task('routes', () => {
	return gulp.src([
		'./routes/**/*'
	]).pipe(gulp.dest('../heroku-rede/routes/'));
});

gulp.task('configs', () => {
	return gulp.src([
		'./configs/**/*'
	]).pipe(gulp.dest('../heroku-rede/configs/'));
});

gulp.task('plugins', () => {
	return gulp.src([
		'./plugins/**/*'
	]).pipe(gulp.dest('../heroku-rede/plugins/'));
});

gulp.task('bin', () => {
	return gulp.src([
		'./bin/**/*'
	]).pipe(gulp.dest('../heroku-rede/bin/'));
});

gulp.task('main', () => {
	return gulp.src([
		'./app.js',
		'./package.json'
	]).pipe(gulp.dest('../heroku-rede/'));
});


let tasks = Object.keys(gulp.tasks).map(key => key);

gulp.task('build',tasks);

module.exports = gulp;
