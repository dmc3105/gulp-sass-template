const browserSync = require('browser-sync').create();

module.exports = function serve(){
    browserSync.init({
        server:
        {
            baseDir: './build/'
        },
        open: false,
        notify: false, 
    });
}