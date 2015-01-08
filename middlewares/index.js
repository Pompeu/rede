// file: middlewares/index.js
'use strict';

/* user module */
exports.userCreate 	= require('./user/userCreate');
exports.getAllUser	= require('./user/getAllUser');
exports.getUser 	= require('./user/getUser');
exports.deleteUser 	= require('./user/deleteUser');
exports.updateUser 	= require('./user/updateUser');


/* auth middleware */
exports.auth = require('./auth');

/* pesquisador module */
exports.createPesquisador = require('./createPesquisador');
exports.getPesquisador = require('./getPesquisador');
exports.getAllPesquisador = require('./getAllPesquisador');
exports.updatePesquisador = require('./updatePesquisador');
exports.deletePesquisador = require('./deletePesquisador');
