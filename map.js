mapboxgl.accessToken = process.env.MAPA;

navigator.geolocation.getCurrentPosition(exito, error, { enableHighAccuracy:  true });

function exito(position) {
	console.log(position);
	confMap([ position.coords.longitude, position.coords.latitude ]);
}

function error() {
	confMap([-79.4512, 43.6568]);
}

function confMap(center) {
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: center,
		zoom: 12
	});

	const nav = new mapboxgl.NavigationControl();
	map.addControl(nav);

	const direcciones = new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}); 

	map.addControl(direcciones, 'top-left');
}
