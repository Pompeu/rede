// file: tests/auth.test.js - created at 2015-01-06, 04:04
'use strict';

var expect = require('chai').expect;
var superagent = require('superagent');
var url = require('url');
var baseURL = 'http://localhost:3000/api/login';
var jwt = require('jsonwebtoken');
var getSecret =  require('../configs/apikey');

describe('auth testing', function () {
	
	function testHelper (body, endHandler) {
		superagent
  		.post(url.resolve(baseURL,'login'))
  		.send(body)
  		.end(endHandler);
	}	

  var body = {
		email : 'itacir@hotmail.com',
		password : '552525ia',
	};

  it('retrive true email and password is ok', function (done) {

  	function endHandler(err, res) {
  		expect(err).to.be.null;
  		expect(res).to.exist;
      expect(res.body.result.id_token).to.an('String');
      expect(res.body.status).to.be.ok;
      expect(res.status).to.eql(200);
  		done();
  	}
		testHelper(body,endHandler);	
  });

	it('should be a id_token cant have a property password', done => {
		
		function endHandler(err, res) {
			let token = res.body.result.id_token;
			let secret = getSecret.value;
      expect(res.body.status).to.be.ok;
      expect(res.body.err).to.be.null;
		  jwt.verify(token, secret , (err , decoded) => {
  			expect(decoded).to.not.have.property('password');
				done()
			});
  	}

		testHelper(body,endHandler);	

	});
  
  it('expect error if email or password is not ok', function (done) {
  	
    var login = {
  		email : 'flo@totam.net.com',
  		password : '927135321',
  	};

  	function endHandler(err, res) {
  		expect(err).to.be.null;
  		expect(res).to.exist;
  		expect(res.status).to.eql(401);
      expect(res.body.result.id_token).to.be.undefined;
  		expect(res.body.err).to.eql('login or passoword error');
  		done();
  	}

		testHelper(login,endHandler);	
  });
});
