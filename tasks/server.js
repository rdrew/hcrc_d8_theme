var yaml = require('js-yaml');
var fs = require('fs');
var {SITE, PORT, BSREWRITE, PATHS} = loadConfig();

function loadConfig() {
  var ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var gulp = require('gulp');

gulp.task('server', function() {
  server.init({
    proxy: SITE.Remote.Url,
    serveStatic: ['.'],
    //files: ['./css/*.css', './js/*.js'],
    files: PATHS.Watch,
    plugins: ['bs-rewrite-rules'],
    rewriteRules: [
      {
        match: BSREWRITE.Css.Match,
        replace: BSREWRITE.Css.Replace,
      },
      {
        match: BSREWRITE.Js.Match,
        replace: BSREWRITE.Js.Replace,
      },
    ],
  });
});
