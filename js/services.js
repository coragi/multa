(function() {

  var multa = function($http) {

    var buscaRb = function(num) {
		var aux = null;
       console.log("oieee olha o num: " + num);
       $http.get("http://www.portallbfv.com.br/ligaps3/portal/listaMulta.php?num="+num)
        .then(function(resposta) {
		  //console.log(resposta.data);
		  aux = resposta.data
          return aux;
        });
    };

    return {
		buscaRb: buscaRb,
		teste: "OHHHHHHHHHHHHHHHHHHHHHHHH"
    };
  };

  var module = angular.module("myApp");
  module.factory("multa", multa);
}());