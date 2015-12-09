define(["leaflet", "jquery", "script/latlng"], function(L, $, LatLng){
	var defaultOptions = {
		center : LatLng["B2"],
		level : 16
	};
	function Map(container, options){
		var map = init(container, options);
		this.instance = map;
		
	}
	function init(container, options){
		options = $.extend({}, defaultOptions, options);
		var map = L.map('map').setView(options.center, options.level);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		return map;
	}
});