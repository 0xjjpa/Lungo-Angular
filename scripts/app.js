'use strict';

var RoomCalendar = angular.module('RoomCalendar', ['ngResource']);
RoomCalendar.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {controller: 'RoomNameCtrl'}).
      when('/:roomName', {controller: 'RoomNameCtrl'}).
      when('/:roomName/:googleEventId/next_event', {}).
      otherwise({redirectTo: '/'});
}]);

Lungo.init({
	name: 'example'
});