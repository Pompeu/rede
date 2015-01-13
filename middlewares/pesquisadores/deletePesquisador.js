// file: middlewares/deletePesquisador.js - created at 2015-01-07, 10:50
function deletePesquisadorHandler(req, res, next) {
  // start here with deletePesquisador.js
   debug('delete one pesquisador deleteUserHandler')

    var id = req.params.id;
    
	res.locals.out = {err : null, status :  false};


	function successHandler() {
		debug("delete one pesquisador sucess handler");
		res.locals.out.status =  true;		
		next();
	};


	function failHandler(err) {
		debug("delete one pesquisador fail handler");
		res.locals.out.err = err;
		next();
	};

	function deletePesquisador(err) {
		debug('delete one pesquisador handler');
		
		if(!err){
			successHandler();
		}else{
			failHandler(err);
		}
	};

    models.db.delete(id,deletePesquisador);
}
module.exports = exports = deletePesquisadorHandler;
