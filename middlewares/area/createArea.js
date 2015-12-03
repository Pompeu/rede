// file: middlewares/createArea.js - created at 2015-01-15, 02:19
function createAreaHandler(req, res, next) {
  // start here with createArea.js
  'use strict';
  debug('Area create handler middlerware');

  const area = models.Area;
  const body = req.body;

  res.locals.out = {err : null , result : {} , status : false};	

  function successHandler(result) {
    debug('Area create success handler');
    res.locals.out.result = result;
    res.locals.out.status = true;
    next();
  }

  function failHandler(err) {
    debug('Area create fail handler ');
    res.status(400);
    res.locals.out.err = `${err}`;
    next();
  }

  function createHandler(err, result) {
    debug('Area create  handler');
    if(!err){
      successHandler(result);
    }else{
      failHandler(err);
    }
  }

  area.save( body , createHandler);
}
module.exports = exports = createAreaHandler;
