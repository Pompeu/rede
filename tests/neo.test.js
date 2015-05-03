// file: tests/neo.test.js - created at 2015-05-03, 12:06
var should = require('chai').should(),
    neo = require('../models/neo');

describe('neo module test', function () {
  var neoDB = new neo();

  it('neo should be a object', function () {
    neoDB.should.be.an("object");
  });

  it('neo should be have options', function () {
    neoDB.should.have.property("options");
  });

  it('neo should be have basic properts', function () {
    var options = neoDB.options;
    options.should.have.property("server");
    options.should.have.property("user");
    options.should.have.property("pass");
  });


});
