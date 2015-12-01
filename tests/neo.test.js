// file: tests/neo.test.js - created at 2015-05-03, 12:06
'use strict';

require('chai').should();
const neo4j = require('../models/neo');

describe('neo module test', function () {
  const neo = neo4j;

  it('neo should be a object', function () {
    neo.should.be.an("object");
  });

  it('neo should be have options', function () {
    neo.should.have.property("options");
  });

  it('neo should be have basic properts', function () {
    const options = neo.options;
    options.should.have.property("server");
    options.should.have.property("user");
    options.should.have.property("pass");
  });
});
