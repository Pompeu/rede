var express = require('express'),
    router = express.Router(),
    path =  require('path'),
    fs = require('fs');

/* GET home page. */
router.get('/', function (req, res) {
  fs.createReadStream(path.join(__dirname, '../app/public/views/index.html'))
    .pipe(res);
});

module.exports = router;