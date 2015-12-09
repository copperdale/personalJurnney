$(function(){

	var B2 = latlng_config['B2'];

	var map = L.map('map').setView(B2, 16);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	var popup = L.popup()
    .setLatLng(B2)
    .setContent("天赋软件园B区6栋")
    .openOn(map);

	function onMapClick(e) {
	    alert("You clicked the map at " + e.latlng);
	}

	// map.on('click', onMapClick);
});