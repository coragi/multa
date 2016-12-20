(function() {

  var multa = function($http) {

    var buscaRb = function(num) {
       console.log("oieee olha o num: " + num);
       $http.get("http://www.portallbfv.com.br/ligaps3/portal/listaMulta.php?num="+num)
        .then(function(resposta) {
		  //console.log(resposta.data);
          return resposta.data;
        });
    };

    return {
		buscaRb: buscaRb
    };
  };

  var module = angular.module("myApp");
  module.factory("multa", multa);
}());