(function() {

  angular.module('myApp', [])

  .controller('MainController', function($scope, $http) {
	  $scope.teste = "TiagoScotch";

	  $scope.buscalistaMulta = (function() {
		  	var num=3;
	        $http.get("http://www.portallbfv.com.br/original/portal/listaMulta.php?num=" + num)
	          .then(function(resposta) {
	            $scope.roubo = resposta.data;
	          }, function(seErroUser) {
	            $scope.error = "Digitou errado ai ANIMAL";
	    });
    })();


  })
}());