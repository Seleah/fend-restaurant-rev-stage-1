self.addEventListener('install', function(event) {
	console.log('Service worker installed');
	event.waitUntil(
		caches.open('rest-rev-static-v1').then(function(cache) {
			console.log('cache opened');
			return cache.addAll([
				'/',
				'/js/main.js',
				'/js/dbhelper.js',
				'/js/restaurant_info.js',
				'/css/styles.css',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg',
				'/data/restaurants.json',
				'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
				'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
				'/restaurant.html'
			]);
		})
	);
});

self.addEventListener('activate', function(ev) {
	console.log('Service Worker activating.');
});

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request);
//     })
//   );
// });

self.addEventListener('fetch', function(event) {
	// TODO: respond with an entry from the cache if there is one.
	// If there isn't, fetch from the network.
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) return response;
			return fetch(event.request);
		})
	);
});