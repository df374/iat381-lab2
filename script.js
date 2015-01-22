// create the module and name it scotchApp
var newApp angular.module('newApp', ['ngRoute']);

// configure our routes
newApp.config(function($routeProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'mainController'
  })

  // route for the about page
  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'aboutController'
  })

  // route for the contact page
  .when('/contact', {
    templateUrl : 'pages/contact.html',
    controller  : 'contactController'
  });

  // route for the extra page
  .when('/extra', {
    templateUrl : 'pages/extras.html',
    controller  : 'extraController'
  });

});

// create the controller and inject Angular's $scope
newApp.controller('mainController', function($scope) {

  $scope.message = 'Welcome';
});

newApp.controller('aboutController', function($scope) {
  $scope.message = 'Not this time';
});

newApp.controller('contactController', function($scope) {
  $scope.message = 'Unavailable';
});

newApp.controller('extraController', function($scope) {
  $scope.message = 'Blank';
});
