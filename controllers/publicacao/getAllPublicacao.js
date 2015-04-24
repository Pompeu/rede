// file: controllers/getAllPublicacao.js - created at 2015-01-16, 01:30
function getAllPublicacaoHandler(req, res) {
	'use strict';
  debug('get all publicacao handler controller');
  res.send(res.locals.out);
}
module.exports = exports = getAllPublicacaoHandler;
