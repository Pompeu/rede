// file: middlewares/getEditaisCreate.js - created at 2015-01-13, 02:26
function getEditaisHandler(req, res, next) {
  // start here with getEditaisCreate.js
  'use strict';
  debug('get banca editais handler');

  var bancaeditais = models.BancaEditais;
  var id = req.params.id;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('get banca editais success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get banca editais fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getHandler(err, result) {
  	debug('get banca editais handler');

  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  bancaeditais.read(id,getHandler);

}
module.exports = exports = getEditaisHandler;
