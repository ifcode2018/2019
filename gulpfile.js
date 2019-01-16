const gulp = require('gulp')
const sass = require('gulp-sass')
const minify = require('gulp-minifier')
const stripComments = require('gulp-strip-comments')
const stripSassComments = require('gulp-strip-json-comments')
const connect = require('gulp-connect')

const getKeptComment = function (content, filePath) {
  var m = content.match(/\/\*![\s\S]*?\*\//img)
  return m && m.join('\n') + '\n' || ''
}

gulp.task('sassCompiler', function () {
  gulp.src('src/sass/**/*.sass')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(stripSassComments())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload())
})

gulp.task('JSminifier', function () {
  return gulp.src('src/**/*.js').pipe(minify({
      minify: true,
      minifyJS: {
        sourceMap: true
      }
    }))
    .pipe(stripComments())
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload())
})

gulp.task('HTMLminifier', function () {
  return gulp.src('src/**/*.html').pipe(minify({
      minify: true,
      minifyHTML: {
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    }))
    .pipe(stripComments())
    .pipe(gulp.dest('./'))
    .pipe(connect.reload())
})

gulp.task('serve', function () {
  connect.server({
    root: './',
    // https: true,
    livereload: true
  })
})

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.sass', ['sassCompiler'])
  gulp.watch('src/js/**/*.js', ['JSminifier'])
  gulp.watch('src/*.html', ['HTMLminifier'])
})

// Watch task
gulp.task('default', [
  'serve',
  'sassCompiler',
  'JSminifier',
  'HTMLminifier',
  'watch'
])