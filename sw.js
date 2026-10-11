// This address used to hold a test copy of 武家合戦3D. That copy is gone: this worker removes itself and its saved files,
// so the hand-over page (index.html) is always loaded fresh. It never touches the original 武家合戦 (buke-v*) files.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  const ks=await caches.keys();await Promise.all(ks.filter(k=>k.startsWith('buke-keep3d-')).map(k=>caches.delete(k)));
  await self.registration.unregister();
  const cs=await self.clients.matchAll({type:'window'});for(const c of cs)try{c.navigate(c.url);}catch(e){}
})()));
