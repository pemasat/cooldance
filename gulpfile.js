

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');
var copy = require('gulp-copy');

// Lint Task
/*
gulp.task('lint', function() {
		return gulp.src('www/js/*.js')
				.pipe(jshint())
				.pipe(jshint.reporter('default'));
});

*/

gulp.task('copyFromBowerLib', function () {
	gulp.src([
		'bower_components/normalize.css/normalize.css',
		'bower_components/jquery/dist/jquery.js'
	])
	.pipe(gulp.dest('./'));
});


gulp.task('less', function () {
  gulp.src('./elements/**/*.less')
	.pipe(less({
	  paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(autoprefixer({
		browsers: ["last 3 versions", "> 2%", "ie 10", "ie 11", "ie 9"],
		cascade: true
	}))
	.pipe(gulp.dest('./elements/'));

  gulp.src('./layout/**/*.less')
	.pipe(less({
	  paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(autoprefixer({
		browsers: ["last 3 versions", "> 2%", "ie 10", "ie 11", "ie 9"],
		cascade: true
	}))
	.pipe(gulp.dest('./layout/'));


  gulp.src('typo.less')
	.pipe(less({
	  paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(autoprefixer({
		browsers: ["last 3 versions", "> 2%", "ie 10", "ie 11", "ie 9"],
		cascade: true
	}))
	.pipe(gulp.dest('./'));

});


gulp.task('concat', function () {
  gulp.src(['elements/**/*.css', 'layout/**/*.css'])
	.pipe(concat("main.css"))
	.pipe(gulp.dest('dist/'));
});

/*

// Concatenate & Minify JS
gulp.task('scripts', function() {
		return gulp.src('www/js/*.js')
				.pipe(concat('all.js'))
				.pipe(gulp.dest('dist'))
				.pipe(rename('all.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest('dist'));
});
*/

// Watch Files For Changes
gulp.task('watch', function() {
		// gulp.watch('www/js/*.js', ['lint', 'scripts']);
		gulp.watch([
			'./elements/**/*.less',
			'./layout/**/*.less',
			'./*.less'
		], ['less', 'concat']);
});

// Default Task
gulp.task('default', ['less', 'concat', 'watch']);
