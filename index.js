var installButton = document.querySelector(".installButton");

const installed = localStorage.getItem("installed");

if ("getInstalledRelatedApps" in navigator) {
  const relatedApps = await navigator.getInstalledRelatedApps();
  const PWAisInstalled = relatedApps.length > 0;

  if (PWAisInstalled) {
    console.log("PWA установлен");
    document.querySelector(".txt").innerHTML = "Open";
    installButton.addEventListener("click", playApp);
  } else {
    document.querySelector(".txt").innerHTML = "Install";
  }
}

// if (installed === "1") {
//   document.querySelector(".txt").innerHTML = "Open";
//   installButton.addEventListener("click", playApp);
// } else {
//   document.querySelector(".txt").innerHTML = "Install";
// }

function installation() {
  if (!installed) {
    document.querySelector(".FuSudc").style.display = "none";
    document.querySelector(".loading").style.display = "block";
    runner();
    setTimeout(() => {
      document.querySelector(".FuSudc").style.display = "block";
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".txt").innerHTML = "Open";
      installButton.addEventListener("click", playApp);
    }, 8000);
  } else {
    installButton.addEventListener("click", playApp);
  }
}

function playApp() {
  window.open(`https://${window.location.hostname}/redirect.html`, "_blank");
  // localStorage.setItem("installed", "1");
}

function runner() {
  let w = 0;
  let mht = 0;
  const t = setInterval(() => {
    if (w < 100) {
      w += 10;
      mht += 1.2;
      document.querySelector(".htg").innerHTML = `${mht.toFixed(
        1
      )} MB / 12,5 MB`;
      document.querySelector(".runner").style.width = `${w}%`;
    }
  }, 800);
}

setTimeout(() => {
  document.querySelector(".txt").style.display = "block";
  document.querySelector(".proc").style.display = "none";
}, 2000);

document.addEventListener("DOMContentLoaded", () => {
  let deferredPrompt;

  // Проверка установки PWA
  function isPWAInstalled() {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    const isIOS = window.navigator.standalone === true;
    return isStandalone || isIOS;
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    // e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = "block"; // Показать кнопку установки
  });

  installButton.addEventListener("click", async () => {
    if (!deferredPrompt) {
      console.log("deferredPrompt не инициализирован");
      return;
    }

    deferredPrompt.prompt(); // Показать приглашение на установку

    const choiceResult = await deferredPrompt.userChoice; // Ожидание выбора пользователя
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
      installation();
    } else {
      console.log("User dismissed the A2HS prompt");
    }
    deferredPrompt = null; // Сбросить deferredPrompt
  });
});
