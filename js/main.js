'use strict';

var tokyo    = { lat: 35.681298, lng: 139.766247 };
var yokohama = { lat: 35.466188, lng: 139.622715 };

function initMap() {
  initBaseMap();
  initSatelliteMap();
  initDirectionMap();
  initMarkerMap();
}

function initBaseMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('js_base_map'), {
    center: tokyo,
    scrollwheel: false,
    zoom: 8
  });
}

function initSatelliteMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('js_satellite_map'), {
    center: tokyo,
    // Set mapTypeId to SATELLITE in order
    // to activate satellite imagery.
    mapTypeId: 'satellite',
    scrollwheel: false,
    zoom: 8
  });
}

function initDirectionMap() {
  var map = new google.maps.Map(document.getElementById('js_direction_map'), {
    center: tokyo,
    scrollwheel: false,
    zoom: 7
  });

  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: yokohama,
    origin: tokyo,
    travelMode: 'DRIVING'
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == 'OK') {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
}

function initMarkerMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('js_marker_map'), {
    center: tokyo,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: tokyo,
    title: 'Hello World!'
  });
}
