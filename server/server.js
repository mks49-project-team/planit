var express = require('express');
require('dotenv').config();
var request = require('request');
var bodyParser = require('body-Parser');
var morgan = require('morgan');
var cors = require('cors');

var app = express();

var db = require('./db/db');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./client'))
app.use(morgan('dev'))

var port = process.env.PORT || 8000

app.listen(port);
console.log(`server listening on port ${port}`);
