// file: tests/empresa.test.js - created at 2015-01-13, 05:30
var expect = require('chai').expect;
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var baseURL = 'http://localhost:3000/api/empresa';

describe('empresa api restful testing', function () {
	var id = null;
	
	var body = {
		nome : ch.Name.name(),
		telefoneContato : ch.numerify('###########'), 
		endreco : ch.Address.streetAddress(),
		externo : true,
		emailContato : ch.Internet.email(),
		emailProfissional: ch.Internet.email(),
		logomarca : ch.Lorem.words(wordCount = 5, supplemental = false),
		homePage: ch.Internet.domainWord(),
	};

  	it('expect create one empresa ', function (done) {
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
				.post(url.resolve(baseURL,'empresa'))
				.send(body)
				.end(endHandler);
  	});

  	it('expect get one empresa by id from db',function (done) {
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
				.get(url.resolve(baseURL,'empresa/'+id))
				.send(body)
				.end(endHandler);
  	});

  	it('expect get all empresas from db',function (done) {
  		function endHandler(err, res) {
	  		expect(err).to.not.exist;
        expect(res).to.exist;		
        expect(res.body.status).to.true;
        expect(res.body.err).to.null;
        expect(res.body.result).to.an('Array');						
	  		done();
	  	}

	  	superagent
				.get(url.resolve(baseURL,'empresa'))
				.send(body)
				.end(endHandler);
  	});
  	it('expect update one empresa with id',function (done) {

  		var bodyNew = {
  			id : id ,
        nome : ch.Name.name(),
		    telefoneContato : ch.numerify('###########'), 
        endreco : ch.Address.streetAddress(),
        externo : true,
        emailContato : ch.Internet.email(),
        emailProfissional: ch.Internet.email(),
        logomarca : ch.Lorem.words(wordCount = 5, supplemental = false),
        homePage: ch.Internet.domainWord(),
      };

  		function endHandler(err, res) {
  			expect(err).to.not.exist;
        expect(res).to.exist;		
        expect(res.body.status).to.true;
        expect(res.body.err).to.null;
        expect(res.body.result).to.an('object');
        expect(res.body.result.id).to.eql(id);
        expect(res.body.result.logomarca).not.to.eql(bodyNew.logomarca);
        done();
  		}

  		superagent
        .put(url.resolve(baseURL,'empresa/'+id))
        .send(bodyNew)
        .end(endHandler);
  	});

  	it('expect delete one empresa from db',function(done) {
      function endHandler (err , res) {
        expect(err).to.not.exist;
        expect(res).to.exist;
        expect(res.body.status).to.true;
        expect(res.body.err).to.null;
        done();
      }
      superagent
          .del(url.resolve(baseURL,'empresa/'+id))
          .end(endHandler);
	  });
});
