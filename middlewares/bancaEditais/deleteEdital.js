// file: middlewares/deleteEdital.js - created at 2015-01-13, 03:27
function deleteEditalHandler(req, res, next) {
  // start here with deleteEdital.js
  	debug('delete one Edital delete User Handler');

    var id = req.params.id;
    
	res.locals.out = {err : null, status :  false};


	function successHandler() {
		debug("delete one Edital sucess handler");
		res.locals.out.status =  true;		
		next();
	};


	function failHandler(err) {
		debug("delete one Edital fail handler");
		res.locals.out.err = err;
		next();
	};

	function deleteEdital(err) {
		debug('delete one Edital handler');
		
		if(!err){
			successHandler();
		}else{
			failHandler(err);
		}
	};
	
    models.db.delete(id,deleteEdital);
}
module.exports = exports = deleteEditalHandler;
