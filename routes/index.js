var express = require('express'),
    router = express.Router(),
		fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
	fs.createReadStream('./app/public/views/index.html').pipe(res);
});


module.exports = router;
