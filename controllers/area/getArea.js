// file: controllers/getArea.js - created at 2015-01-15, 05:00
function getAreaHandler(req, res) {
	'use strict';
  debug('Area get handler controller');
	res.send(res.locals.out);
  
}
module.exports = exports = getAreaHandler;
