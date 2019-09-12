/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "efac054ab7fc84a0951e958805022290"
  },
  {
    "url": "api/index.html",
    "revision": "dc5ee8659d7a75e7813b8ef8d8a79d6a"
  },
  {
    "url": "api/rules.html",
    "revision": "bca63404cfce68fdd1592833898801ef"
  },
  {
    "url": "assets/css/0.styles.8509a2e6.css",
    "revision": "d1e42bcba5f5d1c9cc7739756aed1013"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4a3f4a7f.js",
    "revision": "20fa24719a2a17a9dadb39502ef4fbc4"
  },
  {
    "url": "assets/js/11.6365fa27.js",
    "revision": "f9c8f0b385bfdc633103e7157f52f293"
  },
  {
    "url": "assets/js/12.4673c627.js",
    "revision": "9805829283f305e5d967c8d10fe20e7a"
  },
  {
    "url": "assets/js/13.446cab4a.js",
    "revision": "f3c146f36bd106f596146c624aa5b6e3"
  },
  {
    "url": "assets/js/14.e1b3722b.js",
    "revision": "9184911cb9fcbabcd100d0082c75a70e"
  },
  {
    "url": "assets/js/15.9bfcc9a4.js",
    "revision": "1272d771c016aeb8610954f8e6df21ad"
  },
  {
    "url": "assets/js/16.ebcb8093.js",
    "revision": "b26d12f20e3a57b38de0cefb007f8a02"
  },
  {
    "url": "assets/js/17.cf4976db.js",
    "revision": "8f12629d745bd3bc9747fc4b783905bf"
  },
  {
    "url": "assets/js/18.5a06b216.js",
    "revision": "0bbcd059639540ce18c59bc4cec7a31c"
  },
  {
    "url": "assets/js/19.b1ea6a80.js",
    "revision": "9d7b371cf13bbd850218f224cb79d9ff"
  },
  {
    "url": "assets/js/2.073d9722.js",
    "revision": "7868ccb537af1d357fee69f8d1564ebe"
  },
  {
    "url": "assets/js/20.d1d9865f.js",
    "revision": "8a16182e352800bb1d0319888b6bf374"
  },
  {
    "url": "assets/js/21.683c2377.js",
    "revision": "dd9ebd67d986e5e00715ca0b0c647b8a"
  },
  {
    "url": "assets/js/22.f8267075.js",
    "revision": "db783134b154b37932fcf61a51c0b7e1"
  },
  {
    "url": "assets/js/23.bd5b2732.js",
    "revision": "9a31493b440b202b71ab00f2da9e31ef"
  },
  {
    "url": "assets/js/24.6d9bbcf2.js",
    "revision": "77efffa4721ce349b684a36ce06d0ce4"
  },
  {
    "url": "assets/js/25.6700b026.js",
    "revision": "b75a17ee952ab4bb95359f63094477f1"
  },
  {
    "url": "assets/js/26.2016bd00.js",
    "revision": "9c4f8c30d69caa45fea702127c1cc298"
  },
  {
    "url": "assets/js/27.eb244a3f.js",
    "revision": "1a9d37fa6d7398dd12d91a37927e8446"
  },
  {
    "url": "assets/js/28.968c634b.js",
    "revision": "35e53a3910f115cb809b7309d96c607f"
  },
  {
    "url": "assets/js/29.de5ef328.js",
    "revision": "13ccf0aefc59b2773d6d6480f7160df4"
  },
  {
    "url": "assets/js/3.eeb12915.js",
    "revision": "f408b326195e010d67c8de41935fb4a9"
  },
  {
    "url": "assets/js/30.88245c6c.js",
    "revision": "787b75d5cf36ec180f85787348d9730a"
  },
  {
    "url": "assets/js/31.ed612d56.js",
    "revision": "cb10376f5de7d52a71c9bdf6af80ceb0"
  },
  {
    "url": "assets/js/32.a1b1d55a.js",
    "revision": "2aaa24f986df42ffcc029580b4f71c6a"
  },
  {
    "url": "assets/js/33.0f31e358.js",
    "revision": "c253492b7a8f53e7c4f7e3fc3564b963"
  },
  {
    "url": "assets/js/4.9233fc03.js",
    "revision": "2be0795629a7142d25758f6d8e770e95"
  },
  {
    "url": "assets/js/5.1cd9e708.js",
    "revision": "774a6b0c6596f343facf0fb1e0ca1bff"
  },
  {
    "url": "assets/js/6.ae694ac1.js",
    "revision": "8cbda0d210ad97c3dcafdd962d96ec0e"
  },
  {
    "url": "assets/js/7.1f80b9cc.js",
    "revision": "20a752e403d78710f129fbed4ce25164"
  },
  {
    "url": "assets/js/8.9122d0f2.js",
    "revision": "345b2c7fea73f35c736857bc52f29559"
  },
  {
    "url": "assets/js/9.33762eea.js",
    "revision": "4c490899addd7b68962a54f5ec0d380c"
  },
  {
    "url": "assets/js/app.341df273.js",
    "revision": "e09075085d61457496bd0b9af82bc4e7"
  },
  {
    "url": "configuration.html",
    "revision": "bbd5881e0d582be03e5ec4f24df0c161"
  },
  {
    "url": "examples/backend.html",
    "revision": "bd2da3918c2c0218c3f9e1b61f152508"
  },
  {
    "url": "examples/i18n.html",
    "revision": "0045fb65ae75207fedd0aa32d477aa19"
  },
  {
    "url": "examples/index.html",
    "revision": "3566b073f3f59c6605d483ad1496f30b"
  },
  {
    "url": "examples/multiple-forms.html",
    "revision": "06d80220f1c32e8315d62ee7f1cb0183"
  },
  {
    "url": "examples/nuxt.html",
    "revision": "c0fa1f3877781e5df48e6919bec710ec"
  },
  {
    "url": "examples/ui-libraries.html",
    "revision": "d82991651b6f75b0b8c3e40c93ee36f0"
  },
  {
    "url": "guide/a11y.html",
    "revision": "9e119292f93283dac87a262690a6f28e"
  },
  {
    "url": "guide/advanced-validation.html",
    "revision": "93c12df00f2a8d0f8c333a8e523c1e87"
  },
  {
    "url": "guide/applying-rules.html",
    "revision": "0ac5cf7105cc873a63d1405e693c03f6"
  },
  {
    "url": "guide/basic-validation.html",
    "revision": "737ced02512d6141ff530ac32fb5e1fa"
  },
  {
    "url": "guide/displaying-errors.html",
    "revision": "7f4eb88df8f503c60523485b38078847"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "2ff1d671f79b02775a62387946d33933"
  },
  {
    "url": "guide/html5-validation.html",
    "revision": "f5c2db20b63fc323f6350c936a63cfc9"
  },
  {
    "url": "guide/index.html",
    "revision": "13e372400c00f1c9ba2319c171b1983b"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "624f6d974e3f23d94edf7c8ad25ea97c"
  },
  {
    "url": "guide/localization.html",
    "revision": "e72e3333c60672b2fde6f3d8862c49a9"
  },
  {
    "url": "guide/styling.html",
    "revision": "92cea3fbc4b2c827d30195c22386219b"
  },
  {
    "url": "guide/testing.html",
    "revision": "9686c4fd0dca6b543467ee9dd1e422b3"
  },
  {
    "url": "guide/validation-observer.html",
    "revision": "e87fd3ecfe42ef58950e53fa8f278758"
  },
  {
    "url": "guide/validation-provider.html",
    "revision": "a3e0f109f515cd11ce243d0c046da37f"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "7b2f6cd25c8c945c31a91a539d76d83d"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
