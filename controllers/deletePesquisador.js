// file: controllers/deletePesquisador.js - created at 2015-01-07, 10:50
function deletePesquisadorHandler(req, res) {
	debug('delete pesquisador controller handler')
  	res.send(res.status(202).locals.out);
}
module.exports = exports = deletePesquisadorHandler;
