console.log('my future app');
var app = angular.module('app', ['ngRoute'])
.config(function($routeProvider){
  console.log('routeprovider??');
  $routeProvider
  .when('/login',
  {
    //loads a file (html file found in partials, named login.html)
    templateUrl:'partials/login.html',
    controller:'loginController'

  })
  .when('/dashboard',
  {
    templateUrl:'partials/dashboard.html',
    controller:'dashboardController'
  })
  .when('/poll/:id',
  {
    templateUrl:'partials/poll.html',
    //controller should have $routeParams as an injection
    controller:'pollsController'

  })
  .when('/create',
  {
    templateUrl:'partials/create.html',
    controller:'createController'
  })
  .otherwise('/',{
    redirectTo:'/login'
  })
});
