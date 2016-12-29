"use strict";

angular
	.module("multaApp")
	.controller("MainController", MainController);

function MainController($scope, multaService, $interval) {
	//numero de roubos atuais
	$scope.atual = 0;
	$scope.roubo = [];
	$scope.listaUsuarios = [];

	var recebeRb = function () {
		$scope.data_hora = Date.now();
		//numeroRoubo atualiza o numero de roubos atuais
		multaService.numeroRoubo()
			.then(function (num) {
				// se num for diferente do atual, atualiza a lista de roubos
				if ($scope.atual != num) {
					// busca os novos roubos = num - $scope.atual
					multaService.listaMulta(num - $scope.atual)
						.then(function (roubos) {
							//adiciona os novos roubos no inicio do array $scope.roubo
							$scope.roubo.unshift.apply($scope.roubo, roubos);
						});
					
					multaService.listaUsuarios()
						.then(function (usuarios) {
							$scope.listaUsuarios = usuarios;
						});

				}
				//atualiza o numero de roubos atual
				$scope.atual = num;
			});
	};

	//executa a funcao recebeRb a cada 5 segundos
	$interval(recebeRb, 5000);
}	