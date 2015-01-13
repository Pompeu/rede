// file: middlewares/deleteEmpresa.js - created at 2015-01-13, 06:10
function deleteEmpresaHandler(req, res, next) {
  // start here with deleteEmpresa.js
  debug('delete one Empresa delete User Handler');

    var id = req.params.id;
    
	res.locals.out = {err : null, status :  false};


	function successHandler() {
		debug("delete one Empresa sucess handler");
		res.locals.out.status =  true;		
		next();
	};


	function failHandler(err) {
		debug("delete one Empresa fail handler");
		res.locals.out.err = err;
		next();
	};

	function deleteEdital(err) {
		debug('delete one Empresa handler');
		
		if(!err){
			successHandler();
		}else{
			failHandler(err);
		}
	};
	
    models.db.delete(id,deleteEdital);
}
module.exports = exports = deleteEmpresaHandler;
