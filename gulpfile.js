'use strict';

const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');

const options = {
    PUG:{
        src: ['./templates/**/*.pug', '!./templates/partials/**/*.pug', '!./templates/wrapper.pug'],
        build: "bundles/"
    },

    SASS: {
        src: ['./assets/scss/style.scss', '!./assets/scss/private/**/*.scss'],
        build: "css/"
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
    css();
    cb();
}

exports.default = defaultTasks;