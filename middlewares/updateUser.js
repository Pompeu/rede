// file: middlewares/updateUser.js - created at 2015-01-01, 09:23
'use strict';

function updateUserHandler(req, res, next) {
  // start here with updateUser.js
	debug('user update middlerware handler')

	/*var user = models.User(req.body);*/
	var id = req.params.id;

	res.locals.out = {err : null , result : {} ,status : false};	

	function failHandler(err) {
	  	debug('update user fail handler');
	  	res.locals.out.err = err;
	  	next();
	};

	function successHandler(result) {
	  	debug('update user success handler');
	  	res.locals.out.status = true;
	  	res.locals.out.result = result;

	  	next();
	};
	
	function updateHandler(err, result) {
		debug('update user handler');
		if(!err){
	  		successHandler(result);
	  	}else{
	  		failHandler(err);
	  	}
	};

	models.db.read(id,function(err,result) {
		result = req.body
		models.db.save(result,updateHandler)	
	});
	
}
module.exports = exports = updateUserHandler;
