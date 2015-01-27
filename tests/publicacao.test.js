// file: tests/publicacao.test.js - created at 2015-01-16, 12:44
var expect = require('chai').expect;
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var baseURL = 'http://localhost:3000/api/publicacao';

describe('publicacao api restful testing', function () {
  var id = null;
  var body = null;

  it('expect create a publicaccao', function (done) {
  	
  	body = {
  		ano  : ch.Helpers.rand(2015, 2000),
  		tipo : ch.Name.title(),
  		formato : ch.Company.bs(),
  		name  : ch.Name.name() ,
  	}
    
  	function endHandler	(err , res) {
  		expect(err).to.not.exist;
  		expect(res).to.exist;   
  		expect(res.body.status).to.true;
  		expect(res.body.err).to.null;
  		expect(res.body.result).to.an('object');
  		expect(res.body.result.id).to.an('Number');
  		id = res.body.result.id;
  		expect(id).to.an('Number');
  		done();
  	}

  	superagent
  		.post(url.resolve(baseURL,'publicacao'))
  		.send(body)
  		.end(endHandler)
  });

  it('expect get all publicacao from db' , function (done) {
  	function endHandler	(err , res) {
  		expect(err).to.not.exist;
  		expect(res).to.exist;   
  		expect(res.body.status).to.true;
  		expect(res.body.err).to.null;
  		expect(res.body.result).to.an('Array');
  		done();
  	}
  	superagent
  		.get(url.resolve(baseURL,'publicacao'))
  		.end(endHandler)
  })

   it('expect get one publicacao by id from db' , function (done) {
  	function endHandler	(err , res) {
  		expect(err).to.not.exist;
  		expect(res).to.exist;   
  		expect(res.body.status).to.true;
  		expect(res.body.err).to.null;
  		expect(res.body.result).to.an('object');
  		done();
  	}
  	superagent
  		.get(url.resolve(baseURL,'publicacao/'+id))
  		.end(endHandler)
  });
   
   it('expect update one publicacao by id from db' , function (done) {
   	
   	bodyNew = {
  		ano  : ch.Helpers.rand(2015, 1900),
  		tipo : ch.Name.title(),
  		formato : ch.Company.bs(),
  		name  : ch.Name.name() ,
  	}

  	function endHandler	(err , res) {
		  expect(err).to.not.exist;
  		expect(res).to.exist;
  		expect(res.body.status).to.true;
  		expect(res.body.err).to.null;
  		expect(res.body.result).to.an('object');
  		expect(res.body.result).to.not.eql(body);
  		done();
  	}

  	superagent
  		.put(url.resolve(baseURL,'publicacao/'+id))
  		.send(bodyNew)
  		.end(endHandler)
  });

   it('expect delete one publicacao by id from db' , function (done) {
  	function endHandler	(err , res) {
		  expect(err).to.not.exist;
  		expect(res).to.exist;
  		expect(res.body.status).to.true;
		  expect(res.body.err).to.null;
		  done();
  	}
  	superagent
  		.del(url.resolve(baseURL,'publicacao/'+id))
  		.end(endHandler)
  })
});
