// file: middlewares/getAllprojetodePesquisa.js - created at 2015-01-13, 02:36
'use strict';
function getAllprojetodePesquisaHandler(req, res, next) {
  // start here with getAllprojetodePesquisa.js
  debug('get all projetopesquisa handler');

	const projetopesquisa = models.ProjetodePesquisa;
	let limit = req.params.limit || 20;
	let offset = req.params.offset || 0;

  res.locals.out = {err : null , result : [] , status : false};	

  function successHandler(result) {
  	debug('get all projetopesquisa success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get all projetopesquisa fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getAllHandler(err, result) {
  	debug('get all projetopesquisa handler');
  	err ? failHandler(err) : successHandler(result) ;
  }

  projetopesquisa.findAll({ limit : limit , offset : offset}, getAllHandler);
  
}

module.exports = exports = getAllprojetodePesquisaHandler;
