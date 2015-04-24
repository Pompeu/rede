// file: middlewares/deleteArea.js - created at 2015-01-15, 05:10
function deleteAreaHandler(req, res, next) {
  // start here with deleteArea.js
  'use strict';
  debug('delete one Area deleteUserHandler');

  var id = req.params.id;
    
	res.locals.out = {err : null, status :  false};

	function successHandler() {
		debug("delete one Area sucess handler");
		res.locals.out.status =  true;		
		next();
	}


	function failHandler(err) {
		debug("delete one Area fail handler");
		res.locals.out.err = err;
		next();
	}

	function deleteArea(err) {
		debug('delete one Area handler');
		
		if(!err){
			successHandler();
		}else{
			failHandler(err);
		}
	}

  models.db.delete(id,deleteArea);
}
module.exports = exports = deleteAreaHandler;
