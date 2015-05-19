// file: tests/projetodePesquisaCreate.test.js - created at 2015-01-13, 01:07
var expect = require('chai').expect;
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var baseURL = 'http://localhost:3000/api/projetodepesquisa';

describe('projeto de Pesquisa api rest testing', function () {
	var id = null;

	var body = {
		nome : ch.Company.name(),
		anoInicio : new Date().getFullYear(),
		anoFim : new Date(2016,4),
		codigoProtocoloInstituicao : '1315654684689',
		resumo: ch.Lorem.paragraph(),
		financiamentoExterno: true,
		financiamentoAgencia: 'CAPS',
		financiamentoEntidade: 'CAPS',
		tipoPrograma: 'Pibic', 
		bolsa: true,
		bolsaAgencia: 'CNPQ',
		bolsaValor: 400.00,
		valorFinanciamento: 5000.00,
		inovacao: true,

	};
	it('expect create a projeto pesquisa', function (done) {

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
	  		.post(url.resolve(baseURL,'projetodepesquisa'))
	  		.send(body)
	  		.end(endHandler)
 	});

	it('expect get all projeto from DB', function (done) {
		function endHandler (err, res) {
			expect(err).to.not.exist;
  		expect(res).to.exist;
  		expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('Array');
			done();
		}

		superagent
	  		.get(url.resolve(baseURL,'projetodepesquisa'))
	  		.end(endHandler)
	});

	it('expect get one projeto by id',function (done) {

		function endHandler(err, res) {
			expect(err).to.not.exist;
  		expect(res).to.exist;
  		expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('object');
			done();
  		}

  		superagent
	  		.get(url.resolve(baseURL,'projetodepesquisa/'+id))
	  		.end(endHandler)
	});

	it('expect update one projeto pesquisa by id',function (done) {
		var bodyNew = {
			id : id ,
			nome : ch.Company.name(),
			anoInicio : new Date().getFullYear(),
			anoFim : new Date(2016 , 2),
			codigoProtocoloInstituicao : '1315654684689',
			resumo: ch.Lorem.paragraph(),
			financiamentoExterno: true,
			financiamentoAgencia: 'CAPS',
			financiamentoEntidade: 'CAPS',
			tipoPrograma: 'Pibic', 
			bolsa: true,
			bolsaAgencia: 'CNPQ',
			bolsaValor: 400.00,
			valorFinanciamento: 2800.00,
			inovacao : false,
		};

		function endHandler(err, res) {
			expect(err).to.not.exist;
			expect(res).to.exist;		
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('object');
			expect(res.body.result.id).to.eql(id);
			expect(res.body.result.valorFinanciamento).to.eql(bodyNew.valorFinanciamento);
			expect(body.valorFinanciamento).to.not.eql(bodyNew.valorFinanciamento);
			expect(body.inovacao).to.not.eql(bodyNew.inovacao);
			done();
		}

		superagent
	  		.put(url.resolve(baseURL,'projetodepesquisa/'+id))
	  		.send(bodyNew)
	  		.end(endHandler);
	});

	it('expect delete one projeto pesquisa by id',function (done) {
		
		function endHandler(err, res) {
			expect(err).to.not.exist;
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			done();
		}	

		superagent
			.del(url.resolve(baseURL,'projetodepesquisa/'+id))
			.end(endHandler);
	});
	var rel;
	it('expect project pequisa create RealationShip with Area',function (done) {
				
		rel = {
			projetoID : ch.Number.positive(from = 148, to = 155),
			areaID : ch.Number.positive(from = 140, to = 145)
		};
		
		function endHandler(err, res) {
			expect(err).to.not.exist;
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect('PERTENCE').to.eql(res.body.result.type);
			expect('Projeto pertence a Area').to.eql(res.body.result.properties.Projeto);
			done();
		}

		superagent
			.post(url.resolve(baseURL,'projetodepesquisa/area/rel/'))
			.send(rel)
			.end(endHandler);
	});

	it('expet project pequisa remove RealationShip with Area',function (done) {
		
		function endHandler(err, res) {
			expect(err).to.not.exist;
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			done();
		}

		superagent
			.del(url.resolve(baseURL,'projetodepesquisa/area/rel/'))
			.send(rel)
			.end(endHandler);
	});

});
