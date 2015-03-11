var express = require('express');
var router = express.Router();


router
  .post('/',middlewares.auth,controllers.auth);  

module.exports = router;