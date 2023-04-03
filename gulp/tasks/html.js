import fileInclude from 'gulp-file-include';

export const html = () => app.gulp.src(app.path.src.html)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'HTML',
      message: 'Error: <%= error.message %>',
    }),
  ))
  .pipe(fileInclude())
  .pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browsersync.stream());
