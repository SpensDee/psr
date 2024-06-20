// Функція для зміни статусу кнопки
function changeButtonStatus() {
  console.log(
    "Функція changeButtonStatus() викликана після успішного кешування ресурсів."
  );
  // Тут можна додати код для зміни статусу кнопки
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open("cache-v9")
      .then(function (cache) {
        return cache.addAll([
          // Список ресурсів для кешування
          "/",
          "/index.html",
          "/css/style.css",
          "/index.js",
          "/images/logo.png",
          "/fonts/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          "/fonts/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvbQoi-E.woff2",
          "/fonts/Gw6kwdfw6UnXLJCcmafZyFRXb3BL9rvi0QZG3Sy7X00.woff2",
          "/fonts/kJEjBvgX7BgnkSrUwT8UnLVc38YydejYY-oE_LvJHMXBBA.woff2",
          "/images/1.png",
          "/images/2.jpeg",
          "/images/3.jpeg",
          "/images/4.jpeg",
          "/images/5.png",
          "/images/6.png",
          "/images/7.png",
          "/images/8.png",
          "/images/9.png",
          "/images/10.jpeg",
          "/images/11.png",
          "/images/12.png",
          "/images/13.png",
          "/images/14.png",
          "/images/15.png",
          "/images/16.png",
          "/images/favicon.ico",
          "/images/us.png",
          "/images/user.png",
          "/players/1.png",
          "/images/players/2.png",
          "/images/players/3.png",
          "/images/players/4.png",
          "/images/players/5.png",
          "/images/players/6.png",
          "/images/players/7.png",
          "/images/players/8.png",
          "/images/players/9.png",
          "/images/players/10.png",
          "/images/players/11.png",
          "/images/players/12.png",
          "/images/players/13.png",
          "/images/players/14.png",
          "/images/players/15.png",
        ]);
      })
      .then(function () {
        // Після успішного кешування ресурсів викликаємо функцію changeButtonStatus()
        changeButtonStatus();
      })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("message", function (event) {
  if (event.data.type === "OPEN_PWA") {
    // Open the PWA application
    clients.openWindow(self.registration.scope, "_self");
  }
});
