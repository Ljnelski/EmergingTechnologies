var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/student', function(req, res, next) {
//   res.render('index', { title: 'Student' });
// });

module.exports = router;
