var express = require('express');
var router = express.Router();

router
	.post('/',middlewares.createArea,controllers.createArea)
	.get('/:id',middlewares.getArea,controllers.getArea)
	.get('/',middlewares.getAllArea,controllers.getAllArea)
	.put('/:id',middlewares.updateArea,controllers.updateArea)
	.delete('/:id',middlewares.deleteArea,controllers.deleteArea);

module.exports = router;
