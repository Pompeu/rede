var express = require('express');
var router = express.Router();

router
	.post('/',middlewares.projetodePesquisaCreate,  controllers.projetodePesquisaCreate)
	.get('/',middlewares.getAllprojetodePesquisa,  controllers.getAllprojetodePesquisa)
	.get('/:id',middlewares.getprojetodePesquisa,  controllers.getprojetodePesquisa)
	.put('/:id',middlewares.updateprojetodePesquisa,  controllers.updateprojetodePesquisa)
	.delete('/:id',middlewares.deleteprojetodePesquisa,  controllers.deleteprojetodePesquisa);


module.exports = router;