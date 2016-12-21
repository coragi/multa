'use strict';

multaApp.controller('MainController',
  function MainController ($scope, multaService) {
    multaService.listaMulta(3)
      .then(function (roubo) {
        $scope.roubo = roubo;
      });
});


/*
(function () {
  var app = angular.module("myApp", []);
  var MainController = function($scope, $interval, $http, multa) {
    var num=0;
    var recebeRb = function() {
	num++;
      $http.get("http://www.portallbfv.com.br/ligaps3/portal/listaMulta.php?num=" + num)
        .then(function(resposta) {
          $scope.roubo = resposta.data;
        });
    };
	$scope.teste=multa.teste;
    $interval(recebeRb, 2000, 5);

  };

  app.controller("MainController", MainController);
}());

*/