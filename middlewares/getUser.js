// file: middlewares/getUser.js - created at 2015-01-01, 06:46
var db = require('../models/neo');

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

	var query = [
	        'MATCH (user:User)',
	        'WHERE id(user) = {id}',
	        'RETURN user',
	    ].join('\n');

	    var params = {
	    	id : new Number(id)
	    };
	    db.query(query, params, function (err, results) {
	        if (err) return getOneHandler(err,null);
	        var user = 	{ id : results[0]['user'].id , data : results[0]['user'].data };
			getOneHandler(null,user);
	       
	    });
	
}
module.exports = exports = getUserHandler;
