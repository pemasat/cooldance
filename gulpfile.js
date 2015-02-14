

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// Lint Task
gulp.task('lint', function() {
		return gulp.src('www/js/*.js')
				.pipe(jshint())
				.pipe(jshint.reporter('default'));
});
/*
// Compile Our Sass
gulp.task('sass', function() {
		return gulp.src('scss/*.scss')
			.pipe(sass())
		.pipe(autoprefixer({
				browsers: ["last 5 versions", "> 1%", "ie 10", "ie 11", "ie 9", "ie 8"],
				cascade: true
		}))
			.pipe(gulp.dest('www/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
		return gulp.src('www/js/*.js')
				.pipe(concat('all.js'))
				.pipe(gulp.dest('dist'))
				.pipe(rename('all.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
		gulp.watch('www/js/*.js', ['lint', 'scripts']);
		gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
*/