// file: middlewares/deletePublicacao.js - created at 2015-01-16, 01:42
function deletePublicacaoHandler(req, res, next) {
  // start here with deletePublicacao.js
  debug('delete publicacao handler middleware')

  var publicacao = models.Publicacao;

  var id =  req.params.id;

  res.locals.out = {err : null , status : false};	

  function successHandler(result) {
  	debug('delete publicacao success handler');
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('delete publicacao fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function deleteHandler(err, result) {
  	debug('delete publicacao handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  models.db.delete(id,deleteHandler);
}
module.exports = exports = deletePublicacaoHandler;
