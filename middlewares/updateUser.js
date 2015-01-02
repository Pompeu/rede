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
	  	next();
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

	var query = [
		'MATCH (user:User)',
		'WHERE ID(user) = {id}',
		'SET user = {user}',
		'RETURN user',
		].join('\n');
		
	var params = {
		id: new Number(id),
		user : user
	};
	db.query(query, params, function (err, results) {
		if(err) updateHandler(err, null)
		var user = 	{ id : results[0]['user'].id , data : results[0]['user'].data };
		updateHandler(null, user);
	});
	
}
module.exports = exports = updateUserHandler;
/*
cypher('MATCH (n:User) WHERE ID(n) = '+6+' SET n.name = '
 +JSON.stringify("Jorico")+' , n.sname ='+JSON.stringify(user.sname)+'
  , n.email ='+JSON.stringify(user.email)+'  RETURN  n')
var query = [
		'CREATE (user:User {data})',
		'RETURN user',
		].join('\n');
		
	var params = {
		data: user
	};
	db.query(query, params, function (err, results) {
		if (err) return createHandler(err,null);
		var user = results[0]['user'];
			createHandler(null,{id : user.id , data : user.data })
	});

*/