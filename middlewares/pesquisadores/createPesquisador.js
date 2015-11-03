// file: middlewares/createPesquisador.js - created at 2015-01-07, 06:55


function createPesquisadorHandler(req, res, next) {
  // start here with createPesquisador.js
  'use strict';
  debug('create pesquisador handler middlerware');

  var pesquisador = models.Pesquisador;
  var body = req.body;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('pesquisador create success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('pesquisador create fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function createHandler(err, result) {
  	debug('create pesquisador handler');
  	err ? failHandler(err) : 	successHandler(result);
  }

  pesquisador.save(body , createHandler);

}


module.exports = exports = createPesquisadorHandler;
