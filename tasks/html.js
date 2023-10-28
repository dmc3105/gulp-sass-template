const {
    src, 
    dest
} = require('gulp');

module.exports = function scripts(){
    return src([
            'src/index.html', 
            'src/pages/*.html'
        ], {
            allowEmpty: true,
            base: 'src'
        })
        .pipe(dest('build/'));
}