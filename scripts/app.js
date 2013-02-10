'use strict';

var RoomCalendar = angular.module('RoomCalendar', ['ngResource']);
RoomCalendar.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {controller: 'RoomNameCtrl'}).
      when('/:roomName', {templateUrl: 'includes/sections/section-index.html', controller: 'RoomNameCtrl'}).
      otherwise({redirectTo: '/'});
}]);

Lungo.init({
	name: 'example'
});