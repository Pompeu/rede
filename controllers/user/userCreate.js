// file: controllers/userCreate.js - created at 2015-01-01, 02:39
function userCreateHandler(req, res) {
  'use strict';
  debug('controller create user');
  res.send(res.locals.out);
}

module.exports = exports = userCreateHandler;
