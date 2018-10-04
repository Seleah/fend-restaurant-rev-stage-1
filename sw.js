let staticCacheName = 'rest-rev-static-v1';
let urlsToCache = [
	'./',
	'index.html',
	'restaurant.html',
	'css/styles.css',
	'data/restaurants.json',
	'js/dbhelper.js',
	'js/main.js',
	'js/restaurant_info.js',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg',
	'restaurant.html?id=1',
	'restaurant.html?id=2',
	'restaurant.html?id=3',
	'restaurant.html?id=4',
	'restaurant.html?id=5',
	'restaurant.html?id=6',
	'restaurant.html?id=7',
	'restaurant.html?id=8',
	'restaurant.html?id=9',
	'restaurant.html?id=10',
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
	''
];


// https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token=pk.eyJ1Ijoic2VsZWFoIiwiYSI6ImNqbWk4amNuMjAyY2ozcHF6cGVqM255aGcifQ.dlD4kMnErVlTy4qhqb9TGg



self.addEventListener('install', event => {
	event.waitUntil(
		caches
			.open(staticCacheName)
			.then(cache => cache.addAll(urlsToCache))
			.then(self.skipWaiting())
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => Promise.all(cacheNames.map(cache => {
			if (cache !== staticCacheName) {
				return caches.delete(cache);
			}
		})))
	)
})

self.addEventListener('fetch', event => {
	if (event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
			caches.match(event.request).then(response => {
				if (response) {
					return response;
				}
				return fetch(event.request);
			})
		);
	}
});