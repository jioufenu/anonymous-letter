const gulp = require('gulp');
const gulpPug = require('gulp-pug'); //compile pug(jade)
const gulpCompass = require('gulp-compass'); //compile sass
const gulpUglify = require('gulp-uglify'); //minify js
const gulpPlumber = require('gulp-plumber'); //error handler
const gulpNotify = require('gulp-notify'); //notify message
const gulpLivereload = require('gulp-livereload'); //livereload browser

gulp.task('default',['css','js','views']);

gulp.task('watch', ()=>{
  gulpLivereload.listen();
  gulp.watch('src/sass/**/*.scss',['css']);
  gulp.watch('src/js/**/*.js',['js']);
  gulp.watch('src/views/**/*.pug',['views']);
});

gulp.task('views',()=>{
  gulp.src('src/views/**/*.pug')
    .pipe(gulpPlumber())
    .pipe(gulpPug({
          pretty: true,
        }))
    .pipe(gulp.dest('dist')) //output folder
    .pipe(gulpNotify("Compile Pug Complete!"))
    .pipe(gulpLivereload());
});

gulp.task('css',()=>{
  gulp.src('src/sass/**/*.scss')
    .pipe(gulpPlumber())
    .pipe(gulpCompass({
          config_file: './config.rb',
          sass: 'src/sass/',
          css: 'dist/css/',
        }))
    .pipe(gulp.dest('dist/css')) //output folder
    .pipe(gulpNotify("Compile Sass Complete!"))
    .pipe(gulpLivereload());
});

gulp.task('js',()=>{
  gulp.src('src/js/**/*.js')
    .pipe(gulpPlumber())
    .pipe(gulpUglify()) //minify
    .pipe(gulp.dest('dist/js')) //output folder
    .pipe(gulpNotify("Minify Javascript Complete!"))
    .pipe(gulpLivereload());
});
