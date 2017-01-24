"use strict";



angular

	.module("multaApp")

	.controller("MainController", MainController);



function MainController($scope, multaService, $interval, $location, $anchorScroll, $timeout) {

	//numero de roubos atuais

	$scope.atual = 0;

	$scope.roubo = [];
	/*
	$scope.roubo.push({
		"horario": "14:30", "pes_id":"46917", "jogador":"Douglas Santos", "posicao":"PTD", "overall":"80", "roubado":"Adeilson_DD", "ladrao":"Vitatu85", "proposta":"20.000"
	});
	$scope.roubo.push({
		"horario": "14:30", "pes_id":"46917", "jogador":"Douglas Santos", "posicao":"PTD", "overall":"80", "roubado":"Adeilson_DD", "ladrao":"Vitatu85", "proposta":"20.000"
	});
	$scope.roubo.push({
		"horario": "14:30", "pes_id":"46917", "jogador":"Douglas Santos", "posicao":"PTD", "overall":"80", "roubado":"Adeilson_DD", "ladrao":"Vitatu85", "proposta":"20.000"
	});
	$scope.roubo.push({
		"horario": "14:30", "pes_id":"46917", "jogador":"Douglas Santos", "posicao":"PTD", "overall":"80", "roubado":"Adeilson_DD", "ladrao":"Vitatu85", "proposta":"20.000"
	});
	$scope.roubo.push({
		"horario": "14:30", "pes_id":"46917", "jogador":"Douglas Santos", "posicao":"PTD", "overall":"80", "roubado":"Adeilson_DD", "ladrao":"Vitatu85", "proposta":"20.000"
	});
*/
	$scope.listaUsuarios = [];
	/*
	$scope.listaUsuarios.push({
		"des_nick": "Coragi", "saldo":"120.000,00"
	});
	$scope.listaUsuarios.push({
		"des_nick": "Tiagoscotch", "saldo":"55.000,00"
	});
	$scope.listaUsuarios.push({
		"des_nick": "Eduardolyca", "saldo":"33.330,00"
	});
	*/
	var audio = new Audio("images/goal.mp3");

	$scope.playAudio = function () {
		audio.play();
	};

	$scope.bool_spin = true;	

	var hideSpin = function () {
		$scope.bool_spin = true;
	};
	
	$scope.showSpin = function (keyEvent) {
		if (keyEvent.which === 116)
			$scope.bool_spin = false;
		$timeout(hideSpin, 2000);
	};

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
							$scope.playAudio();
						});



					multaService.listaUsuarios()

						.then(function (usuarios) {

							$scope.listaUsuarios = usuarios;

						});

					//move a pagina pro roubo
					$location.hash("top-banner");
					$anchorScroll();

				}

				//atualiza o numero de roubos atual

				$scope.atual = num;

			});

	};



	//executa a funcao recebeRb a cada 5 segundos

	$interval(recebeRb, 5000);

}