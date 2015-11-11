// file: tests/getpubkey.test.js - created at 2015-04-24, 03:48
'use strict';
var should = require('chai').should();
var getPubKey =  require('../plugins/getPugKey');
var getConfigSHKey = require('../configs/apikey');

describe('getPubkey', function () {
  it('it should be open ssh pub key', function (done) {
    const pubKey = '/home/pompeu/.ssh/id_rsa.pub';

    function end(err, key) {
      key.should.be.an("string");
      key.should.have.length(372);
      done();
    }

    getPubKey(pubKey,end);
  });

  it('it shoud be open key ssh from config', function() {
    var key = getConfigSHKey;
    key.should.be.an("object");
    key.value.should.have.length(372);
  });

  it('should be get eror if key dont existe', () => {
    const pubKey = "";
    function end(err, data){
      err.should.be.exist;
      data.should.be.not.exist;
    }
    getPubKey(pubKey,end);
  });
});
