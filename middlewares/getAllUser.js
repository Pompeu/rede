// file: middlewares/getAllUser.js - created at 2015-01-01, 05:19
var db = require('../models/neo');

function getAllUserHandler(req, res, next) {
  // start here with getAllUser.js
  	debug('get all user middlerware')
	res.locals.out = {err : null , result: [] , status :  false};


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

	function getAll(callback) {
		debug('get all users')

		var query = [
	        'MATCH (user:User)',
	        'RETURN user',
	    ].join('\n');

	    db.query(query, null, function (err, results) {
	        if (err) return callback(err);
	        var users = results.map(function (result) {
	        	return 	{
	        		id :result['user']._data.metadata.id,
	        		data : result['user'].data }
	        });
	        callback(null, users);
	    });
	};

	getAll(getAllHanler);
}
module.exports = exports = getAllUserHandler;
