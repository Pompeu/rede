// file: middlewares/projetodePesquisaCreate.js - created at 2015-01-13, 01:07
function projetodePesquisaCreateHandler(req, res, next) {
  // start here with projetodePesquisaCreate.js
  debug('projeto Pesquisa handler');
  
  var projetoPesquisa =  models.ProjetodePesquisa;

  var body = req.body;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('projeto Pesquisas  create success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('projeto Pesquisa  create fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function createHandler(err, result) {
  	debug('projeto Pesquisa  editais  handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  projetoPesquisa.save(body , createHandler);
}
module.exports = exports = projetodePesquisaCreateHandler;
