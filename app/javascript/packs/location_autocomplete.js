// UK
var defaultBound = new google.maps.LatLngBounds(
  new google.maps.LatLng(-10.8544921875,49.82380908513249),
  new google.maps.LatLng(2.021484375,59.478568831926395),
)

var options = {
  bounds: defaultBound
}

var input = document.getElementById('user_location');
var autocomplete = new google.maps.places.Autocomplete(input, options);
autocomplete.setFields(['geometry']);
autocomplete.addListener('place_changed', function() {
  var place = autocomplete.getPlace();
  var geometry = place.geometry;
  var latitude = geometry.location.lat();
  var longitude = geometry.location.lng();

  document.getElementById('user_latitude').value = latitude;
  document.getElementById('user_longitude').value = longitude;
})