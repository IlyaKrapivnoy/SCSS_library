const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('scss_library/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
    watch(['scss_library/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
