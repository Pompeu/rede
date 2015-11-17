var express = require('express');
var router = express.Router();

router
	.post('/',middlewares.projetodePesquisaCreate,  controllers.projetodePesquisaCreate)
	.post('/area/rel/',middlewares.projetoCreateRelArea,  controllers.projetoCreateRelArea)
  .get('/',middlewares.getAllprojetodePesquisa,  controllers.getAllprojetodePesquisa)
	.get('/:id',middlewares.getprojetodePesquisa,  controllers.getprojetodePesquisa)
	.put('/:id',middlewares.updateprojetodePesquisa,  controllers.updateprojetodePesquisa)
	.delete('/:id',middlewares.deleteprojetodePesquisa,  controllers.deleteprojetodePesquisa)
	.delete('/area/rel/:id',middlewares.projetoDelRelArea,  controllers.projetoDelRelArea)


module.exports = router;
