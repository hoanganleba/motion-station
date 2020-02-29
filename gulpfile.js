const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss to css 
function style() {
    // location of scss file
    return gulp.src('./scss/**/*.scss')
        // pass it through sass compiler
        .pipe(sass())
        // location the compiled css
        .pipe(gulp.dest('./css'))
        // stream changes to all browser
        .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./**/*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;