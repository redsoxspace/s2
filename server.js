var express = require('express'),
app = express(),
bodyparser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path');

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/bower_components')));

app.listen(8000, function(){
  console.log('running on 8k');
})
