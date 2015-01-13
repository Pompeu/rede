// file: middlewares/deleteprojetodePesquisa.js - created at 2015-01-13, 04:23
function deleteprojetodePesquisaHandler(req, res, next) {
  // start here with deleteprojetodePesquisa.js
  debug('delete projeto pesquisa handler middlewares')

    var id = req.params.id;
    
	res.locals.out = {err : null, status :  false};


	function successHandler() {
		debug("delete projeto pesquisa sucess handler");
		res.locals.out.status =  true;		
		next();
	};


	function failHandler(err) {
		debug("delete projeto pesquisa fail handler");
		res.locals.out.err = err;
		next();
	};

	function deleteProjetoPesquisa(err) {
		debug('delete projeto pesquisa handler');
		
		if(!err){
			successHandler();
		}else{
			failHandler(err);
		}
	};

    models.db.delete(id,deleteProjetoPesquisa);
}
module.exports = exports = deleteprojetodePesquisaHandler;
