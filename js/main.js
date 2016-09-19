'use strict';

var tokyoLatlng = { lat: 35.681298, lng: 139.766247 };

function initMap() {
  initBaseMap();
  initSatelliteMap();
  initMarkerMap();
}

function initBaseMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('js_base_map'), {
    center: tokyoLatlng,
    scrollwheel: false,
    zoom: 8
  });
}

function initSatelliteMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('js_satellite_map'), {
    center: tokyoLatlng,
    // Set mapTypeId to SATELLITE in order
    // to activate satellite imagery.
    mapTypeId: 'satellite',
    scrollwheel: false,
    zoom: 8
  });
}

function initMarkerMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('js_marker_map'), {
    center: tokyoLatlng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: tokyoLatlng,
    title: 'Hello World!'
  });
}
