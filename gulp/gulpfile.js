var fileinclude = require('gulp-file-include'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	gulp = require('gulp');
 
gulp.task('fileinclude', function() {
  gulp.src(['templates/standard.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/'));
});


gulp.task('scripts', function() {
  return gulp.src([
  	'./src/js/vendor/jquery-1.12.0.min.js',
  	'./lib/angular/angular.js',
  	'./lib/angular-sanitize.js',
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
	  	'./lib/angular-bootstrap/ui-bootstrap-tpls.js',
	  	'./src/css/main.css'
	  	])
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('dist/css//'));
});