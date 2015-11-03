// file: plugins/getPugKey.js - created at 2015-04-24, 03:51
'use strict';
const fs = require('fs');
const pubKey = '/home/pompeu/.ssh/id_rsa.pub';

function getPugKeyHandler(callback) {
    
  fs.readFile(pubKey, 'utf8', function(err , data) {
    if(err) return callback(err);
    return callback(null,data.split(' ')[1]);
  });

}
module.exports = exports = getPugKeyHandler;
