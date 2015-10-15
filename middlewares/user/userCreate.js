// file: middlewares/userCreate.js - created at 2015-01-01, 02:39
'use strict';

function userCreateHandler(req, res, next) {
	debug('user create middlerware handler');
	var bcrypt = require('bcryptjs');
	var user = models.User;	
  var body = req.body;
	
	res.locals.out = {err : null , result : {} , status : false};	

	function failHandler(err) {
	  	debug('create user fail handler'+err);
	  	res.locals.out.err = err;
	  	next();
	}

	function successHandler(result) {
	  	debug('create user success handler');
	  	res.locals.out.status = true;
	  	res.locals.out.result = result;
	  	next();
	}
	
	function createHandler(err, result) {
		debug('create user handler');
		if(!err){
	  	successHandler(result);
	  }else{
	  	failHandler(err);
	  }
	}

	bcrypt.hash(body.password, 8, function(err, hash) {
		debug('hash password');
		body.password = hash;
		user.save(body,createHandler);
	});
	
}
module.exports = exports = userCreateHandler;
