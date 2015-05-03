// file: tests/db.test.js - created at 2015-05-02, 11:57
var should = require('chai').should();
var DB = require('../configs/db');

describe('db', function () {
  it('db should have name, pass and serverlink',
  function () {
    var db = DB();    
    db.should.be.an("object");
    db.should.have.property("server");
    db.should.have.property("user");
    db.should.have.property("pass");
  });
});
