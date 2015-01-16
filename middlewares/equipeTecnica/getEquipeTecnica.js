// file: middlewares/getPesquisador.js - created at 2015-01-07, 07:59
function getEquipeTecnicaHandler(req, res, next) {
  // start here with getPesquisador.js
  debug('get EquipeTecnica handler')

  var EquipeTecnica = models.EquipeTecnica;
  var id = req.params.id

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('get pesquisador  success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('get EquipeTecnica  fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getHandler(err, result) {
  	debug('get EquipeTecnica handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  EquipeTecnica.read(id,getHandler);

}
module.exports = exports = getEquipeTecnicaHandler;
