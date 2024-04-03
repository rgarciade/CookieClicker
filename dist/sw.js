const cacheElements = [
	'/',
	'/bundle.js',
	'/sw.js',
	'/identify',
	'/game',
	'/common.css',
	'/manifest.json',
	'src_router_js.bundle.js',
	'node_modules_urlpattern-polyfill_index_js.bundle.js',
];
const CACHE_NAME = 'app-game-cookie-v1.4';

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.has(CACHE_NAME).then(function (cacheExists) {
			if (!cacheExists) {
				return caches.open(CACHE_NAME).then(function (cache) {
					console.log('Opened cache', cacheElements);
					return cache.addAll(cacheElements);
				});
			}
		})
	);
});
self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			try {
				if (response) {
					return response;
				}
				fetch(event.request);

			}catch (e) {
				console.error('fetch error', e);
			}
		})
	);
});
