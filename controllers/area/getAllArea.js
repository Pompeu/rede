// file: controllers/getAllArea.js - created at 2015-01-15, 05:06
function getAllAreaHandler(req, res) {
  	debug('Area getAll handler controller');
  	res.send(res.locals.out);
}
module.exports = exports = getAllAreaHandler;
