// file: middlewares/auth.js - created at 2015-01-05, 08:44

function authHandler(req, res, next) {
	// start here with auth.js
	debug('auth handler middlerware');
	var email =  req.body.email;
	var password = req.body.password;
	console.log(req.body)
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
		console.log(result);
		if(result && result != 0){
			if(result[0].password === password){
				successHandler(result[0]);
			}else{
				failHandler(err);	
			}	
		}else{
			failHandler(err);
		}		 
	}

	models.db.find({email : email} , authUserHandler);
	
}

module.exports = exports = authHandler;
