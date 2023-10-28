const {
    src,
    dest
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

module.exports = function styles(){
    return src('src/scss/**/[^_]*.scss')
        .pipe(concat('style.min.css'))
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(dest('build/css/'));
}