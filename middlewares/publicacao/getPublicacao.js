// file: middlewares/getPublicacao.js - created at 2015-01-16, 01:37
function getPublicacaoHandler(req, res, next) {
  // start here with getPublicacao.js
  debug('get publicacao handler middleware')

  var publicacao = models.Publicacao;
  var id =  req.params.id;

  res.locals.out = {err : null , result : { } , status : false};	

  function successHandler(result) {
  	debug('get publicacao success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get publicacao fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getHandler(err, result) {
  	debug('get publicacao handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  publicacao.read(id,getHandler);
}
module.exports = exports = getPublicacaoHandler;
