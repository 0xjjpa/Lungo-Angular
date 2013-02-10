'use strict';

var CentralWorld = angular.module('CentralWorld', ['Centralway.angular-lungo-bridge']);

CentralWorld.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/forms', {templateUrl: 'includes/sections/template/section-template.html', controller: 'Section'});
  $locationProvider.html5Mode(true);
}]);

