// file: plugins/getPugKey.js - created at 2015-04-24, 03:51
'use strict';
const fs = require('fs');

function getPugKeyHandler(path,callback) {

  fs.readFile(path, 'utf8', (err , data) => {
    err ? callback(err) : callback(null,data.split(' ')[1]);
  });

}
module.exports = exports = getPugKeyHandler;
