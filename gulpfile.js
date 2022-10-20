'use strict';

const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const replace = require('gulp-replace');

const options = {
    PUG:{
        src: ['./templates/**/*.pug', '!./templates/partials/**/*.pug', '!./templates/wrapper.pug'],
        build: "bundles/",
        build_prod: "demo/",
    },

    SASS: {
        src: ['./assets/scss/style.scss', '!./assets/scss/private/**/*.scss'],
        build: "css/",
        build_prod: "demo/css/",
    },
}

function html() {
    return src( options.PUG.src )
    // .pipe(watch({
    //   name: "HTML"
    // }))
    .pipe(pug({pretty: true}))
    .pipe(dest( options.PUG.build ));
}

function html_prod() {
    return src( options.PUG.src )
        // .pipe(watch({
        //   name: "HTML"
        // }))
        .pipe(pug({pretty: true}))
        .pipe(replace('href="/', 'href="'))
        .pipe(replace('src="/', 'src="'))
        .pipe(dest( options.PUG.build_prod ));
}

function css() {
    return src( options.SASS.src )
    // .pipe(watch({
    //   name: "Sass"
    // }))
    // .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
      }))
    .on("error", async function (err) {
      console.log("Error:", err);
    })
    .pipe(prefix( "last 1 version" ))
    .pipe(dest( options.SASS.build ));
}

function css_prod() {
    return src( options.SASS.src )
        // .pipe(watch({
        //   name: "Sass"
        // }))
        // .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on("error", async function (err) {
            console.log("Error:", err);
        })
        .pipe(prefix( "last 1 version" ))
        .pipe(replace('/images/', '/demo/images/'))
        .pipe(dest( options.SASS.build_prod ));
}

exports.watch = () => {

    /*
    * usePolling: true to enable watch from Docker
    *
    * https://forums.docker.com/t/gulp-watch-task-not-working-with-docker/86084/3
    * */
    watch('./templates/**/*.pug', {interval: 1000, usePolling: true}, html);
    watch('./assets/scss/**/*.scss', {interval: 1000, usePolling: true}, css);
}

function defaultTasks(cb) {
    html();
    html_prod();
    css();
    css_prod();
    cb();
}

exports.default = defaultTasks;
