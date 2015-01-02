// file: middlewares/updateUser.js - created at 2015-01-01, 09:23
var db = require('../models/neo');

function updateUserHandler(req, res, next) {
  // start here with updateUser.js
	debug('user update middlerware handler')
	
	var user = models.User(req.body);
	var id = req.params.id;

	res.locals.out = {err : null , result : {} ,status : false};	

	function failHandler(err) {
	  	debug('update user fail handler');
	  	res.locals.out.err = err;
	  	next(err);
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

	db.getNodeById(id, function (err, _user) {
		if (err) updateHandler(err,null);
		_user += user;
		_user.save(updateHandler(null, _user));
		
	});

}
module.exports = exports = updateUserHandler;
