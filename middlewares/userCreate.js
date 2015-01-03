// file: middlewares/userCreate.js - created at 2015-01-01, 02:39
'use strict';

function userCreateHandler(req, res, next) {
	debug('user create middlerware handler')
	
	var user = models.User(req.body);

	res.locals.out = {err : null , result : {} , status : false};	

	function failHandler(err) {
	  	debug('create user fail handler');
	  	res.locals.out.err = err;
	  	next();
	};

	function successHandler(result) {
	  	debug('create user success handler');
	  	res.locals.out.status = true;
	  	res.locals.out.result = result;
	  	next();
	};
	
	function createHandler(err, result) {
		debug('create user handler');		
		if(!err){
	  		successHandler(result);
	  	}else{
	  		failHandler(err);
	  	}
	};

	var query = [
		'CREATE (user:User {data})',
		'RETURN user',
		].join('\n');
		
	var params = {
		data: user
	};
	
	models.db.query(query, params, createHandler)
	
	
}
module.exports = exports = userCreateHandler;
