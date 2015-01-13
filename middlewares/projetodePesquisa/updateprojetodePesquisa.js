// file: middlewares/updateprojetodePesquisa.js - created at 2015-01-13, 03:26
function updateprojetodePesquisaHandler(req, res, next) {
  // start here with updateprojetodePesquisa.js
  debug('update projeto pesquisa handler middleware');

  var projetoPesquisa = models.ProjetodePesquisa;
  var id = req.params.id;
 	
  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('update projeto pesquisa success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('update projeto pesquisa fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function updateHandler(err, result) {
  	debug('update projeto pesquisa handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  projetoPesquisa.read(id , function (err , result) {
	result = req.body;
	projetoPesquisa.save(result,updateHandler)	
  });
}
module.exports = exports = updateprojetodePesquisaHandler;
