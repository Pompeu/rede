// file: controllers/deleteEmpresa.js - created at 2015-01-13, 06:10
function deleteEmpresaHandler(req, res) {
  	debug('empresa delete handler controller')
  	res.send(res.locals.out);
}
module.exports = exports = deleteEmpresaHandler;
