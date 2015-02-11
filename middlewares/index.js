// file: middlewares/index.js
'use strict';

/* user module middlewares */
exports.userCreate 	= require('./user/userCreate');
exports.getAllUser	= require('./user/getAllUser');
exports.getUser 	= require('./user/getUser');
exports.deleteUser 	= require('./user/deleteUser');
exports.updateUser 	= require('./user/updateUser');


/* auth middleware */
exports.auth = require('./auth/auth');

/* pesquisador module middlewares*/
exports.createPesquisador = require('./pesquisadores/createPesquisador');
exports.getPesquisador    = require('./pesquisadores/getPesquisador');
exports.getAllPesquisador = require('./pesquisadores/getAllPesquisador');
exports.updatePesquisador = require('./pesquisadores/updatePesquisador');
exports.deletePesquisador = require('./pesquisadores/deletePesquisador');


/* banca de editais module */
exports.bancaEditaisCreate 	= require('./bancaEditais/bancaEditaisCreate');
exports.getEditais 			= require('./bancaEditais/getEditais');
exports.getAllEditais 		= require('./bancaEditais/getAllEditais');
exports.updateEdital 		= require('./bancaEditais/updateEdital');
exports.deleteEdital 		= require('./bancaEditais/deleteEdital');

/* banca de projeto pesquisa module */
exports.projetodePesquisaCreate = require('./projetodePesquisa/projetodePesquisaCreate');
exports.getAllprojetodePesquisa = require('./projetodePesquisa/getAllprojetodePesquisa');
exports.getprojetodePesquisa 	= require('./projetodePesquisa/getprojetodePesquisa');
exports.updateprojetodePesquisa = require('./projetodePesquisa/updateprojetodePesquisa');
exports.deleteprojetodePesquisa = require('./projetodePesquisa/deleteprojetodePesquisa');

/* banca de editais module */
exports.createEmpresa 	= require('./empresa/createEmpresa');
exports.getEmpresa 		= require('./empresa/getEmpresa');
exports.getAllEmpresa 	= require('./empresa/getAllEmpresa');
exports.updateEmpresa 	= require('./empresa/updateEmpresa');
exports.deleteEmpresa 	= require('./empresa/deleteEmpresa');

/*Area  de pesquisa module*/
exports.createArea = require('./area/createArea');
exports.getArea    = require('./area/getArea');
exports.getAllArea = require('./area/getAllArea');
exports.deleteArea = require('./area/deleteArea');
exports.updateArea = require('./area/updateArea');

/* Publicacao module*/
exports.createPublicacao = require('./publicacao/createPublicacao');
exports.getAllPublicacao = require('./publicacao/getAllPublicacao');
exports.getPublicacao 	 = require('./publicacao/getPublicacao');
exports.deletePublicacao = require('./publicacao/deletePublicacao');
exports.updatePublicacao = require('./publicacao/updatePublicacao');


/* Equipe Tecnicia module*/
exports.createEquipeTecnica  = require('./equipeTecnica/createEquipeTecnica');
exports.getAllEquipeTecnica	 = require('./equipeTecnica/getAllEquipeTecnica');
exports.getEquipeTecnica 	 = require('./equipeTecnica/getEquipeTecnica');
exports.deleteEquipeTecnica  = require('./equipeTecnica/deleteEquipeTecnica');
exports.updateEquipeTecnica  = require('./equipeTecnica/updateEquipeTecnica');