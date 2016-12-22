'use strict';

var multaApp = angular.module('multaApp', []);

multaApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);