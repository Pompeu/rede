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
