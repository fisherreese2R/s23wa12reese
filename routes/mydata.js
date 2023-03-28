var express = require('express');
var router = express.Router();

/* GET my information page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Fisher Lee Reese' });
});

module.exports = router;
