var express = require('express');
var router = express.Router();

router
	.post('/',middlewares.userCreate, controllers.userCreate)
	.get('/',middlewares.getAllUser, controllers.getAllUser)	
	.get('/:id',middlewares.getUser, controllers.getUser)
	.put('/:id', middlewares.updateUser,controllers.updateUser)
	.delete('/:id',middlewares.deleteUser, controllers.deleteUser);


module.exports = router;