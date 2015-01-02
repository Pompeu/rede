// file: controllers/deleteUser.js - created at 2015-01-01, 07:57
function deleteUserHandler(req, res) {
	debug('delete user controller handler')
  	res.send(res.locals.out);
}
module.exports = exports = deleteUserHandler;
