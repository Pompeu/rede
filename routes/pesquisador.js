var express = require('express');
var router = express.Router();

router
	.post('/',middlewares.createPesquisador, controllers.createPesquisador)
	.get('/',middlewares.getAllPesquisador, controllers.getAllPesquisador)
	.get('/:id',middlewares.getPesquisador, controllers.getPesquisador)
	.put('/:id',middlewares.updatePesquisador,controllers.updatePesquisador)
	.delete('/:id',middlewares.deletePesquisador,controllers.deletePesquisador)

module.exports = router;