var autoprefixer = require('gulp-autoprefixer');
var config = require('./gulp.config.json');
var gulp = require('gulp');
var sass = require('gulp-sass');

/**
 * Compile SASS
 * @return {Stream}
 */
gulp.task('compile-sass', function () {
    return gulp.src(config.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(config.cssout));
});

gulp.task('build', ['compile-sass']);

/**
 * Watch files
 */
gulp.task('watch', function () {
    gulp.watch(config.sass, ['compile-sass']);
});
