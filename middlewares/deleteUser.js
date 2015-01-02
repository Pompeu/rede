// file: middlewares/deleteUser.js - created at 2015-01-01, 07:57
var db = require('../models/neo');

function deleteUserHandler(req, res, next) {
  // start here with deleteUser.js
    debug('delete one user deleteUserHandler')

    var id = req.params.id;
    
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

	function deleteUser(err) {
		debug('delete one user handler');
		
		if(!err){
			successHandler();
		}else{
			failHandler(err);
		}
	};

	var query = [
        'MATCH (user:User)',
        'WHERE ID(user) = {id}',
        'DELETE user',
    ].join('\n')

    var params = {
    	id : new Number(id)
    };
    db.query(query, params, deleteUser)
	
}
module.exports = exports = deleteUserHandler;
