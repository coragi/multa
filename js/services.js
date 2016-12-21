'use strict';

multaApp.factory('multaService', function($http) {
  return {
      listaMulta: function(num) {
          var promise = $http.get("http://www.portallbfv.com.br/ligaps3/portal/listaMulta.php?num=" + num)
              .then(function(response) {
                  console.log(response);
                  return response.data;
              });
          return promise;
      },
       numeroRoubo: function() {
	            var promise = $http.get("http://www.portallbfv.com.br/ligaps3/portal/verificaRoubo.php")
	                .then(function(response) {
	                    console.log(response);
	                    return response.data.cnt;
	                });
	            return promise;
      }
  }
});
/*
multaApp.factory('verificaService', function($http) {
  return {
      numeroRoubo: function() {
          var promise = $http.get("http://www.portallbfv.com.br/ligaps3/portal/verificaRoubo.php")
              .then(function(response) {
                  console.log(response);
                  return response.data;
              });
          return promise;
      }
  }
});

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
*/