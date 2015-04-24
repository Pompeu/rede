// file: middlewares/updateUser.js - created at 2015-01-01, 09:23


function updateUserHandler(req, res, next) {
  // start here with updateUser.js
  'use strict';
	debug('update user middlerware handler');

	var user = models.User;
	var id = req.params.id;

	res.locals.out = {err : null , result : {} ,status : false};	

	function failHandler(err) {
	  	debug('update user fail handler');
	  	res.locals.out.err = err;
	  	next();
	}

	function successHandler(result) {
	  	debug('update user success handler');
	  	res.locals.out.status = true;
	  	res.locals.out.result = result;

	  	next();
	}
	
	function updateHandler(err, result) {
		debug('update user handler');
		if(!err){
	  		successHandler(result);
	  	}else{
	  		failHandler(err);
	  	}
	}

	user.read(id,function(err,result) {
		result = req.body;
		user.save(result,updateHandler)	;
	});
	
}
module.exports = exports = updateUserHandler;
