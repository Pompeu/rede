// file: controllers/getEmpresa.js - created at 2015-01-13, 06:01
function getEmpresaHandler(req, res) {
  	debug('empresa get one handler controller')
  	res.send(res.locals.out);
}
module.exports = exports = getEmpresaHandler;
