'use strict';

var express = require('express');
var app = express();

app.use(express.static('app'));

app.listen(process.env.PORT || 5000);