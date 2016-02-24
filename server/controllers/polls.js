var mongoose = require('mongoose');
var Polls = mongoose.model('polls');

var pollsConstructor = function(){
  this.create = function(req,res){
    var polls = new Polls(req.body);
    console.log(polls);
    polls.save(function(err, poll){
      if (err){
        res.json(err);
      }
      else {
        res.json(poll);
      }
    })
  };
  this.show = function(req,res){
    Polls.findOne({_id:req.params.id})
    .populate('user')
    .exec(
      function(err,poll){
        if (err){
          res.json(err);
        }
        else {
          res.json(poll);
        }
    });
  };
  this.delete = function(req,res){
    Polls.remove({_id:req.params.id}, function(err){
      if (err){
        res.json(err);
      }
      else{
        res.json({success:'true'});
      }
    });
  };
  this.update = function(req,res){
    console.log(req.body);
    Polls.findOne({_id: req.params.id}, function(err, poll){
      if (err){
        res.json(err);
      }
      else {
        poll[req.body.option].votes ++;
        poll.save(function(err, poll){
          if (err){
            res.json(err);
          }
          else {
            res.json(poll);
          }
        });
      }
    });
  };
  this.index = function(req,res){
    Polls.find({}).populate('user')
    .exec(function(err,polls){
      if (err){
        res.json(err);
      }
      else {
        res.json(polls);
      }
    });
  };
}



module.exports = function(){
  return new pollsConstructor();
}
