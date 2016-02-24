var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var optionSchema = new mongoose.Schema({
  description:{type:String, required: true, minlength:3},
  votes:{type:Number, default:0}
})

var pollSchema = new mongoose.Schema({
  question:{type:String, required: true, minlength:8},
  option1:{type:optionSchema, required:true},
  option2:{type:optionSchema, required:true},
  option3:{type:optionSchema, required:true},
  option4:{type:optionSchema, required:true},
  user:{type:Schema.Types.ObjectId, ref:'users'}

}, {timestamps:{createdAt:'created_at', updatedAt:'updated_at'}});

mongoose.model('polls', pollSchema);
