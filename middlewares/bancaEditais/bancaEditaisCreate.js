// file: middlewares/bancaEditaisCreate.js - created at 2015-01-13, 02:04
function bancaEditaisCreateHandler(req, res, next) {
  // start here with bancaEditaisCreate.js
  debug('banca editais handler');
  
  var bancaEditais =  models.BancaEditais;

  var body = req.body;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('banca editais  create success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('banca editais  create fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function createHandler(err, result) {
  	debug('banca create  editais  handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  bancaEditais.save(body , createHandler);


}
module.exports = exports = bancaEditaisCreateHandler;
