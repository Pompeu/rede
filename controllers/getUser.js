// file: controllers/getUser.js - created at 2015-01-01, 06:46
function getUserHandler(req, res) {
	debug('get user controller')
	res.send(res.locals.out);
}
module.exports = exports = getUserHandler;
