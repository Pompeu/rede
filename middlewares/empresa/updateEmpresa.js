// file: middlewares/updateEmpresa.js - created at 2015-01-13, 06:10
function updateEmpresaHandler(req, res, next) {
  // start here with updateEmpresa.js
  'use strict';
  debug('update empresa handler middleware');

  var empresa = models.Empresa;
  var id = req.params.id;
 	
  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('update empresa success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('update empresa fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function updateHandler(err, result) {
  	debug('update empresa handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

	empresa.read(id , function (err , result) {
  		result = req.body;
  		empresa.save(result,updateHandler);	
  });
}
module.exports = exports = updateEmpresaHandler;
