$(function(){
	
	var $map = $('#map_canvas').gmap();
	$map.height($('div[data-role=content]').height());
	var currentGeoposition = null,
		latlong = null;

    $map.on('init', function(evt, map) {
		navigator.geolocation.getCurrentPosition(function(geoposition){
		    	currentGeoposition = geoposition;    	
		    	latlong = new google.maps.LatLng(currentGeoposition.coords.latitude ,  currentGeoposition.coords.longitude);
		    	$map.gmap('addMarker', { 
			    	'position': currentGeoposition.coords.latitude + ', ' + currentGeoposition.coords.longitude
			    	 }, function() {			    					    	
			    		$map.gmap('get','map').setOptions({
			    			'center':latlong,
			    			'zoom': 10
			    		});
			    	});
		    }); 
	});
});