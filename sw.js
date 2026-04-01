const CACHE_NAME = 'millonario-v2.1';
const assets = ['./', 
        './index.html', 
         './manifest.json',
        './img/pwa-icon-192.png', 
        './img/pwa-icon-512.png'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});

