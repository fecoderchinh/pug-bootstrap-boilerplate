
'use strict';

const gulp = require('gulp');
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

gulp.task('sass', async function() {
  gulp.src( options.SASS.src )
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
    .pipe(gulp.dest( options.SASS.build ));
});

gulp.task('html', async function () {
  gulp.src( options.PUG.src )
    // .pipe(watch({
    //   name: "HTML"
    // }))
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest( options.PUG.build ));
});


gulp.task('watch', async function () {
  gulp.watch( options.PUG.src , gulp.series('html'));
  gulp.watch( options.SASS.src , gulp.series('sass')  );
});

gulp.task('default', gulp.series('html', 'sass', 'watch'));