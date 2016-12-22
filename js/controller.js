'use strict';

multaApp.controller('MainController',
	function MainController($scope, multaService, $interval) {
		//numero de roubos atuais
		$scope.atual = 0;
		//$scope.roubo.length = 0; //gambiarra monstra

		var recebeRb = function () {
			//numeroRoubo atualiza o numero de roubos atuais
			multaService.numeroRoubo()
				.then(function (num) {
					
					// se num for diferente do atual, atualiza a lista de roubos
					if ($scope.atual != num) {
						// busca os novos roubos = num - $scope.atual
						multaService.listaMulta(num - $scope.atual)
							.then(function (roubo) {
								//console.log('roubo' + num + ' ' + $scope.atual);
								
								//if ($scope.roubo == null) {
									$scope.roubo = roubo;
								//} else {
									//var arr = $scope.roubo;
									//$scope.roubo = arr.concat(arr, roubo);
								//}
																
								//metodo concat pode concatenar N arrays em um, criando um novo array			
								//a = a.concat(b, c);
								//metodo push pode ser usado junto com o apply
								//o apply pega um array de parametro e explode 
								//assim o push (q zera o array) vai adicionar ao "a" os elementos de "a" e "b"
								//a.push.apply(a, b);
								//$scope.roubo.push.apply($scope.roubo, roubo);
								//console.log($scope.roubo);
							});
					}
					//atualiza o numero de roubos atual
					$scope.atual = num;

				});
				};

		//executa a funcao recebeRb a cada 5 segundos
		$interval(recebeRb, 5000);

	});