var fileinclude = require('gulp-file-include'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	gulp = require('gulp'),
  gulpsync = require('gulp-sync')(gulp),
	fs = require('fs'),
	s3 = require("gulp-s3");


// Standard build
gulp.task('default', [
	'standard-container', 
  'standard-app', 
	'umbraco-container',
  'umbraco-app',
  'copyimages',
	'scripts',
	'styles'
]);

// Build and publish to S3
gulp.task('publish', gulpsync.sync(['default', 'upload']))


// Watch task
gulp.task('watch', function () {
  gulp.watch(['src/**'], ['default']);
});



// just upload
gulp.task('upload', function() {

  console.log('Uploading to S3');
  aws = JSON.parse(fs.readFileSync('./aws.json'));

  return gulp.src('./dist/**')
        .pipe(s3(aws));

});

// make the standalone app with an HTML wrapper
gulp.task('standard-container', function() {
  return gulp.src(['./src/templates/standard-container.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
});

// make the container to be put into Umbraco
gulp.task('umbraco-container', function() {
  return gulp.src(['./src/templates/umbraco-container.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
});

// make the app partial that imported by Angular
gulp.task('standard-app', function() {
  return gulp.src(['./src/templates/standard-app.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('umbraco-app', function() {
  return gulp.src(['./src/templates/umbraco-app.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
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