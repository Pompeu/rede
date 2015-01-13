// file: middlewares/getAllEmpresa.js - created at 2015-01-13, 06:04
function getAllEmpresaHandler(req, res, next) {
  // start here with getAllEmpresa.js
  debug('getAll empresas handler')

  var empresa = models.Empresa;
  

  res.locals.out = {err : null , result : [] , status : false};	

  function successHandler(result) {
  	debug('getAll empresas success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('getAll empresas fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getAllHandler(err, result) {
  	debug('getAll empresas handler');

  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  empresa.findAll({},getAllHandler);
}
module.exports = exports = getAllEmpresaHandler;
