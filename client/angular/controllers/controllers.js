console.log('mycontrollers');
//Monolithic because currently not much in my controllers, can modularize later.
app.controller('dashboardController', ['$scope','sessionFactory','pollFactory', function($scope,sF,pF) {
  console.log('dash');
  //sets the user for that page (so if we wanted their name!)
  $scope.user = sF.getUser();
  $scope.logout = function(){
    sF.logout();
  }
  $scope.deletePoll = function(poll_id){
    console.log(poll_id);
  }

$scope.greeting = 'Hola!';
}]);

app.controller('pollsController', ['$scope','$routeParams','sessionFactory','pollFactory', function($scope, $routeParams,sF, pF) {
  pF.show($routeParams.id, function(data){
    console.log(data);
    $scope.poll = data;
  });
  $scope.user = sF.getUser();
  $scope.vote = function(poll_id,which_option){
      pF.update(poll_id, which_option);
  }

}]);

app.controller('loginController', ['$scope','sessionFactory', function($scope,sF) {

  // I just renamed sessionFactory to sF locally
   $scope.createUser = function(){
     console.log($scope.new_user);
     sF.login($scope.new_user);
     $scope.new_user = {};
   }
   $scope.user = sF.getUser();
   console.log($scope.user);
    // this will get our 17! (or our _id of the poll!)
  $scope.greeting = 'Hola!';
}]);

app.controller('createController', ['$scope','sessionFactory','pollFactory',function($scope,sF,pF) {
  console.log('create'); // this will get our 17! (or our _id of the poll!)
  $scope.user = sF.getUser();
  $scope.create = function(){
    $scope.poll.user = $scope.user;
    pF.create($scope.poll, function(data){
      console.log(data);
    });
    $scope.poll = {};
  }
  $scope.greeting = 'Hola!';
}]);
