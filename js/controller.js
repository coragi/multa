(function() {

  angular.module('myApp', [])

  .controller('MainController', function($scope, $interval, $http, multa) {


	  var recebeRb = function() {

				multa.buscaRb(2).then(function(data) {
					$scope.roubo = data;
				  }, function(seErroUser) {
					$scope.error = "OPS!!! deu ruim!";
			});
			};

	  $interval(recebeRb,2000,2);

/*		var recebeRb = function(){
			return multa.buscaRb(23);
		};
	//	var recebeRb = multa.buscaRb(2);

		$scope.roubo = $interval(recebeRb,2000,2);
		console.log(recebeRb);
	//	console.log($scope.recebeRb);


*/

  })
}());