// file: middlewares/updatePesquisador.js - created at 2015-01-07, 09:16
function updateEquipeTecnicaHandler(req, res, next) {
  // start here with updatePesquisador.js
  debug('update EquipeTecnica handler middleware');

  var EquipeTecnica = models.EquipeTecnica;
  var id = req.params.id;
 	
  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('update EquipeTecnica success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('update EquipeTecnica fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function updateHandler(err, result) {
  	debug('update EquipeTecnica handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

	EquipeTecnica.read(id , function (err , result) {
  		result = req.body;
  		EquipeTecnica.save(result,updateHandler)	
  });

}
module.exports = exports = updateEquipeTecnicaHandler;
