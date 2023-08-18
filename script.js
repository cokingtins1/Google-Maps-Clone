const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoiZHJwZXBwYTEyMTIiLCJhIjoiY2xsZnRtMW9hMGZjYzNncnJ4aXA0aXI1NSJ9.urezPn093CKPzG-5KOSO8g"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
	enableHighAccuracy: true,
})

function setupMap(centerPosition) {
	mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN
	const map = new mapboxgl.Map({
		container: "map", // container ID
		style: "mapbox://styles/mapbox/streets-v12", // style URL
		center: [-74.5, 40], // starting position [lng, lat]
		zoom: 15, // starting zoom
		center: centerPosition,
	})

	const navigationControls = new mapboxgl.NavigationControl()
	map.addControl(navigationControls)

	map.addControl(
		new MapboxDirections({
			accessToken: mapboxgl.accessToken,
		}),
		"top-left"
	)
}

function successLocation(position) {
	setupMap([position.coords.longitude, position.coords.latitude])

	console.log(position)
}

function errorLocation() {
	setupMap([-2.24, 53.48])
}
