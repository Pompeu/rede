// file: controllers/getAllEmpresa.js - created at 2015-01-13, 06:04
function getAllEmpresaHandler(req, res) {
    'use strict';
  	debug('empresa getAll handler controller');
  	res.send(res.locals.out);
}
module.exports = exports = getAllEmpresaHandler;
