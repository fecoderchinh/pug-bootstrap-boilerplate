const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

function html() {
    return src(['./templates/**/*.pug', '!./templates/partials/**/*.pug', '!./templates/wrapper.pug'])
        .pipe(
            pug({
                pretty: true
            })
        )
        .pipe(dest('./bundles/'));
}

function css() {
    return src(['./assets/scss/style.scss', '!./assets/scss/private/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./css/'));
}

exports.watch = () => {
    watch('./templates/**/*.pug', html);
    watch('./assets/scss/**/*.scss', css);
}

function defaultTasks(cb) {
    html();
    css();
    cb();
}

exports.default = defaultTasks;
