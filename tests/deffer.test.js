// file: tests/deffer.test.js - created at 2015-12-01, 03:42
'use strict';

require('chai').should();
const deffer = require('../plugins/deffer');
const fs = require('fs');

describe('deffer module', () => {

  it('should be deffer is A promise and have then with data', done => {
    var user = deffer(fs.readFile);
    user(__dirname+'/bancaEditais.test.js','utf8')
    .then( data => {
      data.should.be.exist;
      done();
    });
  });

  it('should be deffer with bad parameters give a reject', done => {
    var user = deffer(fs.readFile);
    user(__dirname+'/notexits.js','utf8')
    .then( data => data.should.be.not.exist)
    .catch( data => {
      data.should.be.exist;
      done();
    });
  });

  it('should be deffer without parameters give a reject', done => {
    var user = deffer();
    user()
    .then( data => data.should.be.not.exist)
    .catch( data => {
      data.should.be.exist;
      done();
    });
  });

});
