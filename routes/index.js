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
router.post('/login',function(req, res) {
	if(req.body.email === req.body.password)
		res.status(200).end();
	else
		res.status(500).end();
});

module.exports = router;
