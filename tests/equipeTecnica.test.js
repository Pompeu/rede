// file: tests/pequisador.test.js - created at 2015-01-07, 06:47
var expect = require('chai').expect;
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var baseURL = 'http://localhost:3000/api/equipetecnica';

describe('EquipeTecnica restful testing', function () {

	var body = {
		nome : 'Itacir Ferreira Pompeu',
		telefoneProfissional : '6434441827',
		telefoneContato : '6434441827',
		emailProfissional : 'itacir@hotmail.com',
		formacaoNivel : 'Superior Incompleto',
		formacaoAno : '2016',
		enderecoProfissional : 'Rua  24 de junho 104 Centro',
		diretorioPEsquisa :   'Algoritmos Geneticos',
		externo : false,
		instituicao : 'Instito Federal Goiano Campus Morrinhos',
		homePage :  'http://bloog-limp.herokuapp.com/',
		facebook : 'https://www.facebook.com/itacir.pompeu'
	}
	var id = null;
  	it('expect save one EquipeTecnica in db', function (done) {
  	
	  	function endHandler(err, res) {  		
	  		expect(err).to.not.exist;
				expect(res).to.exist;		
				expect(res.body.status).to.true;
				expect(res.body.err).to.null;
				expect(res.body.result).to.an('object');
				expect(res.body.result.id).to.an('Number');
				id = res.body.result.id;
				done();
	  	}

	  	superagent
	  		.post(url.resolve(baseURL,'equipetecnica'))
	  		.send(body)
	  		.end(endHandler)

  	});


  	it('expect all EquipeTecnica form db',function (done) {

	  	function endHandler(err, res) {
	  		expect(err).to.not.exist;
	  		expect(res).to.exist;
	  		expect(res.body.status).to.true;
				expect(res.body.err).to.null;
				expect(res.body.result).to.an('Array');
				done();
	  	}

	  	superagent
	  		.get(url.resolve(baseURL,'equipetecnica'))
	  		.end(endHandler);
  	});

  	it('expect one EquipeTecnica by id from db', function(done) {
  		function endHandler(err, res) {
  			expect(err).to.not.exist;
	  		expect(res).to.exist;
	  		expect(res.body.status).to.true;
				expect(res.body.err).to.null;
				expect(res.body.result).to.an('object');
				done();
  		};

  		superagent
	  		.get(url.resolve(baseURL,'equipetecnica/'+id))
	  		.end(endHandler);
  	});

  	it('expect update one EquipeTecnica ' ,function (done) {
  		var bodyNew = {
  			id : id,
  			nome : 'Itacir Ferreira Pompeu',
				telefoneProfissional : '6434441827',
				telefoneContato : '6434441827',
				emailProfissional : 'itacir@hotmail.com',
				formacaoNivel : 'Superior Incompleto',
				formacaoAno : '2016',
				enderecoProfissional : 'Rua  24 de junho 104 Centro',
				diretorioPEsquisa :   'Algoritmos Geneticos',
				externo : true,
				instituicao : 'Instito Federal Goiano Campus Morrinhos',
				homePage :  'http://bloog-limp.herokuapp.com/',
				facebook : 'https://www.facebook.com/itacir.pompeu',
  		}

  		function endHandler(err, res) {
  			expect(err).to.not.exist;
	  		expect(res).to.exist;
	  		expect(res.body.status).to.true;
				expect(res.body.err).to.null;
				expect(res.body.result).to.an('object');
				expect(res.body.result).to.not.eql(body);
				done();
  		}

  		superagent
  			.put(url.resolve(baseURL,'equipetecnica/'+id))
  			.send(bodyNew)
  			.end(endHandler);
  	});

	it('expect delete one EquipeTecnica from db',function(done) {
		function endHandler (err , res) {
			expect(err).to.not.exist;
	  	expect(res).to.exist;
	  	expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			done();
		}
		superagent
  			.del(url.resolve(baseURL,'equipetecnica/'+id))
  			.end(endHandler);
	});
});
