import { SyncService } from "./app/sync/sync.service";

const syncService = new SyncService();
let context: any = self;

// Build-DAte: 234243242

self.addEventListener('fetch', (e: any) => {
  if (e.request.url.includes('index.html')) {
    e.respondWith(fetch(e.request));
  }
});

self.addEventListener('sync', async (e) => {
    let all = await syncService.fetchAll();
    let i = 0;
    let tasks = all.map(async req => {

        i++;

        let headers = new Headers();
        headers.set('Content-Type', 'application/json');

        return fetch(req.url, {
            method: req.method,
            headers,
            body: JSON.stringify(req.payload)
        })
        .then(ok => {
            console.debug('data sent');
            syncService.delete(req.id);
        })
        .catch(err => {
            console.error('error sending data', err);
        });
    });

    await Promise.all(tasks);

    context.clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage(i + ' changes saved');
        })
    });

});

context.addEventListener('install', event => { event.waitUntil(context.skipWaiting()); });
context.addEventListener('activate', event => { event.waitUntil(context.clients.claim()); });

