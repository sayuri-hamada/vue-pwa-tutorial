/* eslint-disable no-undef, no-restricted-globals */

import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
  debug: true
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// if (!self.define) {
//   let e,
//     s = {};
//   const r = (r, i) => (
//     (r = new URL(r + ".js", i).href),
//     s[r] ||
//       new Promise((s) => {
//         if ("document" in self) {
//           const e = document.createElement("script");
//           (e.src = r), (e.onload = s), document.head.appendChild(e);
//         } else (e = r), importScripts(r), s();
//       }).then(() => {
//         let e = s[r];
//         if (!e) throw new Error(`Module ${r} didn’t register its module`);
//         return e;
//       })
//   );
//   self.define = (i, n) => {
//     const o =
//       e ||
//       ("document" in self ? document.currentScript.src : "") ||
//       location.href;
//     if (s[o]) return;
//     let t = {};
//     const l = (e) => r(e, o),
//       c = { module: { uri: o }, exports: t, require: l };
//     s[o] = Promise.all(i.map((e) => c[e] || l(e))).then((e) => (n(...e), t));
//   };
// }
// define(["./workbox-15e41e4b"], function (e) {
//   "use strict";
//   e.setCacheNameDetails({ prefix: "vue-pwa-tutorial" }),
//     self.addEventListener("message", (e) => {
//       e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
//     }),
//     e.precacheAndRoute(
//       [
//         { url: "/css/app.3cc8797d.css", revision: null },
//         { url: "/index.html", revision: "04e22e9561c54d8704c16788c5db60f7" },
//         { url: "/js/about.3471b9ca.js", revision: null },
//         { url: "/js/app.6ed5a47c.js", revision: null },
//         { url: "/js/chunk-vendors.52656d2e.js", revision: null },
//         { url: "/manifest.json", revision: "1658426d2fb304491386bcf1b21e92df" },
//         { url: "/robots.txt", revision: "b6216d61c03e6ce0c9aea6ca7808f7ca" },
//       ],
//       {}
//     ),
//     e.registerRoute(/.+(\/|.html)$/, new e.CacheFirst(), "GET");
// });
// //# sourceMappingURL=service-worker.js.map
