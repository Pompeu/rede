// file: middlewares/getAllArea.js - created at 2015-01-15, 05:06
function getAllAreaHandler(req, res, next) {
  // start here with getAllArea.js
  'use strict';
  debug('Area getAll handler middlerware');
  
  const area = models.Area;
	const limit = req.params.limit || 20;
	const offset = req.params.offset || 0;

  res.locals.out = {err : null , result : [] , status : false};	

  function successHandler(result) {
  	debug('Area getAll success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('Area getAll fail handler ');
  	res.locals.out.err = err;
  	next();
  }

  function getHandler(err, result) {
  	debug('Area getAll handler');
  	!err ?successHandler(result) : failHandler(err);
  }

  area.findAll({limit : limit, offset : offset} ,getHandler);
}
module.exports = exports = getAllAreaHandler;
