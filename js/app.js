'use strict';

angular
	//.module('multaApp', ['ui.bootstrap'])
	.module('multaApp', [])
	.config(function ($qProvider) {
		$qProvider.errorOnUnhandledRejections(false);
	});
