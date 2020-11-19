var yaml = require('js-yaml');
var fs = require('fs');
var {SITE, PORT, BSREWRITE, PATHS} = loadConfig();

function loadConfig() {
  var ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var gulp = require('gulp');
var runSequence  = require('run-sequence');

gulp.task('build', function() {
    runSequence(['sass']);
});
