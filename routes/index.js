var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function (req, res) {
  	res.render('index', { title: 'Rede Conhecimentos' });
});

router.get('/user', function (req, res) {
  	res.render('listusers');
});

router.get('/caduser', function (req, res) {
  	res.render('caduser');
});

router
	.get('/login',function (req, res) {
		res.render('partiais/login');
});

router.
	post('/login',middlewares.auth,controllers.auth);
	
	
module.exports = router;
