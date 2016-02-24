console.log('factories');
app.factory('sessionFactory', ['$http', function($http) {
  var factory={};
  var user = 'hello'; // hey joe logged in
  // user = {'name':'joe', _id:asdfagasd;fkja;}
  factory.login = function(user,callback){
    console.log(user, "in factory");
    //user is going to the server, as something sent with $http request.

    //data are what are returned from that $http request.
    //data are going to be the info about the user to create.
    //callback is going to do something after the user is created.
    // when we get data that came back from our DB,
    // user = that data!
  }
  factory.logout = function(callback){
    user='';
  }
  factory.getUser = function(){
    return user;
  }
  return factory;
}]);
app.factory('pollFactory', ['$http', function($http) {
  var factory = {};
  var polls = []; // an array of objects :)
  factory.index = function(callback){
    // go to db and get the polls, return the polls via the callback?
  }
  factory.delete = function(poll_id, callback){
    // will delete the poll question
  }
  factory.show = function(poll_id, callback){
    // will show the poll question
  }
  factory.getPolls = function(){
    return polls;
  }
  factory.update = function(poll_id,option,callback){

  }
  factory.create = function (data, callback){
    
  }
  return factory;
}]);
