// file: tests/userCreate.test.js - created at 2015-01-01, 02:40
var expect = require('chai').expect;
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var baseURL = 'http://localhost:3000/api/user';


describe('user restful testing', function () {

	var body = null;
	var id = 0;

	it('expect be create a user', function (done) {
		body = {
			name : ch.Name.firstName(),
			sname : ch.Name.lastName(),
			password : ch.numerify('########'),
			email : ch.Internet.email(),
			dateCadastro :  new Date(),
		}

		function endHandler(err, res) {
			expect(err).to.be.null;
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('object');
			expect(res.body.result.id).to.an('Number');
			id = res.body.result.id;
			expect(res.status).to.eql(200);
			done();
		};

		superagent
			.post(url.resolve(baseURL,'user'))
			.send(body)
			.end(endHandler);

	});

	it('expect empty result if post is empty',function(done) {
		function endHandler(err,res) {
			expect(err).to.be.null;
			expect(res).to.exist;
			expect(res.body.status).to.false;
			expect(res.body.err).to.not.null;
			expect(res.status).to.eql(200);
			done();
		};

		superagent
			.post(url.resolve(baseURL,'user'))
			.send({})
			.end(endHandler)
	});

	it('expect getall user from database',function (done) {
			
		function endHandler(err,res) {
			expect(err).to.be.null();
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('Array');
			expect(res.status).to.eql(200);
			done();	
		};

		superagent
			.get(url.resolve(baseURL,'user'))
			.end(endHandler);
	});
	
	it('expect get one user by id from database',function(done) {
		
		function endHandler (err, res) {
			expect(err).to.be.null();
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.body.result).to.an('object');
			expect(res.status).to.eql(200);
			done();
		}
		
		superagent
			.get(url.resolve(baseURL,'user/'+id))
			.end(endHandler);
	});

	
	it('expect one user update by id',function(done) {

		var bodyNew = {
			id : id,
			name : ch.Name.firstName(),
			sname : ch.Name.lastName(),
			password : ch.numerify('########'),
			email : ch.Internet.email(),
			dateCadastro :  body.dateCadastro,
		}

		function endHandler(err,res) {
			
			expect(err).to.be.null();
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.body.err).to.null;
			expect(res.status).to.eql(200);
			done();
		}

		superagent
			.put(url.resolve(baseURL,'user/'+id))
			.send(bodyNew)
			.end(endHandler)
	});

	it('expect one will be remove', function(done) {

		function endHandler(err,res) {
			expect(err).to.be.null;
			expect(res).to.exist;
			expect(res.body.status).to.true;
			expect(res.status).to.eql(200);
			done();
		}

		superagent
			.del(url.resolve(baseURL,'user/'+id))
			.end(endHandler);
	});
});
