const gulp = require('gulp')

const browserSync = require('browser-sync').create()

const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')

const paths = {
  public: 'public',
  src: 'src/scss',
  dest: 'public/dist/css'
}

gulp.task('serve', ['dev'], () => {
  browserSync.init({
    server: paths.public,
    files: `${paths.dest}/*.css`
  })

  gulp.watch(`${paths.public}/index.html`).on('change', browserSync.reload)
})

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

gulp.task('watch', ['serve'], () => gulp.watch(`${paths.src}/**/*.scss`, ['styles:dev']))

gulp.task('default', ['prod'])
