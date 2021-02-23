const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const del = require("del");
const runSequence = require("gulp4-run-sequence");
const browserSync = require("browser-sync").create();

// Clean dist folder
gulp.task("clean:dist", () => {
  return del("dist/**", { force: true });
});

gulp.task("sass", () => {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

gulp.task("compress:css", () => {
  return gulp
  .src("app/css/*.css")
  .pipe(cleanCSS({ compatibility: "ie8" }))
  .pipe(gulp.dest("dist/css"));
})

gulp.task("compress:js", () => {
  return gulp.src("app/js/**/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
})

gulp.task("compress:html", () => {
  return gulp
  .src("app/**/*.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest("dist"));
})

gulp.task("compress:images", () => {
  return gulp.src("app/assets/**/*")
  .pipe(imagemin())
  .pipe(gulp.dest('dist/assets'))
})

gulp.task("serve", async () => {
  browserSync.init({
    server: {
      baseDir: "app",
    },
  });
  gulp.watch("app/scss/**/*.scss", sass);
  gulp.watch("app/**/*.html").on("change", browserSync.reload);
  gulp.watch("app/js/**/*.js").on("change", browserSync.reload);
});

gulp.task("compress", gulp.series('compress:html', 'compress:css', "compress:js", "compress:images"));

// Series of tasks perform in order
gulp.task("build", (cb) => {
  runSequence("sass", "clean:dist", "compress", cb);
});
