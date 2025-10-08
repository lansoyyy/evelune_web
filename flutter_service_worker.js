'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6a598a9e49d4b774e2beb11cb6fd2ab7",
"assets/AssetManifest.bin.json": "96827688b324e34ffebd486296bf63c2",
"assets/AssetManifest.json": "87b0b3f44e9fcc6cb3dc1f29f0367676",
"assets/assets/48_Light_articles.png": "3a2b07681e1c2268982f5a0941697723",
"assets/assets/fonts/Urbanist-Bold.ttf": "f1be12677cd5a989d8851a7743ea9b9e",
"assets/assets/fonts/Urbanist-Medium.ttf": "b772c045777ba8193439cd080d580285",
"assets/assets/fonts/Urbanist-Regular.ttf": "40b401cd8b8d6dc564119975375d0111",
"assets/assets/images/calendar/angry.png": "bd3d6c6a9a89e47aeaec687f9ed4b94f",
"assets/assets/images/calendar/anxious.png": "0706742cd790966f9c959927ed4e2623",
"assets/assets/images/calendar/bored.png": "a9c587103b17c21cbe5676991b4a7905",
"assets/assets/images/calendar/breasttenderness.png": "04412ba0b8587b0fc75d922d82f8ad00",
"assets/assets/images/calendar/condom.png": "39c94add89419fe8bf9292d76438e3e2",
"assets/assets/images/calendar/confident.png": "fe8c44b3b2306289d2e659e3445ab1a3",
"assets/assets/images/calendar/depressed.png": "862032c730ccbf1c75219ef96ecd07b3",
"assets/assets/images/calendar/disaster.png": "a579f859406fcb7ecd9bfef7989eece6",
"assets/assets/images/calendar/Emoji=Blood,%2520Component=Fluent%2520Emojis.png": "93fad7f1025c0afdd1c22b101a0030c6",
"assets/assets/images/calendar/Emoji=Four-leaf-clover,%2520Component=Fluent%2520Emojis.png": "58625cfd9a74eee43b93a3100d1f8a61",
"assets/assets/images/calendar/Emoji=Orange-circle,%2520Component=Fluent%2520Emojis.png": "09d8e49da0205cb5c18184bb51ea82de",
"assets/assets/images/calendar/Emoji=Spiral-calendar,%2520Component=Fluent%2520Emojis.png": "4e5181cb1095137be332920b37aac9fa",
"assets/assets/images/calendar/excited.png": "70f45a09eebe82c9c6a3fee3c01e7e39",
"assets/assets/images/calendar/exhausted.png": "fa643e751c8081aaeaf95e36a183a0bb",
"assets/assets/images/calendar/happy.png": "73086187420512f99915ceea2a780bb2",
"assets/assets/images/calendar/headaches.png": "9169e970af2de9139b4d8c9f78f54dba",
"assets/assets/images/calendar/heavy.png": "3dd2376ed5256aedc5f6789c7377709c",
"assets/assets/images/calendar/hotflashes.png": "a1aa7152e7a7d1a20590d92ff56224a9",
"assets/assets/images/calendar/implant.png": "8996a134298884bda38055421856594b",
"assets/assets/images/calendar/inlove.png": "afbf61434465f12bfae20f533a639dd3",
"assets/assets/images/calendar/insomnia.png": "05e0c16f94b44d562d0289d0eb9d6b3c",
"assets/assets/images/calendar/irregularperiod.png": "483464326716610fd43d7881bcb97bc5",
"assets/assets/images/calendar/iud.png": "c4db366758640ed698b76c79ead2f3ff",
"assets/assets/images/calendar/jointpain.png": "c064e6498b2e2cd3f00cac58a5199126",
"assets/assets/images/calendar/light.png": "83be07c19c40c73f78ab7f906fb01497",
"assets/assets/images/calendar/log/Clear.png": "9985bd1dec6e2b9680b631c7138dbccb",
"assets/assets/images/calendar/log/Egg-White.png": "71720a0a3d7ff4c5bc87d481752c5723",
"assets/assets/images/calendar/log/No.png": "0a9c088e6552871b75c6afaab689676c",
"assets/assets/images/calendar/log/None.png": "e7be4bc6e525e7979f604d08cab3e371",
"assets/assets/images/calendar/log/White.png": "a9e05e3676cfe4fb8107a2c54948c895",
"assets/assets/images/calendar/log/Yes.png": "4324ace1180b6d1e285533881a63f16e",
"assets/assets/images/calendar/medium.png": "2ac7186ead0da12bd19cd2179021e99c",
"assets/assets/images/calendar/memoryproblem.png": "d1bd1f3d7ce969093dfe697654ae2d79",
"assets/assets/images/calendar/moodchange.png": "c6baa92aa22580aa46073b5bafd5a549",
"assets/assets/images/calendar/nightsweats.png": "6aaf109799645ce054bf48ef7798fe55",
"assets/assets/images/calendar/normal.png": "dcc5d0ec776be960803763cc02a75c78",
"assets/assets/images/calendar/patch.png": "31fe2b72b2d6d3839b0cccd31b1bab8e",
"assets/assets/images/calendar/pill.png": "bf351f81547ea34736cd0c42f6dbf3c1",
"assets/assets/images/calendar/relaxed.png": "4bdc441c28cec35e870d52bf11eed0ac",
"assets/assets/images/calendar/ring.png": "ded33e6d82fe1f3cc09889e5fcf3b239",
"assets/assets/images/calendar/sad.png": "6cb78785915824653316823731484c15",
"assets/assets/images/calendar/shot.png": "29ae82bce9c823aace31b95ad946abdc",
"assets/assets/images/calendar/spermicide.png": "3c92bccd5870b443f6c0a6fbb5393d6b",
"assets/assets/images/calendar/thinninghair.png": "c04d6a1e4cd31888fa3b574bdd204dc7",
"assets/assets/images/calendar/vaginaldryness.png": "51fd807850bf060c652ac4ae5da57189",
"assets/assets/images/calendar/water/100.png": "dfb49aedad6a03c7f32dd382a6a09408",
"assets/assets/images/calendar/water/125.png": "0cdd1e6e58cf4e28d380fff306a582cf",
"assets/assets/images/calendar/water/150.png": "34736f17df23f15bd0f5763ce32170c7",
"assets/assets/images/calendar/water/200.png": "c9b5a50e29933c1527a3662af3a1ecc6",
"assets/assets/images/calendar/water/250.png": "784271ac7289fc70a09cf05e84fd4507",
"assets/assets/images/calendar/water/300.png": "57582263da5af4d9ec769835c43b582b",
"assets/assets/images/calendar/water/350.png": "e4926b2c17f4bb86dbd0e7b018d0c46c",
"assets/assets/images/calendar/water/400.png": "411e7b4a58e48f11a8d57c0157750e13",
"assets/assets/images/calendar/water/500.png": "db56708d57920726e6c0ccca40b7cef8",
"assets/assets/images/calendar/water/600.png": "18d56815be35cc9fec027569e88b40a4",
"assets/assets/images/calendar/water/drop.png": "a8ea0ee93ed99a576c8ddd2750e87638",
"assets/assets/images/calendar/weightgain.png": "ba19464ddaa567cf7bf9309768e4acce",
"assets/assets/images/home/Emoji=Orange-circle,%2520Component=Fluent%2520Emojis.png": "09d8e49da0205cb5c18184bb51ea82de",
"assets/assets/images/home/Group.png": "ed66e20c661a7ef68f4b8b2172d664d1",
"assets/assets/images/home/Vector.png": "fb1b9fc2a6ef8c0adf08eb40ad411b22",
"assets/assets/images/illustration.png": "2694ed0eaea23f6a1545ce0b142bfc9a",
"assets/assets/images/onboarding/googlelogo.png": "8b09529caed06dd8b0874dd275f80d11",
"assets/assets/images/onboarding/loginlogo.png": "267bad24b214a0a004ac27fdf646e8cf",
"assets/assets/images/onboarding/phone1.png": "2157bea3d99e4fe3ea85ac745e07942d",
"assets/assets/images/onboarding/phone2.png": "1bcc60f76e635b154f1011e6f116481c",
"assets/assets/images/onboarding/phone3.png": "63398b605d565d3703e2254c226b244b",
"assets/assets/images/onboarding/splashlogo.png": "47675c7692fd0ccba81168635ca81bfc",
"assets/assets/images/phases/Follicular.png": "e9416994411a1ccac272069b45555691",
"assets/assets/images/phases/Luteal.png": "5acb28c66ec7d3b0bb13f6663d62bf31",
"assets/assets/images/phases/Menstrual.png": "1ca8f4336d5f6a0af97d2fcb89efe598",
"assets/assets/images/phases/Ovulation.png": "2205ba2f5f1df577ab506705205eefd1",
"assets/assets/images/user%2520(1).png": "1a2bad701292dc669438016401ea1db2",
"assets/assets/Screenshot%25202025-09-03%2520111848.png": "c330c21a2cfcfb43a2ca6afb048f4543",
"assets/FontManifest.json": "3c11146eecc07da87cbd6533f988d11a",
"assets/fonts/MaterialIcons-Regular.otf": "9d94970604d6816ba252234dd116bada",
"assets/NOTICES": "fc3dfe459e6fe94fc56bafee9de0765e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4378c9fc50f5ac364ec850416c1c56da",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "977d70f0a38e62cd68bda549e0f5ce93",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "ba16263b191fcbc3398b6781489b6812",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9d7ac06aa9bf6b345cd85bdf4a01c54a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "267bad24b214a0a004ac27fdf646e8cf",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "4fe636c85a7b2dd458630589569dbcd8",
"icons/Icon-192.png": "267bad24b214a0a004ac27fdf646e8cf",
"icons/Icon-512.png": "267bad24b214a0a004ac27fdf646e8cf",
"icons/Icon-maskable-192.png": "267bad24b214a0a004ac27fdf646e8cf",
"icons/Icon-maskable-512.png": "267bad24b214a0a004ac27fdf646e8cf",
"index.html": "cb533a47259874a18114f77b33ee6a89",
"/": "cb533a47259874a18114f77b33ee6a89",
"main.dart.js": "b2e470767436f1afa0389730d1c9602b",
"manifest.json": "9dd6ba97e3fff2deaa6ede8d57db6240",
"version.json": "3ac4ed97907638d325cab75617551cc1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
