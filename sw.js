/* ==========================================================================
   SERVICE WORKER — offline study support
   --------------------------------------------------------------------------
   Strategy: cache-first for the course shell, with a quiet background refresh.
   The course is under 1 MB, so we simply cache the whole thing on install.

   WHEN YOU UPDATE CONTENT: bump CACHE_VERSION below by one. Without that,
   returning learners keep seeing the old cached version. This is the single
   most common mistake with service workers, so it is worth a calendar note.
   ========================================================================== */

const CACHE_VERSION = 'v2';
const CACHE = 'cholesterol-mooc-' + CACHE_VERSION;

const SHELL = [
  './',
  'index.html',
  'check.html',
  'manifest.webmanifest',
  'icon.svg',
  'assets/style.css',
  'assets/content-a.js',
  'assets/content-b.js',
  'assets/course.js',
  'assets/tools.js',
  'assets/app.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll fails atomically if any single file 404s, which would leave the
      // learner with no offline copy at all. Cache individually instead.
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return;   // never touch third-party requests

  e.respondWith(
    caches.match(req).then(hit => {
      // Serve from cache immediately, then refresh the copy in the background
      const network = fetch(req).then(res => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => null);

      if (hit) { network; return hit; }

      return network.then(res => res || caches.match('index.html'));
    })
  );
});
