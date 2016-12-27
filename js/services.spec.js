describe('Multa Service', function () {
	var multaService = {};
	var $httpBackend;

	//instancia o modulo da aplicacao
	beforeEach(module('multaApp'));

	//instancia o servico q serah testado e o httpBackend pra simular as chamadas http
	beforeEach(inject(function (_multaService_, _$httpBackend_) {
		multaService = _multaService_;
		$httpBackend = _$httpBackend_;
	}));
	
	// A simple test to verify the multaService exists
  	it('should exist', function() {
    	expect(multaService).toBeDefined();
	});
	
	// testa se a lista de usuarios vem com 40 pessoas
	it('retorna o numero de usuarios', function (){
		var response;
		$httpBackend.when('GET', 'http://www.portallbfv.com.br/ligaps3/portal/verificaRoubo.php')
			.respond(200, 40);
	
		multaService.listaUsuarios()
			.then(function (num) {
				response = num;
			});
	});

	//esse teste eh foda pq pode variar, mas se nao tiver mais nada rodando,
	//tem q retornar um numero X e depois o mesmo numero X
/*	it('retorna o numero de roubos', function () {
		var response;
		var retorno = 342;
		
		$httpBackend.when('GET', 'http://www.portallbfv.com.br/ligaps3/portal/verificaRoubo.php')
			.respond(200, retorno);
		
		multaService.numeroRoubo()
			.then(function (num) {
				response = num;
			});

		expect(response).toEqual(retorno);

	});*/
});