// file: tests/publicacao.test.js - created at 2015-01-16, 12:44
'use strict';

let expect = require('chai').expect;
let superagent = require('superagent');
let ch = require('charlatan');
let url = require('url');
let baseURL = 'http://localhost:3000/api/publicacao';
let baseURLLogin = 'http://localhost:3000/api/login';


describe('publicacao api restful testing', () => {
  var id = null;
  var body = null;
	var key = 'Bearer ';

	before( done => {
		superagent
  		.post(url.resolve(baseURLLogin,'login'))
  		.send({email : 'itacir@hotmail.com' , password : '552525ia'})
  		.end((err , res) => {
				key +=  res.body.result.id_token;
				done();
			});
	});

  it('expect create a publicaccao', done => {
  	
  	body = {
  		ano  : ch.Helpers.rand(2015, 2000),
  		tipo : ch.Name.title(),
  		formato : ch.Company.bs(),
  		name  : ch.Name.name() ,
  	};
    
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
			.set('Authorization', key)
  		.send(body)
  		.end(endHandler);
  });

  it('expect get all publicacao from db' , done => {
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
			.set('Authorization', key)
  		.end(endHandler);
  });

   it('expect get one publicacao by id from db' , done => {
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
			.set('Authorization', key)
  		.end(endHandler);
  });
   
   it('expect update one publicacao by id from db' , done => {
   	
   	let bodyNew = {
  		ano  : ch.Helpers.rand(2015, 1900),
  		tipo : ch.Name.title(),
  		formato : ch.Company.bs(),
  		name  : ch.Name.name() ,
  	};

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
			.set('Authorization', key)
  		.send(bodyNew)
  		.end(endHandler);
  });

  it('expect delete one publicacao by id from db' , done => {
  	function endHandler	(err , res) {
		  expect(err).to.not.exist;
  		expect(res).to.exist;
  		expect(res.body.status).to.true;
		  expect(res.body.err).to.null;
		  done();
  	}
  	superagent
  		.del(url.resolve(baseURL,'publicacao/'+id))
			.set('Authorization', key)
  		.end(endHandler);
  });
});
