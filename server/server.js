var path = require('path');
var express = require('express');
require('dotenv').config();
var request = require('request');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var router = require('./routes/index').router;

var app = express();

var db = require('./db').db;

var port = process.env.PORT || 8000

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, '../client')));

app.use('/api', router);

app.listen(port, function() {
  console.log(`server listening on port ${port}`);
});
