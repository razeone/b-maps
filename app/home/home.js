'use strict';

angular.module('bMaps.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', [function() {

}]);