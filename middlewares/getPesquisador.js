// file: middlewares/getPesquisador.js - created at 2015-01-07, 07:59
function getPesquisadorHandler(req, res, next) {
  // start here with getPesquisador.js
    debug('get pesquisador handler')

  var pesquisador = models.Pesquisador;
  var id = req.params.id

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('get pesquisador  success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get pesquisador  fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getHandler(err, result) {
  	debug('get pesquisador handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  pesquisador.read(id,getHandler);

}
module.exports = exports = getPesquisadorHandler;
