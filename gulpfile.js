const { src, watch, dest, parallel, series } = require('gulp')
const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const browserSync = require('browser-sync')
const uglify = require('gulp-uglify-es').default
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const del = require('del')

function styles() {
  return src([
    'node_modules/normalize.css/normalize.css',
    'app/css/jquery.rateyo.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/slick-carousel/slick/slick-theme.css',
    'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
    'app/scss/**/*.scss',
  ])
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(
      autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })
    )
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream())
}

function cleanDist() {
  return del('dist')
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/mixitup/dist/mixitup.js',
    'app/js/jquery.rateyo.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'app/js/app.js',
  ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream())
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
  })
}

function build() {
  return src(
    [
      'app/css/style.min.css',
      'app/fonts/**/*',
      'app/js/app.min.js',
      'app/*.html',
    ],
    { base: 'app' }
  ).pipe(dest('dist'))
}

function images() {
  return src(['app/images/**/*'])
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest('dist/images'))
}

function startwatch() {
  watch(['app/scss/**/*.scss'], styles)
  watch(['app/js/**/*.js', '!app/js/app.min.js'], scripts)
  watch(['app/*.html']).on('change', browserSync.reload)
}

exports.styles = styles
exports.scripts = scripts
exports.startwatch = startwatch
exports.browsersync = browsersync
exports.images = images
exports.cleanDist = cleanDist

exports.build = series(cleanDist, images, build)
exports.default = parallel(styles, scripts, startwatch, browsersync)
