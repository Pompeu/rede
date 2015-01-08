// file: controllers/getPesquisador.js - created at 2015-01-07, 07:59
function getPesquisadorHandler(req, res) {
	debug('get pesquisador controller')
  	res.send(res.locals.out);
}
module.exports = exports = getPesquisadorHandler;
