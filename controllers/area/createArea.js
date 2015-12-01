// file: controllers/createArea.js - created at 2015-01-15, 02:19
'use strict';

function createAreaHandler(req, res) {
  debug('Area create handler controller');
  res.send(res.locals.out);
}
module.exports = exports = createAreaHandler;
