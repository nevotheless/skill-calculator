'use strict';

var express = require('express');
var app = express();

app.use(express.static('app'));

app.listen(5000);