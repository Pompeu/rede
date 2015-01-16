// file: controllers/userCreate.js - created at 2015-01-01, 02:39
function userCreateHandler(req, res) {
  debug('controller create user');
  console.log(res.locals.out)
  res.send(res.locals.out);
}
module.exports = exports = userCreateHandler;
