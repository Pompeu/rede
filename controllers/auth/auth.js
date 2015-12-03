// file: controllers/auth.js - created at 2015-01-06, 04:16
'use strict';

function authHandler(req, res) {
  debug('auth handler controller');
  res.json(res.locals.out);
}
module.exports = exports = authHandler;
