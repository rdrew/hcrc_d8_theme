var yaml = require('js-yaml');
var fs = require('fs');
var {SITE, PORT, BSREWRITE, PATHS} = loadConfig();

function loadConfig() {
  var ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function() {
  gulp
    //.src(PATHS.Js.Src) // path to your files
    .src(PATHS.Js.Src) // path to your files
    .pipe(concat(PATHS.Js.FileName)) // concat and name it "concat.js"
    .pipe(gulp.dest(PATHS.Js.Dest));
});
