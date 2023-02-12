import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { copyjs } from './gulp/tasks/copyjs.js';

global.app = {
  path,
  gulp,
  plugins: plugins
}

function watcher() {
  gulp.watch(path.watch.assets, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.copyjs, copyjs);
}

const mainTasks = gulp.series(gulp.parallel(copy, copyjs, html, scss));
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
gulp.task('default', dev);
