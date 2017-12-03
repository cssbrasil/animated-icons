const gulp = require('gulp')

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')

const paths = {
  src: 'src/scss',
  dest: 'dist/css'
}

gulp.task('default', ['styles'])

gulp.task('styles', () => {
  return gulp.src(`${paths.src}/animated-icons.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCss({level: {2: {all: true}}}))
    .pipe(gulp.dest(paths.dest))
})
