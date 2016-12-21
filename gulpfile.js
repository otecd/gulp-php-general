'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoPrefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    newer = require('gulp-newer'),
    del = require('del'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,

    path = {
        build: {
            php: 'bld/',
            js: 'bld/js/',
            css: 'bld/css/',
            img: 'bld/img/',
            fnt: 'bld/fnt/',
            fico: 'bld/fico/',
            libs: 'bld/libs/'
        },
        source: {
            php: [
                'src/**/*.php',
                '!src/libs/**/*'
            ],
            js: [
                'src/js/**/*.js',
                '!src/js/isolated/**/*'
            ],
            jsIsolated: 'src/js/isolated/**/*.js',
            sass: [
                'src/css/**/*.+(sass|scss)',
                '!src/css/isolated/**/*.*'
            ],
            cssIsolated: 'src/css/isolated/**/*.css',
            img: 'src/img/**/*.*',
            fnt: 'src/fnt/**/*.*',
            fico: 'src/fico/**/*.*',
            libs: 'src/libs/**/*.*'
        },
        watch: {
            php: [
                'src/**/*.php',
                '!src/libs/**/*'
            ],
            js: [
                'src/js/**/*.js',
                '!src/js/isolated/**/*.js'
            ],
            jsIsolated: 'src/js/isolated/**/*',
            sass: [
                'src/css/**/*.+(sass|scss)',
                '!src/css/isolated/**/*.*'
            ],
            cssIsolated: 'src/css/isolated/**/*',
            img: 'src/img/**/*.*',
            fnt: 'src/fnt/**/*.*',
            fico: 'src/fico/**/*.*',
            libs: 'src/libs/**/*.*'
        },
        clean: {
            build: 'bld'
        }
    },

    webconfig = {
        proxy: "http://localhost/blank-templates/gulp-php-general/bld"
    };

function buildPhp() {
    return gulp.src(path.source.php)
        .pipe(gulp.dest(path.build.php))
        .pipe(reload({stream: true}));
}

function buildJs() {
    return gulp.src(path.source.js)
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
}

function buildNewer(globSrc, globBld) {
    return gulp.src(globSrc)
        .pipe(newer(globBld))
        .pipe(gulp.dest(globBld))
        .pipe(reload({stream: true}));
}

function buildCss() {
    return gulp.src(path.source.sass)
        .pipe(sass())
        .pipe(autoPrefixer({
            browsers: ['ie 8-9', 'last 2 versions']
        }))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
}

function buildImg() {
    return gulp.src(path.source.img)
        .pipe(newer(path.build.img))
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
}

gulp.task('cleanBuild', function() {
    return del(path.clean.build);
});

gulp.task('build', ['cleanBuild'], function () {
    buildNewer(path.source.libs, path.build.libs);
    buildNewer(path.source.fnt, path.build.fnt);
    buildNewer(path.source.fico, path.build.fico);
    buildImg();
    buildJs();
    buildCss();
    buildNewer(path.source.jsIsolated, path.build.js);
    buildNewer(path.source.cssIsolated, path.build.css);
    buildPhp();
});

function startServer() {
    browserSync(webconfig);
}

function watch() {
    gulp.watch(path.watch.php, function () { buildPhp(); });
    gulp.watch(path.watch.js, function () { buildJs(); });
    gulp.watch(path.watch.jsIsolated, function () { buildNewer(path.source.jsIsolated, path.build.js); });
    gulp.watch(path.watch.sass, function () { buildCss(); });
    gulp.watch(path.watch.cssIsolated, function () { buildNewer(path.source.cssIsolated, path.build.css); });
    gulp.watch(path.watch.img, function () { buildImg(); });
    gulp.watch(path.watch.fnt, function () { buildNewer(path.source.fnt, path.build.fnt); });
    gulp.watch(path.watch.fico, function () { buildNewer(path.source.fico, path.build.fico); });
    gulp.watch(path.watch.libs, function () { buildNewer(path.source.libs, path.build.libs); });
}

gulp.task('default', ['build'], function () {
    startServer();
    watch();
});
