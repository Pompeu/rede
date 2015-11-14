// file: middlewares/createPesquisador.js - created at 2015-01-07, 06:55


function createEquipeTecnicaHandler(req, res, next) {
  // start here with createPesquisador.js
  debug('EquipeTecnica create handler middlerware');

  var EquipeTecnica = models.EquipeTecnica;
  var body = req.body;
  
  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('EquipeTecnica create success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('EquipeTecnica create fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function createHandler(err, result) {
  	debug('create EquipeTecnica handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  EquipeTecnica.save(body , createHandler);

}


module.exports = exports = createEquipeTecnicaHandler;
