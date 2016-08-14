'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();

var paths = {
  scripts: 'app/**/*.*',
  statics: 'static/**/*.*',
  app: ['index.js', 'index.html']
};

gulp.task('serve', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch(paths.app, electron.restart);

  // Reload renderer process
  gulp.watch(paths.scripts, electron.reload);
  gulp.watch(paths.statitcs, electron.reload);
});