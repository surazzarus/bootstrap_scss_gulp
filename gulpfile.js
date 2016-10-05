var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('styles', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload());
});

gulp.task('connect', function(){
   connect.server({
       livereload: true
   }) ;
});

//Watch task
gulp.task('watch',function() {

    // Watch .scss files
    gulp.watch('scss/**/*.scss',['styles']);
});

gulp.task('default', ['styles', 'watch', 'connect']);
