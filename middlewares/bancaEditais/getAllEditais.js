// file: middlewares/getAllEditais.js - created at 2015-01-13, 03:04
function getAllEditaisHandler(req, res, next) {
  // start here with getAllEditais.js
  debug('getall bancaeditais handler middlerwares')

  var bancaeditais = models.BancaEditais;
 
  res.locals.out = {err : null , result : [] , status : false};	

  function successHandler(result) {
  	debug('getall bancaeditais success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('getall bancaeditais fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function getAllHandler(err, result) {
  	debug('getall bancaeditais handler');

  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  bancaeditais.findAll({},getAllHandler);
}
module.exports = exports = getAllEditaisHandler;
