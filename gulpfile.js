'use strict';

var gulp = require('gulp'),

    pug = require('gulp-pug'),

    sass = require('gulp-sass'),

    inject = require('gulp-inject'),

    open = require('gulp-open'),

    run = require('run-sequence'),

    jasmine = require('gulp-jasmine'),

    reporters = require('jasmine-reporters');

gulp.task('test', function() {

  gulp.src([//'www/bower_components/angular/angular.js',
        //'www/scripts/app.js',
        //'www/scripts/**/*.js',
        //'www/bower_components/angular-mocks/angular-mocks.js',
        'www/specs/**/*.js'])

    .pipe(jasmine());

});


gulp.task('buildpug', function() {

  return gulp.src('src/**/*.pug')

    .pipe(pug({

      'pretty' : true

    }))

    .pipe(gulp.dest('www/'));

});

gulp.task('injectjs', function() {

  console.log("Injecting scripts");

  var target = gulp.src('www/index.html');

  var sources = gulp.src([

    'www/bower_components/angular/angular.js',

    'www/bower_components/angular-bootstrap/*.min.js',

    'www/scripts/**/*.js'

  ] , {

    read : false

  });

  return target.pipe(inject(sources , {

    relative : true

  }))

    .pipe(gulp.dest('www/'));

});

gulp.task('injectcss', function() {

  console.log("Injecting styles");

  var target = gulp.src('www/index.html');

  var sources = gulp.src([

    'www/bower_components/bootstrap/dist/css/*.min.css',

    'www/bower_components/angular-bootstrap/ui-bootstrap-csp.css',

    'www/styles/**/*.css'

  ] , {

    read : false

  });

  return target.pipe(inject(sources , {

    relative : true

  }))

    .pipe(gulp.dest('www/'));

});

gulp.task('buildjs', function() {

  return gulp.src('src/**/*.js')

    .pipe(gulp.dest('www/'));

});

gulp.task('buildcss', function() {

  return gulp.src('src/styles/**/*.scss')

    .pipe (sass())

    .pipe(gulp.dest('www/styles/'));

});

gulp.task('watch', function() {

  gulp.watch('src/scripts/**/*.js', ['buildjs']);

  gulp.watch('src/views/**/*.pug', ['buildpug']);

  gulp.watch('src/styles/**/*.scss', ['buildcss']);

});

gulp.task('build', function() {

  run('buildpug', ['buildjs', 'buildcss'] , 'injectjs', 'injectcss');

});

gulp.task('open', function() {

  gulp.src('www/index.html')

    .pipe(open());

});

gulp.task('serve', function() {

  run('build', 'open');

});
