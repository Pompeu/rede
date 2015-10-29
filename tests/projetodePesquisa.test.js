// file: tests/projetodePesquisaCreate.test.js - created at 2015-01-13, 01:07
'use strict';

let expect = require('chai').expect;
let superagent = require('superagent');
let ch = require('charlatan');
let url = require('url');
const baseURL = 'http://localhost:3000/api/projetodepesquisa';
const urlAuth = 'http://localhost:3000/api/login';

describe('projeto de Pesquisa api rest testing', () => {
	let id_token = 'Bearer ';
	let id = null;
	
	const login = {
		email : 'itacir@hotmail.com',
		password : '552525ia',
	};

	beforeEach("loging",function() {
    superagent
			.post(url.resolve(urlAuth,'login'))
			.send(login)
			.end(function (err , res) {
				id_token +=  res.body.result.id_token;
	  });
  });	

	const body = {
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

	it('expect create a projeto pesquisa', done => {

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

	it('expect get all projeto from DB', done => {
		function endHandler (err, res) {
			expect(err).to.not.exist;
  		expect(res).to.exist;
  		expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('Array');
			expect(res.body.result.length).to.eql(20);
			done();
		}

		superagent
	  		.get(url.resolve(baseURL,'projetodepesquisa'))
	  		.end(endHandler)
	});

	it('expect get one projeto by id', done => {

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
	  		.end(endHandler);
	});

	it('expect update one projeto pesquisa by id', done => {
		let bodyNew = {
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

/*	
	it('expect delete one projeto pesquisa by id',done => {
		
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

	let rel;
	let id_rel;

	it('expect project pequisa create RealationShip with Area', done => {
				
		rel = {
			projetoID : ch.Number.positive(148, 155),
			areaID : ch.Number.positive(140, 145)
		};
		
		function endHandler(err, res) {
			expect(err).to.not.exist;
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			id_rel = res.body.result.id;
			expect('PERTENCE').to.eql(res.body.result.type);
			expect('Projeto pertence a Area').to.eql(res.body.result.properties.Projeto);
			done();
		}

		superagent
			.post(url.resolve(baseURL,'projetodepesquisa/area/rel/'))
			.set('Authorization', id_token)
			.send(rel)
			.end(endHandler);
	});

	it('expect project_pesquisa remove RealationShip with Area',done => {
		
		function endHandler(err, res) {
			expect(err).to.not.exist;
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			done();
		}

		superagent
			.del(url.resolve(baseURL,'projetodepesquisa/area/rel/'+id_rel))
			.set('Authorization', id_token)
			.end(endHandler);
	});*/
});
