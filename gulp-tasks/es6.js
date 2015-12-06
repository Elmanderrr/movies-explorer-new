import gulp from  'gulp'
import sourcemaps from  'gulp-sourcemaps'
import source from  'vinyl-source-stream'
import buffer from  'vinyl-buffer'
import browserify from  'browserify'
import watchify from  'watchify'
import babel from  'babelify'

function compile (watch) {
    let bundler = watchify(browserify('./app/bootstrap.js', { debug: true }).transform(babel));

    function rebundle () {
        bundler.bundle()
            .on('error', function (err) {
                console.error(err.toString());
                this.emit('end');
            })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./app/build'));
    }

    if ( watch ) {
        bundler.on('update', function () {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            let fullDate = {
                hours: hours < 10 ? `0${hours}` : hours,
                minutes: minutes < 10 ? `0${minutes}` : minutes,
                seconds: seconds < 10 ? `0${seconds}` : seconds
            };

            console.log(`-> bundling:${fullDate.hours}:${fullDate.minutes}:${fullDate.seconds}`);
            rebundle();
        });
    }

    rebundle();
}

function watch () {
    return compile(true);
}

gulp.task('build', function () { return compile(); });
gulp.task('watch', function () { return watch(); });

gulp.task('default', ['watch']);