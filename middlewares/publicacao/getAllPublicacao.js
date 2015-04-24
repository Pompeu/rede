// file: middlewares/getAllPublicacao.js - created at 2015-01-16, 01:30
function getAllPublicacaoHandler(req, res, next) {
  // start here with getAllPublicacao.js
  'use strict';
  debug('get all publicacao handler middleware');

  var publicacao = models.Publicacao;

  res.locals.out = {err : null , result : [] , status : false};	

  function successHandler(result) {
  	debug('get all publicacao success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get all publicacao fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getAllHandler(err, result) {
  	debug('get all publicacao handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  publicacao.findAll({},getAllHandler);
}
module.exports = exports = getAllPublicacaoHandler;
