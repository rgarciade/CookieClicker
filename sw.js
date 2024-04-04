const cacheElements = [
	'/',
	'/bundle.js',
	'/645.bundle.js',
	'/448.bundle.js',
	'/487.bundle.js',
	'/sw.js',
	'/identify',
	'/game',
	'/common.css',
	'/public/manifest.json',
	'src_router_js.bundle.js',
	'node_modules_urlpattern-polyfill_index_js.bundle.js',
	'/2d8017489da689caedc1.woff2',
];
const CACHE_NAME = 'app-game-cookie-v1.5';

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.has(CACHE_NAME).then(function (cacheExists) {
			if (!cacheExists) {
				caches.open(CACHE_NAME).then(function (cache) {
					console.log('Opened cache', cacheElements);
					for (let i = 0; i < cacheElements.length; i++) {
						const file = cacheElements[i];
						cache
							.add(file)
							.catch((error) => console.log('caching file error', file, error));
					}
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
				fetch(event.request)
					.then((r) => {
						return r;
					})
					.catch((e) => {
						console.log('fetch error', e);
					});
			} catch (e) {
				console.log('fetch error-', e);
			}
		})
	);
});
