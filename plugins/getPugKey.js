// file: plugins/getPugKey.js - created at 2015-04-24, 03:51

function getPugKeyHandler(callback) {
  'use strict';
  var fs = require('fs');
  var pubKey = '/home/pompeu/.ssh/id_rsa.pub';
  
  fs.readFile(pubKey, 'utf8', function(err , data) {
      callback(data.split(' ')[1]);
  });

  return callback;
}
module.exports = exports = getPugKeyHandler;
