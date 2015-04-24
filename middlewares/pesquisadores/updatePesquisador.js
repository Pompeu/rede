// file: middlewares/updatePesquisador.js - created at 2015-01-07, 09:16
function updatePesquisadorHandler(req, res, next) {
  // start here with updatePesquisador.js
  'use strict';
  debug('update pesquisador handler middleware');

  var pesquisador = models.Pesquisador;
  var id = req.params.id;
 	
  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('update pesquisador success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('update pesquisador fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function updateHandler(err, result) {
  	debug('update pesquisador handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

	pesquisador.read(id , function (err , result) {
  		result = req.body;
  		pesquisador.save(result,updateHandler);	
  });

}
module.exports = exports = updatePesquisadorHandler;
