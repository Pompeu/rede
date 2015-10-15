var express = require('express'),
    router = express.Router(),
    path =  require('path');   

/* GET home page. */
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../app/public/views/index.html'));  
});


module.exports = router;