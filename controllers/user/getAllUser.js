// file: controllers/getAllUser.js - created at 2015-01-01, 05:19
function getAllUserHandler(req, res) {
  debug('get all user controller');
  res.send(res.locals.out);
}
module.exports = exports = getAllUserHandler;
