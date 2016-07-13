var autoprefixer = require('gulp-autoprefixer');
var config = require('./gulp.config.json');
var del = require('del');
var gulp = require('gulp');
var rev = require('gulp-rev');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var usemin = require('gulp-usemin');

gulp.task('build', function () {
  runSequence('clean',
    'compile-sass',
    ['usemin', 'images', 'copy-app']);    
});

gulp.task('clean', function() {
    return del([config.dist]);
});

gulp.task('compile-sass', function () {
    return gulp.src(config.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(config.cssout));
});

gulp.task('usemin', function() {
    return gulp.src(config.html)
        .pipe(usemin({
            vendorcss: [ rev() ],
            appcss: [ rev() ],
            libjs: [ rev() ]
        }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('images', function () {
    var dest = config.dist + 'images';

    return gulp
        .src(config.images)
        .pipe(gulp.dest(dest));
});

gulp.task('copy-app', function () {
    var dest = config.dist + 'app';

    return gulp
        .src(config.app)
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function () {
    gulp.watch(config.sass, ['compile-sass']);
});
