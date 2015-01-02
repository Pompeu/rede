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
		next(err);

	};

	function getOneHandler(err, result) {
		debug('get user handler');
		
		if(!err){
			successHandler(result);
		}else{
			failHandler(err);
		}
	};

	db.getNodeById(id, function (err, user) {
		if (err) return getOneHandler(err,null);
		var userFound = {id : user.id , data : user.data };
		getOneHandler(null, userFound);
	});
	
}
module.exports = exports = getUserHandler;

	/*	var query = [
	        'MATCH (user:User)',
	        'WHERE id(user) = {id}',
	        'RETURN user',
	    ].join('\n');

	    var params = {
	    	id : new Number(_id)
	    };
	    db.query(query, params, function (err, results) {
	        if (err) return callback(err);
	        var user = results.map(function (result) {
	        	return {
	        		id :result['user']._data.metadata.id,
	        		data : result['user'].data }
	        });
	        callback(null, user);
	    });*/