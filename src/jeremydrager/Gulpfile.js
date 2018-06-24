/// <binding BeforeBuild='_default' ProjectOpened='watch' />

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    gulpIgnore = require('gulp-ignore'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    partials = require('gulp-ng-html2js'),
    server = lr();



var condition = './scripts/lib/*.js';

// Sass
gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('wwwroot/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(livereload(server))
        .pipe(gulp.dest('wwwroot/css'));
});

gulp.task('fonts', function () {
    return gulp.src('fonts/**')
     .pipe(gulp.dest('wwwroot/fonts'));
});


// Scripts
gulp.task('scripts', function () {
    return gulp.src(['scripts/**/*.js', '!./scripts/lib/**.*js'])
      .pipe(jshint.reporter('default'))
      .pipe(gulpIgnore.exclude(condition))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('wwwroot/js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(livereload(server))
      .pipe(gulp.dest('wwwroot/js'));
});

gulp.task('libs', function () {
    return gulp.src('./scripts/lib/**.*js')
      .pipe(jshint.reporter('default'))
      .pipe(concat('lib.js'))
      .pipe(gulp.dest('wwwroot/js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(livereload(server))
      .pipe(gulp.dest('wwwroot/js'));
});

// Partials
gulp.task('views', function () {
    return gulp.src("scripts/angular/views/**/*.html")
        .pipe(gulp.dest('wwwroot/views'));
});

// Images
gulp.task('images', function () {
    return gulp.src('images/**/*')
      .pipe(gulp.dest('wwwroot/img'));
});

// Clean
gulp.task('clean', function () {
    return gulp.src(['wwwroot/css', 'wwwroot/js', 'wwwroot/img'], { read: false })
      .pipe(clean());
});

// Default task
gulp.task('_default', ['clean'], function () {
    gulp.run('sass', 'fonts', 'scripts', 'libs', 'views', 'images');
    // gulp.src(['wwwroot']).pipe(notify({ message: 'All Gulp tasks complete' }));
});

// Watch
gulp.task('watch', function () {
    gulp.watch(["sass/**", "scripts/**", "views/**"], ["_default"]);
});