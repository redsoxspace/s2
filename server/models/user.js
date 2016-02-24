var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name:{type:String}
}, {timestamps:{createdAt:'created_at', updatedAt:'updated_at'}});

mongoose.model('users', userSchema);
