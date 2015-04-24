var express = require('express');
var router = express.Router();

router
	.post('/',middlewares.createEquipeTecnica, controllers.createEquipeTecnica)
	.get('/',middlewares.getAllEquipeTecnica, controllers.getAllEquipeTecnica)
	.get('/:id',middlewares.getEquipeTecnica, controllers.getEquipeTecnica)
	.put('/:id',middlewares.updateEquipeTecnica,controllers.updateEquipeTecnica)
	.delete('/:id',middlewares.deleteEquipeTecnica,controllers.deleteEquipeTecnica);

module.exports = router;