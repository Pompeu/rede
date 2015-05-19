function neo() {
  'use strict';
  var dados =  require('../configs/db')();
  var local =   'http://localhost:7474';
  
  var db =  
    module.exports =
    require("seraph")
    (dados); 

    return db;
}


module.exports = neo();