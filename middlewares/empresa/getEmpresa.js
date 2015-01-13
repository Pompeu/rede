// file: middlewares/getEmpresa.js - created at 2015-01-13, 06:01
function getEmpresaHandler(req, res, next) {
  // start here with getEmpresa.js
  debug('get empresas handler')

  var empresa = models.Empresa;
  var id = req.params.id

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('get empresas success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get empresas fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getHandler(err, result) {
  	debug('get empresas handler');

  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  empresa.read(id,getHandler);
}
module.exports = exports = getEmpresaHandler;
