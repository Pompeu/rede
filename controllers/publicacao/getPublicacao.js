// file: controllers/getPublicacao.js - created at 2015-01-16, 01:37
function getPublicacaoHandler(req, res) {
	'use strict';
  debug('get publicacao handler controller');
	res.send(res.locals.out);
}
module.exports = exports = getPublicacaoHandler;
