describe("Multa Service", function () {
	var multaService = {};
	var $httpBackend;

	//instancia o modulo da aplicacao
	beforeEach(module("multaApp"));

	//instancia o servico q serah testado e o httpBackend pra simular as chamadas http
	beforeEach(inject(function (_multaService_, _$httpBackend_) {
		multaService = _multaService_;
		$httpBackend = _$httpBackend_;
	}));
	
	// A simple test to verify the multaService exists
	it("should exist", function () {
		expect(multaService).toBeDefined();
	});
	
	// testa se a lista de usuarios vem com 40 pessoas
	it("retorna o numero de usuarios", function (){
		var response;
		var lista = [{ "des_nick": "Xapuriense", "saldo": "2.610", "roubo_ate": "00:00" }, { "des_nick": "Wigan_10", "saldo": "12.952", "roubo_ate": "00:00" }, { "des_nick": "WBDias747", "saldo": "11.176", "roubo_ate": "00:00" }, { "des_nick": "vitatu85", "saldo": "12.660", "roubo_ate": "00:00" }, { "des_nick": "vidaloka35", "saldo": "55.075", "roubo_ate": "00:00" }, { "des_nick": "TICO_MIA", "saldo": "25.190", "roubo_ate": "00:00" }, { "des_nick": "tiagoscotch", "saldo": "25.259", "roubo_ate": "00:00" }, { "des_nick": "Thiagourosa18", "saldo": "14.996", "roubo_ate": "00:00" }, { "des_nick": "SevenLink7", "saldo": "5.451", "roubo_ate": "00:00" }, { "des_nick": "rogeriocamposrj", "saldo": "-7.601", "roubo_ate": "00:00" }, { "des_nick": "Rogergallatico", "saldo": "-3.803", "roubo_ate": "00:00" }, { "des_nick": "Robrazuka", "saldo": "-3.315", "roubo_ate": "00:00" }, { "des_nick": "Rabida", "saldo": "13.886", "roubo_ate": "00:00" }, { "des_nick": "R2005_br", "saldo": "12.533", "roubo_ate": "00:00" }, { "des_nick": "oscarurubu", "saldo": "-3.943", "roubo_ate": "00:00" }, { "des_nick": "NEY-CR7", "saldo": "4.615", "roubo_ate": "00:00" }, { "des_nick": "mrrobsonlima", "saldo": "18.840", "roubo_ate": "00:00" }, { "des_nick": "marcos-micael", "saldo": "-4.525", "roubo_ate": "00:00" }, { "des_nick": "marcio_js", "saldo": "8.317", "roubo_ate": "00:00" }, { "des_nick": "lwillians12", "saldo": "-1.179", "roubo_ate": "00:00" }, { "des_nick": "Luizft14", "saldo": "20.407", "roubo_ate": "00:00" }, { "des_nick": "LucianoSalve", "saldo": "15.633", "roubo_ate": "00:00" }, { "des_nick": "leandrinrlz_BR", "saldo": "-4.272", "roubo_ate": "00:00" }, { "des_nick": "Junior_alemao", "saldo": "5.417", "roubo_ate": "00:00" }, { "des_nick": "Iron-man-brr", "saldo": "9.293", "roubo_ate": "00:00" }, { "des_nick": "ibrahimonster09", "saldo": "178", "roubo_ate": "00:00" }, { "des_nick": "hugolsc22", "saldo": "44.839", "roubo_ate": "00:00" }, { "des_nick": "gago_pontes", "saldo": "3.393", "roubo_ate": "00:00" }, { "des_nick": "Frito_W11", "saldo": "-3.840", "roubo_ate": "00:00" }, { "des_nick": "F3R4_BRASIL", "saldo": "15.201", "roubo_ate": "00:00" }, { "des_nick": "Edulycariao", "saldo": "8.186", "roubo_ate": "00:00" }, { "des_nick": "duzaosilva", "saldo": "27.498", "roubo_ate": "00:00" }, { "des_nick": "Drummond-br", "saldo": "2.019", "roubo_ate": "00:00" }, { "des_nick": "diego-br", "saldo": "5.870", "roubo_ate": "00:00" }, { "des_nick": "danielcoracao", "saldo": "24.965", "roubo_ate": "00:00" }, { "des_nick": "Coragi", "saldo": "2.058", "roubo_ate": "00:00" }, { "des_nick": "CIOFFI_TECHNO", "saldo": "4.661", "roubo_ate": "00:00" }, { "des_nick": "Arkhamis", "saldo": "12.654", "roubo_ate": "00:00" }, { "des_nick": "Agnelo_007", "saldo": "5.529", "roubo_ate": "00:00" }, { "des_nick": "Adeilson_DD", "saldo": "13.197", "roubo_ate": "00:00" }];
		
		$httpBackend.when("GET", "http://www.portallbfv.com.br/ligaps3/portal/listaUsers.php")
			.respond(200, lista);
	
		multaService.listaUsuarios()
			.then(function (data) {
				response = data;
			});

		$httpBackend.flush();		

		expect(response).toEqual(lista);
	});

	//esse teste eh foda pq pode variar, mas se nao tiver mais nada rodando,
	//tem q retornar um numero X e depois o mesmo numero X
	it("retorna o numero de roubos", function (){
		var response;
		var lista = 342;
		$httpBackend.when("GET", "http://www.portallbfv.com.br/ligaps3/portal/verificaRoubo.php")
			.respond(200, lista);
	
		multaService.numeroRoubo()
			.then(function (data) {
				response = data;
			});

		$httpBackend.flush();		

		expect(response).toEqual(lista);
	});

	// testa se a lista de usuarios vem com 40 pessoas
	it("retorna o numero de multas", function (){
		var response;
		var lista = [{"horario":"21:55","jogador":"Alisson","pes_id":"63474","posicao":"GO","overall":"78","proposta":"3.000","roubado":"Iron-man-brr","ladrao":"Luizft14"},{"horario":"21:53","jogador":"N. Sansone","pes_id":"45051","posicao":"PTE","overall":"79","proposta":"3.000","roubado":"Iron-man-brr","ladrao":"Luizft14"}];
		
		$httpBackend.when("GET", "http://www.portallbfv.com.br/ligaps3/portal/listaMulta.php?num=2")
			.respond(200, lista);
	
		multaService.listaMulta(2)
			.then(function (data) {
				response = data;
			});

		$httpBackend.flush();		

		expect(response).toEqual(lista);
	});
});