// file: tests/getpubkey.test.js - created at 2015-04-24, 03:48
var should = require('chai').should();
var getPubKey =  require('../plugins/getPugKey');
var getConfigSHKey = require('../configs/apikey');

describe('getPubkey', function () {
  'use strict';
  it('it should be open ssh pub key', function (done) {
    
    function end(key) {
      key.should.be.an("String");
      key.should.have.length(372);
      done();
    }

    getPubKey(end);
  });

  it('it shoud be open key ssh from config', function() {
    var key = getConfigSHKey();
    key.should.be.an("object");
    key.value.should.have.length(372);
  });
});
