var yaml = require('js-yaml');
var fs = require('fs');
var {SITE, PORT, BSREWRITE, PATHS} = loadConfig();

function loadConfig() {
  var ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp
    //.src('./src/scss/**/*.scss')
    .src(PATHS.Scss.Dir + '/*.scss')
    //.src(PATHS.Scss.Dir + '/' + PATHS.Scss.FileName, {sourcemaps: true})
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: PATHS.Scss.Libraries,
      }).on('error', sass.logError),
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.Css.Dir))
    .pipe(server.stream());
});
