// file: middlewares/deleteEquipeTecnica.js - created at 2015-01-07, 10:50
function deleteEquipeTecnicaHandler(req, res, next) {
  // start here with deleteEquipeTecnica.js
   debug('delete one EquipeTecnica deleteUserHandler')

    var id = req.params.id;
    
	res.locals.out = {err : null, status :  false};


	function successHandler() {
		debug("delete one EquipeTecnica sucess handler");
		res.locals.out.status =  true;		
		next();
	};


	function failHandler(err) {
		debug("delete one EquipeTecnica fail handler");
		res.locals.out.err = err;
		next();
	};

	function deleteHandler(err) {
		debug('delete one EquipeTecnica handler');
		
		if(!err){
			successHandler();
		}else{
			failHandler(err);
		}
	};

    models.db.delete(id,deleteHandler);
}
module.exports = exports = deleteEquipeTecnicaHandler;
