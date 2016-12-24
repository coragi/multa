"use strict";

angular
	.module("multaApp", ["ui.bootstrap"])
	.config(function ($qProvider) {
		$qProvider.errorOnUnhandledRejections(false);
	});
