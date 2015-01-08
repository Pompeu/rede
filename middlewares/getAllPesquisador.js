// file: middlewares/getAllPesquisador.js - created at 2015-01-07, 08:01
function getAllPesquisadorHandler(req, res, next) {
  // start here with getAllPesquisador.js
  debug('get all pesquisador handler')

  var pesquisador = models.Pesquisador;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('get all pesquisador success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get all pesquisador fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getAllHandler(err, result) {
  	debug('get all pesquisador handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  pesquisador.findAll({},getAllHandler);



}
module.exports = exports = getAllPesquisadorHandler;
