// file: middlewares/updateArea.js - created at 2015-01-15, 05:15
function updateAreaHandler(req, res, next) {
  // start here with updateArea.js
  debug('update area handler middleware');

  var area = models.Area;

  var id = req.params.id;
 	
  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
  	debug('update area success handler');
  	res.locals.out.result = result;
  	res.locals.out.status = true;
  	next();
  }

  function failHandler(err) {
  	debug('update area fail handler');
  	res.locals.out.err = err;
  	next();
  }

  function updateHandler(err, result) {
  	debug('update area handler');
  	if(!err){
  		successHandler(result);
  	}else{
  		failHandler(err);
  	}
  }

	area.read(id , function (err , result) {
  		result = req.body;
  		area.save(result,updateHandler)	
  	});
}

module.exports = exports = updateAreaHandler;
