// file: middlewares/getAllUser.js - created at 2015-01-01, 05:19
'use strict';

function getAllUserHandler(req, res, next) {
  // start here with getAllUser.js
  	debug('get all user middlerware');

  	var user = models.User;

	res.locals.out = {err : null , result: [ ] , status :  false};

	function successHandler(result) {
		debug("get all user sucess handler");
		res.locals.out.status =  true;
		res.locals.out.result = result;
		next();
	};


	function failHandler(err) {
		debug("get all user fail handler");
		res.locals.out.err = err;
		next();

	};

	function getAllHanler(err, result) {
		debug('get all user handler');		
		if(!err){
			successHandler(result);
		}else{
			failHandler(err);
		}
	};
	
    user.findAll({},getAllHanler);
	
}
module.exports = exports = getAllUserHandler;
