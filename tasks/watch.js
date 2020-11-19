var yaml = require('js-yaml');
var fs = require('fs');
var {SITE, PORT, BSREWRITE, PATHS} = loadConfig();

function loadConfig() {
  var ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var server = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('watch', ['server', 'sass'], function() {
  //watch sass folder and compile changes
  gulp.watch(PATHS.Scss.Dir + '/**/*.scss', ['sass']);
  //watch js folder and compile changes
  gulp.watch(PATHS.Js.Src + '/**/*.js', ['js']);
  //watch image folder and optimize
  gulp.watch(PATHS.Img.Src + '/**/*', ['images']);
});
