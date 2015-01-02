var express = require('express');
var router = express.Router();

router
	.post('/',middlewares.userCreate, controllers.userCreate);
	
router
	.get('/',middlewares.getAllUser, controllers.getAllUser);

router
	.put('/:id', middlewares.updateUser,controllers.updateUser);

router
	.get('/:id',middlewares.getUser, controllers.getUser);

router
	.delete('/:id',middlewares.deleteUser, controllers.deleteUser);
	
module.exports = router;