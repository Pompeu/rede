// file: middlewares/createEmpresa.js - created at 2015-01-13, 05:30
function createEmpresaHandler(req, res, next) {
  // start here with createEmpresa.js
  'use strict';
  debug('empresa create handler middlerware');
  
  var empresa =  models.Empresa;

  var body = req.body;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('empresas  create success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('empresa  create fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function createHandler(err, result) {
  	debug('empresa  create handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  empresa.save(body , createHandler);
}
module.exports = exports = createEmpresaHandler;
