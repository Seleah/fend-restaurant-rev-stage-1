let seWo = function() {
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('rest-rev-static-v1').then(function(cache) {
        return cache.addAll([
          '/',
          'js/main.js',
          'js/dbhelper.js',
          'js/restaurant_info.js',
          'css/styles.css',
          'imgs/1.jpg',
          'imgs/2.jpg',
          'imgs/3.jpg',
          'imgs/4.jpg',
          'imgs/5.jpg',
          'imgs/6.jpg',
          'imgs/7.jpg',
          'imgs/8.jpg',
          'imgs/9.jpg',
          'imgs/10.jpg',
          'data/restaurants.json',
          // 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
          // 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
          '/restaurant.html?id=1',
          '/restaurant.html?id=2',
          '/restaurant.html?id=3',
          '/restaurant.html?id=4',
          '/restaurant.html?id=5',
          '/restaurant.html?id=6',
          '/restaurant.html?id=7',
          '/restaurant.html?id=8',
          '/restaurant.html?id=9',
          '/restaurant.html?id=10'
        ]);
      })
    );
  });

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
};