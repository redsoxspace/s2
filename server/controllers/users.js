var mongoose = require('mongoose');
var User = mongoose.model('users');

var usersConstructor = function(){
  var _this = this;
  this.create = function(req,res){
    var user = new User(req.body);
    console.log(user);
    user.save(function(err, user){
      if (err){
        res.json(err);
      }
      else{
        res.json(user);
      }
    });
  };
  this.show_by_name = function(req,res){
    User.findOne({name:req.body.name}, function (err, user){
      if(err){
        res.json(err);
      }
      else {
        if (!user){
          _this.create(req,res);
        }
        else{
          res.json(user);
        }
      }
    })
  }
}


module.exports = function(){
  return new usersConstructor();
}
