var express = require('express');
var router = express.Router();


router
	.post('/',middlewares.createEmpresa,controllers.createEmpresa)
	.get('/:id',middlewares.getEmpresa,controllers.getEmpresa)
	.get('/',middlewares.getAllEmpresa,controllers.getAllEmpresa)
	.put('/:id',middlewares.updateEmpresa,controllers.updateEmpresa)
	.delete('/:id',middlewares.deleteEmpresa,controllers.deleteEmpresa)

module.exports = router;