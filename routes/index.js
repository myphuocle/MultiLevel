var express = require('express');
//var router = express.Router();
var router = express();
const api_v1 = require('./v1');


// router.use('/api/v1', api_v1);

module.exports = router.use('/api/v1', api_v1);
// module.exports = function (app){return app.use('/', router)};	