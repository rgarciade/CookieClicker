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
	//https://fonts.googleapis.com/icon?family=Material+Icons
	//https://fonts.gstatic.com/s/materialicons/v141/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2
	'/2d8017489da689caedc1.woff2'

];
const CACHE_NAME = 'app-game-cookie-v1.4';

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.has(CACHE_NAME).then(function (cacheExists) {
			if (!cacheExists) {
				caches.open(CACHE_NAME).then(function (cache) {
					console.log('Opened cache', cacheElements);
					for (let i = 0; i < cacheElements.length; i++) {
						const file = cacheElements[i]
						cache.add(file).catch((error) =>console.log('fileerror', file,error))
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
				fetch(event.request).then(r => {
					return r;
				}).catch(e => {
					console.log('fetch error1', e);
				});
			}catch (e) {
				console.log('fetch error2', e);
			};
		})
	);
});
