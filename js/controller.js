(function() {

  angular.module('myApp', [])

  .controller('MainController', function($scope, $http, $interval) {

		var num=0;
	  var buscaRb = function() {
				num++;
				$http.get("http://www.portallbfv.com.br/original/portal/listaMulta.php?num=" + num)
				  .then(function(resposta) {
					$scope.roubo = resposta.data;
				  }, function(seErroUser) {
					$scope.error = "Digitou errado ai ANIMAL";
			});
			};

		$scope.recebeRb = $interval(buscaRb,5000,10);




  })
}());