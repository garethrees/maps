// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(){

	// HTML for pop up bubble
	var maesycoed = "<h1>Maesycoed Motors</h1><address>Heol Groeswen,<br />Pontypridd<br /></address>";

	// Initialize Map

	var myOptions = {
    zoom:7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: chicago
  }
  
	
	var map = new google.maps.Map(document.getElementById("map"));
	
	
	// map.gMap(
	// 	{ 
	// 		markers: [{ latitude: 51.575296, longitude: -3.289676, html: maesycoed }],
	// 		zoom: 14,
	// 		scrollwheel: false,
	// 		controls: {
	//          panControl: true,
	//          zoomControl: true,
	//          mapTypeControl: false,
	//          scaleControl: false,
	//          streetViewControl: true,
	//          overviewMapControl: false
	// 		}
	// 	}
	// );
	// 
	// // Adjust Center
	// map.gMap('centerAt',
	// 	{
	// 		latitude: 51.578296,
	// 		longitude: -3.299999,
	// 		zoom: 14
	// 	}
	// );
	

	// Get Users Location
	//   if(navigator.geolocation) {
	//     browserSupportFlag = true;
	//  
	//    	navigator.geolocation.getCurrentPosition(function(position) {
	//       initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	// 
	// 		map.gMap('addMarker', 
	// 			{
	// 						latitude: initialLocation.lat(),
	// 						longitude: initialLocation.lng(),
	// 						zoom: 14
	// 			});
	//     }, function() {
	//       handleNoGeolocation(browserSupportFlag);
	//     });
	// }

	// Direction Service
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();

	// Locations
	var maesycoed = new google.maps.LatLng(51.575296, -3.289676);
	var chicago = new google.maps.LatLng(52.575296, -3.289676);
	
  directionsDisplay.setMap(map);

	var request = {
    origin: maesycoed,
    destination: chicago,
    travelMode: google.maps.TravelMode.DRIVING
  };

  directionsService.route(request, function(result, status) {
		alert(result);
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });

	
	
});



