// file: middlewares/index.js
'use strict';

/* user module middlewares */
exports.userCreate 	= require('./user/userCreate');
exports.getAllUser	= require('./user/getAllUser');
exports.getUser 	= require('./user/getUser');
exports.deleteUser 	= require('./user/deleteUser');
exports.updateUser 	= require('./user/updateUser');


/* auth middleware */
exports.auth = require('./auth');

/* pesquisador module middlewares*/
exports.createPesquisador = require('./pesquisadores/createPesquisador');
exports.getPesquisador    = require('./pesquisadores/getPesquisador');
exports.getAllPesquisador = require('./pesquisadores/getAllPesquisador');
exports.updatePesquisador = require('./pesquisadores/updatePesquisador');
exports.deletePesquisador = require('./pesquisadores/deletePesquisador');


/* banca de editais module */
exports.bancaEditaisCreate = require('./bancaEditais/bancaEditaisCreate');
exports.getEditais = require('./bancaEditais/getEditais');
exports.getAllEditais = require('./bancaEditais/getAllEditais');
exports.updateEdital = require('./bancaEditais/updateEdital');
exports.deleteEdital = require('./bancaEditais/deleteEdital');
