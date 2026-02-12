const CACHE_NAME = 'madrasa-site-v2'; // ഇവിടെ v1 മാറ്റി v2 ആക്കി
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/madrasa.jpg'
];

// ഇൻസ്റ്റാൾ ചെയ്യുമ്പോൾ ഫയലുകൾ സേവ് ചെയ്യുന്നു
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// പഴയ കാഷെ ഡിലീറ്റ് ചെയ്യുന്നു (ഇതാണ് പുതിയ അപ്ഡേഷൻ വരാൻ സഹായിക്കുന്നത്)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// പുതിയ ഡാറ്റ ഉണ്ടെങ്കിൽ അത് എടുക്കുന്നു
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});