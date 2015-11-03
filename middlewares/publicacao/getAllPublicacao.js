// file: middlewares/getAllPublicacao.js - created at 2015-01-16, 01:30
function getAllPublicacaoHandler(req, res, next) {
  // start here with getAllPublicacao.js
  'use strict';
  debug('get all publicacao handler middleware');

  const publicacao = models.Publicacao;
  let limit = req.params.limit || 20;
	let offset = req.params.offset || 0;

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
  	err ? failHandler(err) : successHandler(result);
  }

	publicacao.findAll({ limit : limit , offset : offset}, getAllHandler);
}
module.exports = exports = getAllPublicacaoHandler;
