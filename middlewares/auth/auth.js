// file: middlewares/auth.js - created at 2015-01-05, 08:44
var jwt = require('jsonwebtoken'),
		_  = require('lodash'),
		bcrypt = require('bcryptjs'),
		getSecret =  require('../../configs/apikey');

function authHandler(req, res, next) {
	// start here with auth.js
	'use strict';	
	debug('auth handler middlerware');	

	var email =  req.body.email;
	var password = req.body.password;
	var User = models.User;
	
	res.locals.out = {err : null , result : { } , status : false};
	
	function successHandler(result) {
		debug('auth success handler');
		res.locals.out.status = true;
		res.locals.out.result = result;
		next();
	}

	function failHandler(err) {
		debug('auth fail handler');
		res.locals.out.err = err || 'login or passoword error';
		next();
	}

	function authUserHandler (err , result) {
		debug('auth  User Auth handler');
		if(result && result.length == 1){
			bcrypt.compare(password, result[0].password, compareHanlder);
		}else{
			failHandler(err);
		}
	}
	User.db.find({ email : email}, authUserHandler);
}

function compareHanlder(err , res) {
	if(res){
		delete result[0].password;
		successHandler({ id_token : createToken(result[0])});
	} 
	else failHandler(err);
}

function createToken(user) {
	var key = getSecret();
	return jwt.sign(user,key.value , { expiresInMinutes: 60*5 });
}

module.exports = exports = authHandler;
