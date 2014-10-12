angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, GlobalData, leafletData) {
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
        data: GlobalData.tracks,
        onEachFeature: function(feature, layer) {
          //if (!feature.properties['@relations'][0].reltags) return;

          /*var tags = feature.properties['@relations'][0].reltags,
              name = tags.name || '',
              website = tags.website || '';

          if (!name.length && !website.length) return;

          if (website.length) {
            website = '<a href="' + tags.website + '">' + tags.website + '</a>';
          }*/

          var content = '<strong>Sentiero 22B CAI</strong><br />Difficoltà E<br />Dislivello 350m<br />Tempo 1h 5m';

          layer.bindPopup(content);
        }
      }
    });

    leafletData.getMap().then(function(map) {
      // @todo I know, globals are bad, but I'm in a hurry.
      L.geoJson(window.Global.pois, {
        onEachFeature: function(feature, layer) {

          var content = feature.properties.nome + '<br />' + feature.properties.tipologia;

          layer.bindPopup(content);
        }
      }).addTo(map);
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
