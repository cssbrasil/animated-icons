const gulp = require('gulp')

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')

const paths = {
  src: 'src/scss',
  dest: 'dist/css'
}

gulp.task('styles:prod', ['styles:dev'], () => {
  return gulp.src(`${paths.dest}/animated-icons.css`)
    .pipe(autoprefixer())
    .pipe(cleanCss({level: {2: {all: true}}}))
    .pipe(gulp.dest(paths.dest))
})

gulp.task('styles:dev', () => {
  return gulp.src(`${paths.src}/animated-icons.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
})

gulp.task('styles', ['styles:prod'])

gulp.task('dev', ['styles:dev'])

gulp.task('prod', ['styles:prod'])

gulp.task('watch', () => gulp.watch(`${paths.src}/**/*.scss`, ['styles:dev']))

gulp.task('default', ['prod'])
