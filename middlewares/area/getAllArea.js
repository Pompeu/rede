// file: middlewares/getAllArea.js - created at 2015-01-15, 05:06
function getAllAreaHandler(req, res, next) {
  // start here with getAllArea.js
  'use strict';
  debug('Area getAll handler middlerware');
  
  var area = models.Area;

  res.locals.out = {err : null , result : [] , status : false};	

  function successHandler(result) {
  	debug('Area getAll success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('Area getAll fail handler '+err);
  	res.locals.out.err = err;
  	next();
  }

  function getHandler(err, result) {
  	debug('Area getAll handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  area.findAll(getHandler);
}
module.exports = exports = getAllAreaHandler;
