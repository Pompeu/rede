// file: middlewares/createPublicacao.js - created at 2015-01-16, 12:44
function createPublicacaoHandler(req, res, next) {
  // start here with createPublicacao.js
  debug('Publicacao create handler middlerware');
  
  var publicacao = models.Publicacao;

  var body = req.body;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('Publicacao create success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('Publicacao create fail handler '+err);
  	res.locals.out.err = err;
  	next();
  }

  function createHandler(err, result) {
  	debug('Publicacao create  handler');
   
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  publicacao.save( body , createHandler);
  
}
module.exports = exports = createPublicacaoHandler;
