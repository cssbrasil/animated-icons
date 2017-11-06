const gulp = require('gulp')

const sass = require('gulp-sass')
const stylesSrc = 'src/scss'
const stylesDist = 'dist/css'

gulp.task('default', () => {
  return gulp.src(`${stylesSrc}/animated-icons.scss`)
    .pipe(sass())
    .pipe(gulp.dest(stylesDist))
})
