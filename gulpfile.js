'use strict';

var yaml = require('js-yaml');
var fs = require('fs');
var {SITE, PORT, BSREWRITE, PATHS} = loadConfig();

function loadConfig() {
  var ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var server = require('browser-sync').create();
global.server = server;

//var imagemin = require('gulp-imagemin');
//var plumber = require('gulp-plumber');
//var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
//var sourcemaps = require('gulp-sourcemaps');
//var concat = require('gulp-concat');



var requireDir  = require('require-dir');
//requireDir('./gulp_tasks', {recurse: false});
requireDir('./tasks', {recurse: false});

// ##################
// Default Task
// ##################
var gulp = require('gulp');
var runSequence  = require('run-sequence');
gulp.task('default', function() {
    runSequence(['build', 'server', 'watch']);
});
