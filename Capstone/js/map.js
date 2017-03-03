
function initMap() {
        var westPalmBeach = {lat: 26.7153, lng: -80.0534};
        var petSmartRpb = {lat: 26.686709, lng: -80.203912};
        var petCoWellington = {lat: 26.6646, lng: -80.2008};
        var petSuperMarketWpb = {lat: 26.675878, lng: -80.06220539999998};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: westPalmBeach
        });
        /*var marker = new google.maps.Marker({
        position: petCoWellington,
        map: map
        });
        var marker = new google.maps.Marker({
          position: petSuperMarketWpb,
          map: map
        });
        var marker = new google.maps.Marker({
          position: petSmartRpb,
          map: map
        });*/
        
        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
          placeId: 'ChIJd1rrV0Mv2YgRiHEMxa0-Kfc'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' +
                place.formatted_address + '</div>');
              infowindow.open(map, this);
            });
          }
        });
    
            service.getDetails({
          placeId: 'ChIJy-EP8SYv2YgRwTWcsCpxRVQ'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' +
                place.formatted_address + '</div>');
              infowindow.open(map, this);
            });
          }
        });
    
            service.getDetails({
          placeId: 'ChIJiSzsXa7X2IgRNK1KLvwEEu8'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' +
                place.formatted_address + '</div>');
              infowindow.open(map, this);
            });
          }
        });
}
    
    