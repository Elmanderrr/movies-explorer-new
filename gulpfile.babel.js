import gulp from 'gulp';
import requireDir from 'require-dir'


requireDir('./gulp-tasks');
gulp.task('default',() => console.log(`it's work!`));