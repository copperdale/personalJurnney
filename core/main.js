$(function(){

	var B2 = latlng_config['B2'];

	var map = L.map('map').setView(B2, 16);

	var googleWms = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	});
	
	var wms_google = L.tileLayer.wms(constants.URL.MapTiles.WMS_G, {
        layers: 'default', format: 'image/png', transparent: true, version: '1.1.1', crs: L.CRS.EPSG4326,
        //attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 20
    });
    
    googleWms.addTo(map);

	var popup = L.popup()
    .setLatLng(B2)
    .setContent("天赋软件园B区6栋")
    .openOn(map);

	function onMapClick(e) {
	    alert("You clicked the map at " + e.latlng);
	}

	// map.on('click', onMapClick);
});
