function neo() {
  'use strict';
  var dados = process.env.USER === 'pompeu'? 
  'http://localhost:7474' : require('../configs/db')(); 

  var db =  
    module.exports =
    require("seraph")
    (dados);
    
    return db;
}


module.exports = neo();