// file: middlewares/getUser.js - created at 2015-01-01, 06:46
'use strict';

function getUserHandler(req, res, next) {
  // start here with getUser.js
 	debug('get user middleware')

 	var body = req.body;
 	var id = req.params.id;
 	
 	res.locals.out = {err : null , result: {} , status :  false};

	function successHandler(result) {
		debug("get user sucess handler");
		res.locals.out.status =  true;
		res.locals.out.result = result;
		next();
	};


	function failHandler(err) {
		debug("get user fail handler");
		res.locals.out.err = err;
		next();

	};

	function getOneHandler(err, result) {
		debug('get user handler');
		
		if(!err){
			successHandler(result);
		}else{
			failHandler(err);
		}
	};

	models.db.read(id,function (err, user) {
    	if(err) getOneHandler(err);
    	getOneHandler(null,user);
    });
	
}
module.exports = exports = getUserHandler;
