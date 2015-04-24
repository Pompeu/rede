// file: controllers/getAllPesquisador.js - created at 2015-01-07, 08:01
function getAllPesquisadorHandler(req, res) {
	'use strict';
  debug('get all pesquisador controller');
	res.send(res.locals.out);
}
module.exports = exports = getAllPesquisadorHandler;
