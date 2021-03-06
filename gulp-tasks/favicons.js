'use strict';

var gulp = require('gulp')
	, favicons = require('gulp-favicons')
	, plumber = require('gulp-plumber')
	, configs = require('./configs')
	, filter = require('gulp-filter')
	, htmlName = 'favicons';

gulp.task('favicons', function () {

var onlyFaviconFilter = filter(['**', '!' + htmlName + '.html'], {restore: true});
var onlyPNGFilter = filter(['**/*.png'], {restore: true});

	return gulp.src(configs.source.favicon)
		.pipe(plumber())
		.pipe(onlyPNGFilter)
		.pipe(favicons({
			appName: 'my template'
			, appDescription: 'my template'
			, developerName: 'my template'
			, developerURL: 'my template'
			, background: 'transpatent'
			, path: './'
			, url: 'my template'
			, display: 'standalone'
			, orientation: 'portrait'
			, start_url: './?homescreen=1'
			, version: 1.0
			, logging: false
			, online: false
			, html: htmlName + '.html'
			, pipeHTML: true
			, replace: true
		}))
		.pipe(onlyPNGFilter.restore)
		.pipe(onlyFaviconFilter)
		.pipe(gulp.dest(configs.build.favicon))
		.pipe(onlyFaviconFilter.restore)
		.pipe(filter('**/*.html'))
		.pipe(gulp.dest(configs.soursePath + 'elements/' + htmlName + '/'));
});