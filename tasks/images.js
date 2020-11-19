var yaml = require('js-yaml');
var fs = require('fs');
var {SITE, PORT, BSREWRITE, PATHS} = loadConfig();

function loadConfig() {
  var ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
//var cache = require('gulp-cache');
gulp.task('images', function() {
  gulp
    .src(PATHS.Img.Src + '/**/*')
    //.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(
      imagemin([
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [{removeViewBox: true}, {cleanupIDs: false}],
        }),
      ]),
    )
    .pipe(gulp.dest(PATHS.Img.Dest));
});
