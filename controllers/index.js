// file: controllers/index.js

/*controllers  modules user module*/
exports.userCreate 	= require('./user/userCreate');
exports.getAllUser 	= require('./user/getAllUser');
exports.getUser 	= require('./user/getUser');
exports.deleteUser 	= require('./user/deleteUser');
exports.updateUser 	= require('./user/updateUser');

/*controllers modules  auth module*/
exports.auth = require('./auth/auth');


/*controllers  modules pesquisador  module*/
exports.createPesquisador = require('./pesquisadores/createPesquisador');
exports.getPesquisador 	  =	require('./pesquisadores/getPesquisador');
exports.getAllPesquisador = require('./pesquisadores/getAllPesquisador');
exports.updatePesquisador = require('./pesquisadores/updatePesquisador');
exports.deletePesquisador = require('./pesquisadores/deletePesquisador');


/*controller bancaeditais module*/
exports.bancaEditaisCreate 	= require('./bancaEditais/bancaEditaisCreate');
exports.getEditais    		= require('./bancaEditais/getEditais');
exports.getAllEditais 		= require('./bancaEditais/getAllEditais');
exports.updateEdital 		= require('./bancaEditais/updateEdital');
exports.deleteEdital 		= require('./bancaEditais/deleteEdital');

/*controller projeto Pesquisa  module*/
exports.projetodePesquisaCreate = require('./projetodePesquisa/projetodePesquisaCreate');
exports.getAllprojetodePesquisa = require('./projetodePesquisa/getAllprojetodePesquisa');
exports.getprojetodePesquisa 	= require('./projetodePesquisa/getprojetodePesquisa');
exports.updateprojetodePesquisa = require('./projetodePesquisa/updateprojetodePesquisa');
exports.deleteprojetodePesquisa = require('./projetodePesquisa/deleteprojetodePesquisa');

/* controller empresa module*/
exports.createEmpresa 	= require('./empresa/createEmpresa');
exports.getEmpresa 		= require('./empresa/getEmpresa');
exports.getAllEmpresa 	= require('./empresa/getAllEmpresa');
exports.updateEmpresa 	= require('./empresa/updateEmpresa');
exports.deleteEmpresa 	= require('./empresa/deleteEmpresa');
