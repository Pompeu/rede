var express = require('express');
var router = express.Router();

router
	.post('/',middlewares.bancaEditaisCreate,controllers.bancaEditaisCreate)
	.get('/',middlewares.getAllEditais,controllers.getAllEditais)
	.get('/:id',middlewares.getEditais,controllers.getEditais)
	.put('/:id',middlewares.updateEdital,controllers.updateEdital)
	.delete('/:id',middlewares.deleteEdital,controllers.deleteEdital);

module.exports = router;