/* Codex Armorium service worker.

   Two rules that are not negotiable:

   1. api.scryfall.com is NEVER cached. CACHE in codex.html is deliberately memory-only
      so pricing is always current (see CLAUDE.md) — persisting API responses here would
      quietly undo that and show stale money.
   2. The app shell is network-first, cache-only-as-fallback. Cache-first is the classic
      PWA trap: you push a fix, the installed app keeps serving yesterday's HTML, and the
      bug "comes back" with no way to explain it.

   Card art (cards.scryfall.io) IS cached, cache-first — those URLs are content-addressed
   and immutable, so they can never go stale, and it makes the grid instant on a phone.
*/
/* Bump SHELL whenever an installed copy must not keep yesterday's HTML. activate()
   deletes every cache that isn't the current pair, so the old shell goes with it. */
const SHELL = 'codex-shell-v2';
const ART   = 'codex-art-v1';
const SHELL_FILES = ['codex.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== SHELL && k !== ART).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // rule 1 — pricing and search data must always come off the wire
  if (url.hostname === 'api.scryfall.com') return;

  // immutable art: cache-first
  if (url.hostname === 'cards.scryfall.io' || url.hostname === 'svgs.scryfall.io') {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(ART).then(c => c.put(req, copy)); }
        return res;
      }))
    );
    return;
  }

  // rule 2 — our own files: network-first, fall back to cache only when actually offline
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(SHELL).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('codex.html')))
    );
  }
});
