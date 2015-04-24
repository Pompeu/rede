// file: middlewares/getAllPesquisador.js - created at 2015-01-07, 08:01
function getAllEquipeTecnicaHandler(req, res, next) {
  // start here with getAllPesquisador.js
  'use strict';
  debug('get all EquipeTecnica handler');

  var EquipeTecnica = models.EquipeTecnica;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('get all EquipeTecnica success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get all EquipeTecnica fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getAllHandler(err, result) {
  	debug('get all EquipeTecnica handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  EquipeTecnica.findAll({},getAllHandler);



}
module.exports = exports = getAllEquipeTecnicaHandler;
