var express = require('express');
var router = express.Router();

router
	.post('/',middlewares.createPublicacao,controllers.createPublicacao)
	.get('/:id',middlewares.getPublicacao,controllers.getPublicacao)
	.get('/',middlewares.getAllPublicacao,controllers.getAllPublicacao)
	.put('/:id',middlewares.updatePublicacao,controllers.updatePublicacao)
	.delete('/:id',middlewares.deletePublicacao,controllers.deletePublicacao);

module.exports = router;