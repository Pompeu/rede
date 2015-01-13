// file: controllers/index.js

/*controllers  modules user */
exports.userCreate 	= require('./user/userCreate');
exports.getAllUser 	= require('./user/getAllUser');
exports.getUser 	= require('./user/getUser');
exports.deleteUser 	= require('./user/deleteUser');
exports.updateUser 	= require('./user/updateUser');

/*controllers modules  auth*/
exports.auth = require('./auth');


/*controllers  modules pesquisador */
exports.createPesquisador = require('./pesquisadores/createPesquisador');
exports.getPesquisador 	  =	require('./pesquisadores/getPesquisador');
exports.getAllPesquisador = require('./pesquisadores/getAllPesquisador');
exports.updatePesquisador = require('./pesquisadores/updatePesquisador');
exports.deletePesquisador = require('./pesquisadores/deletePesquisador');



exports.bancaEditaisCreate = require('./bancaEditais/bancaEditaisCreate');
exports.getEditais = require('./bancaEditais/getEditais');
exports.getAllEditais = require('./bancaEditais/getAllEditais');
exports.updateEdital = require('./bancaEditais/updateEdital');
exports.deleteEdital = require('./bancaEditais/deleteEdital');
