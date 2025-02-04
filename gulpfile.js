const gulp = require("gulp");//essas const é para importar os pluggins que instalamos.
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function styles(){
    return gulp.src("./src/styles/*.scss")
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(gulp.dest("./dist/css"));
}  

function images(){
    return gulp.src("./src/images/**/*") //os asteristicos é para acessar a pasta SRC e pegar todas as imagens que estiverem la dentro.
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}  

exports.default = gulp.parallel(styles,images);

exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
}