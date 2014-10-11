angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    angular.extend($scope, {
      apuane: {
        lat: 44.032,
        lng: 10.31,
        zoom: 4
      },
      tiles: {
        url: 'http://www.webmapp.it/maps/alpi-apuane/mobile-map/tiles/{z}/{x}/{y}.png',
        options: {
          minZoom: 2,
          maxZoom: 6,
          attribution: '<a href="http://www.webmapp.it/mappa-delle-alpi-apuane-dati-cartografici-e-termini-duso/" target="_blank">Map data & terms</a>'
        }
      }
    });
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
