// file: tests/bancaEditais.test.js - created at 2015-01-13, 01:24
var expect = require('chai').expect;
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var baseURL = 'http://localhost:3000/api/bancaeditais';

describe('bancaEditais api restful testing', function () {
	var id = null;
	var body = {
			agencia : ch.Name.name(),
			dataAbertura: new Date(),
			dataEncerramento : new Date(),
			paginaEdital : 'www.uol.com.br'
	}

 	it('expect create one a new  bancaEditais', function (done) {

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
				.post(url.resolve(baseURL,'bancaeditais'))
				.send(body)
				.end(endHandler);
  	});

  	it('expect get one bancaEditais by id',function (done) {

  		function endHandler(err, res) {
  			expect(err).to.not.exist;
			expect(res).to.exist;		
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('object');
			expect(res.body.result.id).to.eql(id);
			done();
  		}

  		superagent
			.get(url.resolve(baseURL,'bancaeditais/'+id))
			.end(endHandler);
  	});

  	it('expect get all bancaEditais from db', function (done) {

  		function endHandler (err, res) {
  			expect(err).to.not.exist;
			expect(res).to.exist;		
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('Array');
			done();
  		}

  		superagent
			.get(url.resolve(baseURL,'bancaeditais'))
			.end(endHandler);
  	})

  	it('expect update one bancaEditais with id',function (done) {
  		var bodyNew = {
  			id : id ,
			agencia : ch.Name.name(),
			dataAbertura: new Date(),
			dataEncerramento : new Date(),
			paginaEdital : 'www.uol2.com.br'
		}

  		function endHandler(err, res) {
  			expect(err).to.not.exist;
			expect(res).to.exist;		
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('object');
			expect(res.body.result.id).to.eql(id);
			expect(res.body.result.paginaEdital).to.eql(bodyNew.paginaEdital);
			done();
  		}

  		superagent
			.put(url.resolve(baseURL,'bancaeditais/'+id))
			.send(bodyNew)
			.end(endHandler);
  	});

  	it('expect delete one bancaEdital by id from db',function (done) {

  		function endHandler (err, res) {
  			expect(err).to.not.exist;
			expect(res).to.exist;		
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			done();
  		}

  		superagent
			.del(url.resolve(baseURL,'bancaeditais/'+id))
			.end(endHandler);
  	})
});
