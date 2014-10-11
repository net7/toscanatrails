angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, GlobalData) {
    angular.extend($scope, {
      apuane: {
        lat: 43.806479,
        lng: 11.293153,
        zoom: 15
      },
      tiles: {
        url: 'http://www.webmapp.it/maps/firenze/tiles/{z}/{x}/{y}.png',
        options: {
          minZoom: 13,
          maxZoom: 18,
          attribution: '<a href="http://www.webmapp.it/mappa-delle-alpi-apuane-dati-cartografici-e-termini-duso/" target="_blank">Map data & terms</a>'
        }
      },
      defaults: {},
      geojson: {
        data: GlobalData.tracks
      }
    });
})

.controller('TabCtrl', function($scope){
    $scope.setLoc = function(){
        alert("ciao")
    };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {

})

.controller('PinCtrl', function($scope) {
    
})

.controller('LocCtrl', function($scope) {

});
