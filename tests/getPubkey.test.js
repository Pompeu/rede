// file: tests/getpubkey.test.js - created at 2015-04-24, 03:48
var should = require('chai').should();
var getPubKey =  require('../plugins/getPugKey');

describe('getPubkey', function () {
  
  it('it should be open ssh pub key', function (done) {
  
    function successHandler(key) {
      key.should.be.an("String");
      key.should.equal('AAAAB3NzaC1yc2EAAAADAQABAAABAQDABtYJthiaeDh5uqOTe//oHq3iacGP9JbfoXJPtuj1muSpNOOyXpZDnoA01euRV3rxHsbMfPczAEpNkaZZcPV0/hxgxFPT/H5FAlKAnd+9OKQn6OF6gdGoK9RhymzX2NSXgvReCS9liVcCVEPg3GS9O8MNjr4KcMo/K01LyChO7On/+GiPL4jbcmxo4cclrs+Ho8N37TuCgaSyWf/bh+ntQ0PWvowC3I09+G0aibzov8WVjPG+fE6sOfeUynf7J0azqr8RqMB3lZ6yJNC0S8vTJlRpWd+rj1KBC3172XHcBNShjk7S06sXqPlfsBLTF9t7OSMbzuqS7DzhgZ12xVuF');
      done();
    }

    getPubKey(successHandler);

  });
});
