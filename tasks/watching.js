const {
    watch,
    parallel
} = require('gulp');

module.exports = function watching(cb){
    watch('src/scss/**/*.scss', parallel('styles'));
    watch('src/js/**/*.js', parallel('scripts'));
    watch(['src/*.html', 'src/pages/*.html'], parallel('html'));
    cb();
}