angular.module('App', [
  'ngRoute',
  'App.viewMain'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/viewMain'});
}]);
