'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0beb0911c49063c70710c3c1363ccf48",
".git/config": "b49ca668c2baa1dde0b060bba1bb5983",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bfd9231f67c961db9d8ec5f83fffa94a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "67a6f73552bf05f601880a8971a10ce0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "26c5502b8887f7eb4d9d6b08310f0093",
".git/logs/refs/heads/main": "2b7d34467247071abef6d82b9c338307",
".git/logs/refs/remotes/origin/main": "3c5c5c4673e23608567be8bfed6fdba6",
".git/objects/02/c9ce1410d85de5cd89c2a72e557b03bef06cfa": "810cccb56e854827cd82e10458089434",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1c/4f76844a1dd04a1ae4b1e696f3751558cf0abc": "e646827f202cef112fa98685d4d61f3e",
".git/objects/2c/80ed6d220e6e90ee20c7719ab03e9d1e530702": "b3da803334cbf1ce6f5a8bfc152b47ad",
".git/objects/2f/aff4ccbd73038a8c0a2f1686437dad3fc10c60": "a07e33de757652fb9d0203a79014103e",
".git/objects/31/0f7d7fa6edf75139f131e62ab50bfa24ce3baf": "11b774e90409944ca1141837d2db5331",
".git/objects/32/e9e6f33b2775a217db2ed35893bc21362562ab": "f461552c48d52dc38728521c3456aa0d",
".git/objects/37/355ae1234602c099ddd1555a4a549e75360c8c": "2da2e618e9eefb48bad2a917ceb6351d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/04975685fdb839890c20a25a53043225f0bf79": "19750b4c2957de292fbd900f85dd601e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/b7e7cc2858f780c7f4b3d0d84ac128975ddb22": "fa126ef1055d2bf8e345e1d60359d0be",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/1ae61a25a8285dd6819e1ed6f0f854466d82a5": "4109a60531c9028730682342f6fd02c9",
".git/objects/64/016a526975b54e4e9042d00aa5393c46a241e2": "e5416186871a7d672141015ddd3d4dbd",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/5543537caa041705caf4265f97f9a402be6d32": "22a972d046e907356bd39a0085e2ab52",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/3acaeb4de4b417b093c67529247acc5be0a2d2": "6ca0a6236613e3f2631ae9ca319d8756",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/462e883269c114f296f18cc7c84c11c2dc493e": "37fb8a882e10c7082c64f7d7a15e89eb",
".git/objects/83/8a769e20fbc2d6df3aceadb1ced3ca67ec2d79": "ca4960b162cfd6073ac890dfaf78b08b",
".git/objects/85/3a44c9be274c2f723acb9cea2c58b896eab2e3": "7cf180d9565bcb27b32e9db482630b33",
".git/objects/86/8b6fbbc7d2e5a915d48aa6da9cae13c9d2217b": "d8149ff798c64ec5a65227ef5ff2bcb6",
".git/objects/8b/71528dbac0694ec32fd812662e63f7da52c870": "368999900c310a93b1063c6862d6a03d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/95/69d77c6aa441648d1c905359ac0c0d10a4f58a": "b04621fd0250502a149701d419501fad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/647a16654735ad3174bbfa4eb04b3d508da8b5": "c3d349dc0aaaf41d60e079444df21451",
".git/objects/a7/3d9a8192595b739ae1be750941e68722b52588": "4fb70d61afde2508274797dbb0a96f78",
".git/objects/a8/47c6d72f7423c0050a4c4e59aeabe88381da83": "76db884ded18818b07c06e64d9f93ce7",
".git/objects/a9/5f77b8e3b323edb5ff36cb6ecd240d8150abf4": "436adb126dc876ffdcc437e87cdb9c78",
".git/objects/aa/b5d49a4792eec65e7ca6a22d30f0a105779e89": "613b188549b33a4cfb458ea94a141db8",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/fb4f574d36d54b4411d71434c0f80ad2e082c0": "a0aa52ffc714f95b6ac1a05778b21f22",
".git/objects/ae/bacaf8c4d110612ced654801ffc740ece58032": "e7f766278078e4bd76f02e231d6f7350",
".git/objects/b4/79ee2938cdbab400f1b86399b1940391892c23": "02bde4bc7fe5acfe2dbd1ab271ef4157",
".git/objects/bd/8b8a85b174d5a710fb2889cb90444befe0750e": "ea1dcf2e7d194874e3f35f2018c25253",
".git/objects/c6/0a324123eaaeab58c400c139bcabbc6d0d2a9f": "bcef93963028bd2c2f2a85f2f0411fa6",
".git/objects/c7/e851f6683031ef8e7789e07f2360f102fac869": "0dc7442f824fa3905b5fc92c3f85cc55",
".git/objects/ca/f69c10b31e66e59ed949e8980eb565928ab95d": "56210aa51390a36496e753b8aa2fcca8",
".git/objects/cc/cd285c2c779300e5bdab5f9c97f9a2989963a0": "8d8a0dee715f83037ddfa4dd1ce68077",
".git/objects/cf/e90cc4502ab21491420dcde47d1e8ac032c68f": "4a82ed7d44fa8c7565448d75b72ef494",
".git/objects/d9/0349cae915ec0c195c3bb72327c5b2c120c97e": "56d7fd74df47033e7e04eab3ef5e560a",
".git/objects/da/91d4cec68e8d6e066984b72519ca9a57c8313d": "4aef53528c0bf592ecbfdd715cedff6e",
".git/objects/e0/fa83e236dabec0b41e5bc1a12747c0847c6918": "e1469a4a63e3d4131d1d50e13be370dd",
".git/objects/e4/57cc8daf46e54f00a2dacf5c15e7bad12a666b": "03beefea91af11d9fddcf094b7642a71",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/7e885c3b28a9ec5d4be2cec03a6a7047f967a6": "4806208d78d58efbccb67433d821103d",
".git/objects/ee/a102176769a73f43a98414e7624ccf4f95194b": "5f668aa48e68e18df339d058a39241cd",
".git/objects/f0/bc9de35148577471594a91bb574f7ced4f6a3f": "33026a1e2c02a5d5d270371fad6cf174",
".git/objects/f7/382ca71d3c801bb0bea6eed109a1e7dbe380d3": "bcc65aa233dd5ab1df611c8ed11d0522",
".git/objects/f9/6af0b302ef3291ee5daa5e8cf22c4a36912531": "f866299fc2ef9b77cfcaf50e945a18f8",
".git/refs/heads/main": "a3c9e597651593691767c8eb0fbed287",
".git/refs/remotes/origin/main": "a3c9e597651593691767c8eb0fbed287",
"assets/AssetManifest.json": "2b1958a6270dc2caae2f8523cf9262ee",
"assets/Assets/fonts/Century%2520Gothic.ttf": "cfce6abbbff0099b15691345d8b94dcc",
"assets/Assets/images/book.png": "8ba1e22720465f541585231b294327fb",
"assets/Assets/images/business.jpg": "62b75b166194b1ce51e36e74293da4a8",
"assets/Assets/images/diamond.png": "cc46b54dbed14b498a22a93c1b7e0ab9",
"assets/Assets/images/eventbackground.png": "f35d26b5e4a6e035627237d29840fd52",
"assets/Assets/images/gold-ingot.png": "7468a65665c06d57e16e8143aa9042bf",
"assets/Assets/images/jewelry.png": "48e569dffe396d592c09f6f7cee8d364",
"assets/Assets/images/lightbulb.png": "1e7db40be7a8312b57c95b295eb90d45",
"assets/Assets/images/logo.png": "5831b5efc133000d7be62932b9030102",
"assets/Assets/images/mobile.png": "5956d05544a2c22dcb476769daa7602e",
"assets/Assets/images/ring-box.png": "7e9187db689ea48a51526a1d248d40f9",
"assets/Assets/images/story.png": "600d95160cc6c11e1cf2f1f2d2adfd37",
"assets/FontManifest.json": "ad52efb6fb742d23b996b49bf90d111e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7ee8c1b846bf8014b8d1dc501c1fb939",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "ff19d64b8b984f62f18050c40a1370cd",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/favicon-16x16.png": "7a1b196a0f7c31be1a9c79e6457c7e9b",
"icons/favicon-32x32.png": "1d4773573e9e7da15538931017567dc2",
"icons/Icon-192.png": "d6b16c30d6a7b2737bc5bb074d3b864d",
"icons/Icon512.png": "f1629d59268233ed30ba72bddcfbf1d3",
"index.html": "537f118bce18532c841f7aaee3920b0b",
"/": "537f118bce18532c841f7aaee3920b0b",
"main.dart.js": "5cc7e6a564176d9800c6fff65f594234",
"manifest.json": "c3166dbee486b123ca6f2e107a79425d",
"version.json": "301e808ce30229d3f302a0a4f6a52f74"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
