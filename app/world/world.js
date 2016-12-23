'use strict';

angular.module('bMaps.world', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/world', {
    templateUrl: 'world/world.html',
    controller: 'WorldController'
  });
}])

.controller('WorldController', [function() {

}]);