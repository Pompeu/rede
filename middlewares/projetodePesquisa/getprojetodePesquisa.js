// file: middlewares/getprojetodePesquisa.js - created at 2015-01-13, 03:13
function getprojetodePesquisaHandler(req, res, next) {
  // start here with getprojetodePesquisa.js
  debug('projeto pesquisa handler')

  var projetoPesquisa = models.ProjetodePesquisa;
  var id = req.params.id

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('get projeto pesquisa  success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get projeto pesquisa  fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getHandler(err, result) {
  	debug('get projeto pesquisa handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  projetoPesquisa.read(id,getHandler);
}
module.exports = exports = getprojetodePesquisaHandler;
