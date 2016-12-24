"use strict";

angular.module("multaApp", ["ui.bootstrap"])
	.factory("multaService", function ($http) {
		return {
			listaMulta: function (num) {
				var promise = $http.get("http://www.portallbfv.com.br/ligaps3/portal/listaMulta.php?num=" + num)
					.then(function (response) {
						//console.log(response);
						return response.data;
					});
				return promise;
			},
			numeroRoubo: function () {
				var promise = $http.get("http://www.portallbfv.com.br/ligaps3/portal/verificaRoubo.php")
					.then(function (response) {
						//console.log(response);
						return response.data.cnt;
					});
				return promise;
			}
		};
	});
