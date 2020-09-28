self.addEventListener("install", e => {
    e.waitUntill(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./public,", "./public/css/style.css", "./public/img/rogo.png"]);
        })
    )
});
self.addEventListener("fetch", e => {
    caches.match(e.request).then(response => {
        return response || fetch(e.request);
    })
})