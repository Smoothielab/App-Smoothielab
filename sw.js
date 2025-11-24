const CACHE_NAME = 'smoothie-lab-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png' 
  // Si tienes un archivo CSS, agrégalo aquí, ej: './style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
