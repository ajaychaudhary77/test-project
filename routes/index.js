var express = require('express');
var router = express.Router();


router.use('/', express.static('dist/angular-seed'));

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
