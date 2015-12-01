// file: tests/db.test.js - created at 2015-05-02, 11:57
'use strict';

require('chai').should();
const DB = require('../configs/db');

describe('db', () => {
  it('db should have name, pass and serverlink',() => {
    let db = DB();    
    db.should.be.an("object");
    db.should.have.property("server");
    db.should.have.property("user");
    db.should.have.property("pass");
  });

  it('db should be use a out creditial if not local',done => {
    process.env.USER = "pompeu1";
    let db = DB();    
    db.should.be.an("object");
    db.should.have.property("server");
    db.should.have.property("user");
    db.should.have.property("pass");
    done();
  });
});
