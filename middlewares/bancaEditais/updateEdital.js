// file: middlewares/updateEdital.js - created at 2015-01-13, 03:26
function updateEditalHandler(req, res, next) {
  // start here with updateEdital.js
  debug('update edital handler middleware');

  var bancaeditais = models.BancaEditais;
  var id = req.params.id;
 	
  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('update edital success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('update edital fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function updateHandler(err, result) {
  	debug('update edital handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

	bancaeditais.read(id , function (err , result) {
  		result = req.body;
  		bancaeditais.save(result,updateHandler)	
  });
}
module.exports = exports = updateEditalHandler;
