const {
    src, 
    dest
} = require('gulp');
const browserSync = require('browser-sync').create();

module.exports = function scripts(){
    return src([
            'src/index.html', 
            'src/pages/*.html'
        ], {
            allowEmpty: true,
            base: 'src'
        })
        .pipe(dest('build/'))
        .pipe(browserSync.reload());
}