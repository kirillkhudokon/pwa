const CACHE_KEY = 'pwa-ai-adv';

const staticAssets = [
	'/',
	'/advice.html',
	'/vite.svg',
	'/assets/main.js',
	'/assets/main.css',
	'/manifest.json',
	'/images/icon.png'
];

self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open(CACHE_KEY).then(cache => cache.addAll(staticAssets))
	)
});

self.addEventListener('fetch', function(event){
	event.respondWith(
		networkFirst(event.request)
	)
})

async function networkOnly(request){
	return await fetch(request);
}

async function networkFirst(request){
	try{
		// if offlien, fetch throw error
		const networkResponse = await fetch(request);

		// vary hard question, 200, 404
		if(networkResponse.ok){
			console.log('from network')
			const cache = await caches.open(CACHE_KEY);
			cache.put(request, networkResponse.clone());
		}

		return networkResponse;
	}
	catch(e){
		console.log('from cache')
		const cachedResponse = await caches.match(request, { cacheName: CACHE_KEY });
		return cachedResponse ?? Response.error();  // can use e
	}
}