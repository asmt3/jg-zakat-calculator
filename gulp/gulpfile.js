var fileinclude = require('gulp-file-include'),
	gulp = require('gulp');
 
gulp.task('fileinclude', function() {
  gulp.src(['templates/standard.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/'));
});