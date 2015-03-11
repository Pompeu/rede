var express = require('express'),
    router = express.Router(),
    path =  require('path');

/* GET home page. */
router.get('/', function (req, res) { 
    res.sendFile(path.join(clientDir, 'index.html'));  	
});
	
module.exports = router;
