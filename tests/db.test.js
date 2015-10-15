// file: tests/db.test.js - created at 2015-05-02, 11:57
'use strict';

let should = require('chai').should();
let DB = require('../configs/db');

describe('db', () => {
  it('db should have name, pass and serverlink',() => {
    let db = DB();    
    db.should.be.an("object");
    db.should.have.property("server");
    db.should.have.property("user");
    db.should.have.property("pass");
  });
});
