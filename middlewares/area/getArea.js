// file: middlewares/getArea.js - created at 2015-01-15, 05:00
function getAreaHandler(req, res, next) {
  // start here with getArea.js
  debug('Area get handler middlerware');
  
  var area = models.Area;

  var id = req.params.id;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('Area get success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('Area get fail handler '+err);
  	res.locals.out.err = err;
  	next();
  }

  function getHandler(err, result) {
  	debug('Area get handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

  area.read( id , getHandler);
}
module.exports = exports = getAreaHandler;
