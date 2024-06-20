export function initializeFbPixel() {
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
}

export function createNoscript(param) {
  window.addEventListener("DOMContentLoaded", () => {
    const noscriptElement = document.createElement("noscript");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("height", "1");
    imgElement.setAttribute("width", "1");
    imgElement.setAttribute("style", "display:none");
    imgElement.setAttribute(
      "src",
      `https://www.facebook.com/tr?id=${param}&ev=lead&noscript=1`
    );
    noscriptElement.appendChild(imgElement);
    document.body.prepend(noscriptElement);
  });
}
