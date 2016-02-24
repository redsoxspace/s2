console.log('factories');
app.factory('sessionFactory', ['$http','$location', function($http, loc) {
  var factory={};
  var user = 'hello'; // hey joe logged in
  // user = {'name':'joe', _id:asdfagasd;fkja;}
  factory.login = function(the_user,callback){
    console.log(the_user, "in factory");
    $http.post('/login',the_user).then(function(data){
      user = data.data;
      console.log(user);
      console.log(data.data);
      if (data.data){
        loc.url('dashboard');
      }

    });
  }
  factory.logout = function(callback){
    user='';
  }
  factory.getUser = function(callback){
    console.log(user);
    callback(user);
  }
  return factory;
}]);
app.factory('pollFactory', ['$http', function($http) {
  var factory = {};
  var polls = []; // an array of objects :)
  factory.index = function(callback){
    $http.get('/polls').then(function(return_data){
      callback(return_data.data);
    })
  }
  factory.delete = function(poll_id, callback){
    $http.delete('/polls/'+poll_id).then(function(){
      callback();
    })
    // will delete the poll question
  }
  factory.show = function(poll_id, callback){
    console.log(callback);
    $http.get('/polls/'+poll_id).then(function(data){
      callback(data.data);
    })
  }
  factory.getPolls = function(){
    return polls;
  }
  factory.update = function(poll_id,option,callback){
    $http.put('/polls/'+poll_id, {option:option}).then(function(data){
      callback();
    })

  }
  factory.create = function (data, callback){
    $http.post('/polls',data).then(function(return_data){
      console.log(return_data);
    });
  }
  return factory;
}]);
