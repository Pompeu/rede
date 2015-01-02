// file: middlewares/deleteUser.js - created at 2015-01-01, 07:57
var db = require('../models/neo');
function deleteUserHandler(req, res, next) {
  // start here with deleteUser.js
    debug('delete one user deleteUserHandler')

    var id = req.params.id;
    var body = req.body;

	res.locals.out = {err : null, status :  false};


	function successHandler() {
		debug("delete one user sucess handler");
		res.locals.out.status =  true;		
		next();
	};


	function failHandler(err) {
		debug("delete one user fail handler");
		res.locals.out.err = err;
		next(err);
	};

	function delOneHandler(err) {
		debug('delete one user handler');
		
		if(err){
			successHandler();
		}else{
			failHandler(err);
		}
	};

	function deleteUser(_id , callback) {
		
		 var query = [
	        'MATCH (user:User)',
	        'WHERE ID(user) = {id}',
	        'DELETE user',
	    ].join('\n')

	    var params = {
	    	id : new Number(_id)
	    };
	    db.query(query, params, function (err) {
	    	if(err) callback(err);
	    });
	};

	deleteUser(id, delOneHandler);
}
module.exports = exports = deleteUserHandler;
