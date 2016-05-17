var fileinclude = require('gulp-file-include'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	gulp = require('gulp'),
	fs = require('fs'),
	s3 = require("gulp-s3");



gulp.task('default', [
	'makestandard',
	'copyimages',
	'makeumbraco',
	'scripts',
	'styles',
	'upload'
]);

gulp.task('upload', function() {
	aws = JSON.parse(fs.readFileSync('./aws.json'));

	return gulp.src('./dist/**')
		    .pipe(s3(aws));

});
 
gulp.task('makestandard', function() {
  return gulp.src(['./src/templates/tpl-standard.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/standard.html'));
});

gulp.task('makeumbraco', function() {
  return gulp.src(['./src/templates/tpl-umbraco.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/umbraco.html'));
});

gulp.task('copyimages', function() {
   return gulp.src('./src/img/*')
   			.pipe(gulp.dest('./dist/img/'));
});

gulp.task('scripts', function() {
  return gulp.src([
  	// './lib/angular/angular.js',
  	// './lib/angular-bootstrap/ui-bootstrap-tpls.js',
  	// './lib/angular-sanitize/angular-sanitize.js',
  	'./src/js/config.js',
  	'./src/js/main.js', 
  	'./src/js/controllers/zakatController.js']
  )
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('styles', function () {
  return gulp.src([
	  	'./src/css/normalize.css',
	  	'./lib/bootstrap/dist/css/bootstrap.css',
	  	'./src/css/main.css'
	  	])
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('dist/css/'));
});