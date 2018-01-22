var express = require('express');
var router = express();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
const api_v1 = require('./v1');
router.use('/api/v1', api_v1);

module.exports = function (app){return app.use('/', router)};
