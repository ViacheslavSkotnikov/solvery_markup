const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", function (done) {
  gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./prod/styles"));

  done();
});

gulp.task("sass:watch", function () {
  gulp.watch("./src/sass/**/*.scss", gulp.series("sass"));
});
