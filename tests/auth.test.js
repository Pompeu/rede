// file: tests/auth.test.js - created at 2015-01-06, 04:04
var expect = require('chai').expect;
var superagent = require('superagent');
var url = require('url');
var baseURL = 'http://localhost:3000/login';

describe('auth testing', function () {
	
  var body = {
		email : 'itacir@hotmail.com',
		password : '552525ia',
	}

  it('retrive true email and password is ok', function (done) {

  	function endHandler(err, res) {
  		expect(err).to.be.null;
  		expect(res).to.exist;
  		expect(res.body.result).to.an('object');
  		done();
  	};

  	superagent
  		.post(url.resolve(baseURL,'login'))
  		.send(body)
  		.end(endHandler)
  });
  it('not retrive password in response of login' ,function (done) {
      function endHandler(err, res) {
      expect(err).to.be.null;
      expect(res).to.exist;
      expect(res.body.result).to.an('object');
      expect(res.body.result.password).to.be.undefined;
      done();
    };

    superagent
      .post(url.resolve(baseURL,'login'))
      .send(body)
      .end(endHandler)

  })
  it('expect error if email or password is not ok', function (done) {
  	
    var login = {
  		email : 'flo@totam.net.com',
  		password : '927135321',
  	}

  	function endHandler(err, res) {
  		expect(err).to.be.null;
  		expect(res).to.exist;
  		expect(res.body.err).to.eql('login or passoword error');
  		done();
  	};

  	superagent
  		.post(url.resolve(baseURL,'login'))
  		.send(login)
  		.end(endHandler)
  });
});
