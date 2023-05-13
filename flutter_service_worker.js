'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "47dbc540ce2abf091b228fbe14fd4eaf",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/image/1.png": "9c824b358795067b22892a0d23efebf9",
"assets/image/10.png": "c91ec2a85440b99387b969c5ef801388",
"assets/image/2.png": "3fcd08d66857b22bd8bd1ae64d83a6ef",
"assets/image/3.png": "461a68ba6b50c842b0cef36dcb20887c",
"assets/image/4.png": "aa1fc15ec89a744b10e67c1576b3fa04",
"assets/image/5.png": "0a372a027bb2e68af26771857d01bc4b",
"assets/image/6.png": "7d0ea3871b3327844abb924f1e6a68ee",
"assets/image/7.png": "16405eab45d29fd16a843a825b9ba1a4",
"assets/image/8.png": "d04b0958f3c9752833029e76dc6e639d",
"assets/image/9.png": "c81e7a5a28c26d5eb0885a3f747ce2f7",
"assets/image/AI.jpg": "38f3fa0512e6bceeca9c45718d5a15d6",
"assets/image/Arkaan.jpg": "ab8f1d0cf3921c83d958127dcb237512",
"assets/image/ATC.jpg": "666cf258bb28b56e607507f766e1ac59",
"assets/image/Brainnest.png": "59da91222721a1584bfefd2d0ad98734",
"assets/image/BT.png": "45a39e8724a3f5d66a7f234458e413be",
"assets/image/C%2523.png": "a05b27ea16eb62918d04146261e1553a",
"assets/image/Data%2520Science.jpg": "b3531b89f098d0773edfcfbf58063d99",
"assets/image/Diyarimage.png": "9b2892874b0b0115e5ccfff8c6781c4c",
"assets/image/FEMALE.png": "c87fbe663e63e4bca8e47e4e2424e15f",
"assets/image/FGF.png": "40c6647f8d87b1e6ad79c2df9f0f164f",
"assets/image/Icon.png": "79700f971c5fcfc738d2b33ae781469b",
"assets/image/iconRB.png": "4e13a1c528b91d01dbce95076f04c40d",
"assets/image/Java%2520script.png": "1721ecb2511fc95e7a0dbfe9ad25fde3",
"assets/image/Machine%2520Learning.jpg": "46ac0252bf5cf56b7eb914fb5024f980",
"assets/image/Male.png": "fe9b4774d13a3522c3ecdafce8c3a67e",
"assets/image/Mohammed.jpg": "c88adddd1c8d1a1edf131b0159c4ba48",
"assets/image/Programming.jpg": "dfcb871d2a51b41f54722faff47d63db",
"assets/image/Python.jpg": "0d9a00d50c395a0cb29762b95ca02737",
"assets/image/R.jpg": "78fad7ea672ec727c27b7889f71e045a",
"assets/image/Skills/C%2523.png": "a05b27ea16eb62918d04146261e1553a",
"assets/image/Skills/FIDDLER.png": "353ff3685efb9ef6a9242280595dceb1",
"assets/image/Skills/Figma.png": "8a3f83316819f89a1bcecd1188bd50fc",
"assets/image/Skills/Firebase.png": "69930757890e3fb2c054c2eebbd1c2e0",
"assets/image/Skills/Flutter.png": "5f334f807de1703371c0bffc44538ac3",
"assets/image/Skills/JavaScript.png": "9ac02223e2ca0ea620788a612bdee1fa",
"assets/image/Skills/LINUX.jpg": "e5a6b2ff0fd9e4bc64bc0d2d4f76606c",
"assets/image/Skills/pOSTMAN.png": "8c98de69775b63dd02f323f8cb82c873",
"assets/image/Skills/Python.jpg": "0d9a00d50c395a0cb29762b95ca02737",
"assets/image/Skills/SQL.png": "e9a5e4445a3ba7e184c010eff71055b7",
"assets/image/The_Hope.png": "a7bd7f7f9bf89a49b84df8366294715f",
"assets/image/Tuned.jpg": "b77710e4fb96f6c6a3646ca467bea0a2",
"assets/NOTICES": "66bfc1dd0bcdf346e49afceb5a046aca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "241917c236a6f7eb7a1a2d98b7ecddec",
"/": "241917c236a6f7eb7a1a2d98b7ecddec",
"main.dart.js": "a27a036e7dceea8118c42921ea76130f",
"manifest.json": "a27472a0f8403f662a4128664cfeb4cd",
"version.json": "996d0453108194c712e2f0b2655d68db"
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
