var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('queens', { title: 'Search Results by queens' });
});

module.exports = router;