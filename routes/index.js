var express = require('express'),
    router = express.Router(),
    path =  require('path'),
    fs = require('fs'),
    stream,
    mime = {'Content-Type': 'text/html'};

/* GET home page. */
router.get('/', function (req, res) {
  //res.set(mime);
  stream.pipe(res);
});

(function(){    
  stream = fs.createReadStream(path.join(__dirname, '../app/public/views/index.html'));
}());

module.exports = router;