var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path');
//npm install body-parser --save

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/bower_components')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, function(){
  console.log('running on 8k');
})
