// file: tests/grupo.test.js - created at 2015-01-06, 03:56
var expect = require('chai').expect;
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var baseURL = 'http://localhost:3000/api/user';
var Area = require('../models').Area;


describe('tests for a grupo', function () {

  var data = {
  		nomeArea 	: "Algorithmic",
  		subCodigo 	: "Genetic",
  		subArea 	: "Optimality",
  		subNivel 	: "Academic"
  }
  	
  it('grupo acessible and to be an object', function (done) {
  	var areaPesquisa = new Area(data);
  	expect(areaPesquisa).to.be.an('object');
    expect(Area.calc(2,2)).to.eql(4);
    expect(data).to.eql(areaPesquisa.show());
  	done();
  });

});
