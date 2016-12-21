'use strict';

multaApp.controller('MainController',
  function MainController ($scope, multaService, $interval) {
	$scope.atual=0;

	var recebeRb = function() {
					multaService.numeroRoubo()
					.then(function(num) {
						console.log("NUM ->"+num);
						$scope.num = num;
						if($scope.atual != $scope.num) {
							multaService.listaMulta($scope.num)
								.then(function (roubo) {
									console.log("ROUBO ->"+roubo);
									$scope.roubo = roubo;
									$vou subiscope.atual = $scope.num;
								});
						}
					});
				};

   $interval(recebeRb, 5000);


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