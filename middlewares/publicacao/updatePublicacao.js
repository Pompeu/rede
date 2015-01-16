// file: middlewares/updatePublicacao.js - created at 2015-01-16, 01:47
function updatePublicacaoHandler(req, res, next) {
  // start here with updatePublicacao.js
   debug('update publicacao handler middleware')

  var publicacao = models.Publicacao;
  var id =  req.params.id;
  var body = req.body;

  res.locals.out = {err : null , result : { } , status : false};	

  function successHandler(result) {
  	debug('update publicacao success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('update publicacao fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function updateHandler(err, result) {
  	debug('update publicacao handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }
  publicacao.read(id , function (err , result) {
  		result = req.body;
  		publicacao.save(result,updateHandler)	
  });
}
module.exports = exports = updatePublicacaoHandler;
