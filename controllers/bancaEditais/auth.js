// file: controllers/auth.js - created at 2015-01-06, 04:16
function authHandler(req, res) {
	debug('auth handler controller')
	res.send(res.locals.out);
}
module.exports = exports = authHandler;
