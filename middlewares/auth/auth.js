// file: middlewares/auth.js - created at 2015-01-05, 08:44
'use strict';

const jwt = require('jsonwebtoken'),
			bcrypt = require('bcryptjs'),
			getSecret =  require('../../configs/apikey');

function authHandler(req, res, next) {
	// start here with auth.js
	debug('auth handler middlerware');	

	let email =  req.body.email;
	let password = req.body.password;
	let User = models.User;

	res.locals.out = {err : null , result : { } , status : false};
	
	function successHandler(result) {
		debug('auth success handler');
		res.locals.out.status = true;
		res.locals.out.result = result;
		next();
	}

	function failHandler(err) {
		debug('auth fail handler');
		res.status(401);
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

		function compareHanlder(err, res) {
			debug('Compare Hanlder');
			if(res){
				successHandler({ id_token : createToken(result[0])});
			} 
			else failHandler(err);
		}
	}

	User.where({ email : email}, authUserHandler);

}

function createToken(user) {
	debug('Create Token');
	delete user.password;
	return jwt.sign(user,getSecret.value , { expiresIn : 60*5 });
}

module.exports = authHandler;
