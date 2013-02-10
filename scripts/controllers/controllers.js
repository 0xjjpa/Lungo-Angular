'use strict';



CentralWorld.controller('NavigationCtrl', function($scope, $location){
    AppRouter.instance = AppRouter(Lungo, $location, $scope);
});

CentralWorld.controller('Section', function($scope, $location){

});

CentralWorld.controller('RoomNameCtrl', function($scope, $http, $location){
  //$http.get('http://calendar.cloudnode.ch/rooms').then(function(response){
    $http.get('/fakeServer/rooms.json').then(function(response){
        $scope.roomsData = response;
        $scope.roomName = $location.path();

        var roomName = $scope.roomName.replace(/\//g, ''); //remove / (slash)

        angular.forEach($scope.roomsData.data, function(room) {

            if(room.name.toLowerCase()  === roomName.toLowerCase()) {
                var googleEventId = room.google_id;
                $scope.roomName = room.name;
            
                //$http.get('http://calendar.cloudnode.ch/rooms/'+googleEventId+'/next_event').then(function(response){
                $http.get('/fakeServer/event-' + googleEventId + '.json').then(function(response){
                    $scope.eventTitle = response.data.title;
                    $scope.eventStartTime = response.data.from;
                    var today = new Date();

                    //not tested
                    if ($scope.eventStartTime <= today) {
                        $scope.eventStartTime = 'Today';
                    }

                    $scope.eventEndTime = response.data.to;

                    $scope.audience = [];
                    $scope.attendingAudience = [];

                    angular.forEach(response.data.members, function(members) {
                        $scope.audience.push({name: members.name, status: members.status});
                    });

                    angular.forEach($scope.audience, function(audience) {
                        if(audience.status === 'accepted') {
                            $scope.attendingAudience.push({name: audience.name, status: audience.status});
                        }
                    });
                });

            }
            else {
                return;
            }
        });
    });
});
