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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "icons/favicon.png",
    "revision": "2e136ced40c41c4c4967987203368d63"
  },
  {
    "url": "static/icons/favicon.png"
  },
  {
    "url": "styles.05162cd8f3de9f389934.css"
  },
  {
    "url": "framework-6fd88da1f85c27451123.js"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-e6f6b33ada99e3e0749a.js"
  },
  {
    "url": "app-4367a4a63265d9db3a4f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "64901d7d4cdc5d006c0226a94f8fd78c"
  },
  {
    "url": "webpack-runtime-5f418fb3a3fa26c5162b.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-4a2fbab8997530716eeb.js"
  },
  {
    "url": "polyfill-ab497ea5973841dd7061.js"
  },
  {
    "url": "632f76e726b2f375e98333c79fac996debaa2d60-9e238f6c37fc3c2e527b.js"
  },
  {
    "url": "component---src-templates-page-tsx-fcee42b392c5c6aecae7.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "351c84fe87b9119e2d2bd9f38e70722e"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "11c7f8f8c7607c240737b16b852443ba"
  },
  {
    "url": "component---src-pages-news-tsx-37d03699bc59e05d2b77.js"
  },
  {
    "url": "page-data/news/page-data.json",
    "revision": "f90221b4c751e6f1602a715aaa14c9fa"
  },
  {
    "url": "component---src-templates-film-tsx-5d084598ad3ef2511c21.js"
  },
  {
    "url": "page-data/filmography/2-0/page-data.json",
    "revision": "fd6178c42ee26bdcba81916bb213f151"
  },
  {
    "url": "page-data/filmography/a-hairy-tale/page-data.json",
    "revision": "e0db4bedbea7cb462bb0f92bc1de6d82"
  },
  {
    "url": "page-data/filmography/abadan-1160/page-data.json",
    "revision": "3441d06a7494c87992b3fbb27d4631f8"
  },
  {
    "url": "page-data/filmography/agicor-anti-corn-and-wart-adhesive/page-data.json",
    "revision": "faee8bd985a105e41d1344bb483b95db"
  },
  {
    "url": "page-data/filmography/all-alone-the-messenger-of-peace/page-data.json",
    "revision": "22a56623d962850f97ecef3afb836968"
  },
  {
    "url": "page-data/filmography/avalanche/page-data.json",
    "revision": "40733afe197b3aaec3fcc7dee40980b9"
  },
  {
    "url": "page-data/filmography/avazeh-rice/page-data.json",
    "revision": "e490534733fda2a527728e3d4d83e853"
  },
  {
    "url": "page-data/filmography/az-yadha-rafteh/page-data.json",
    "revision": "b9fb6331753ec2560089779d82aeb0e8"
  },
  {
    "url": "page-data/filmography/baahubali-2-the-conclusion/page-data.json",
    "revision": "45060bc2f7f0a43ab1b5762a94c91487"
  },
  {
    "url": "page-data/filmography/bernotti/page-data.json",
    "revision": "356e35fe30ee6cc4796ad057a988538c"
  },
  {
    "url": "page-data/filmography/cheetoz-chips/page-data.json",
    "revision": "47ea9a8662a13014eb3268e8a85a049e"
  },
  {
    "url": "page-data/filmography/cheetoz-fly/page-data.json",
    "revision": "2311b77de0b791618c4abe44e9ae4dbf"
  },
  {
    "url": "page-data/filmography/cheetoz-motori/page-data.json",
    "revision": "64361aacc7e719863cc3c238ccfa0860"
  },
  {
    "url": "page-data/filmography/cheetoz-mr-fish/page-data.json",
    "revision": "13d2e35c3b869726ebacf14aea1c6142"
  },
  {
    "url": "page-data/filmography/cheetoz-promotion/page-data.json",
    "revision": "731dcb984277c48ffe01c9867a0c16ea"
  },
  {
    "url": "page-data/filmography/death-of-the-fish/page-data.json",
    "revision": "4029e6717ef4ccd8e9d753ab87940244"
  },
  {
    "url": "page-data/filmography/duet/page-data.json",
    "revision": "105bfbfeb1fecae481726bac12635276"
  },
  {
    "url": "page-data/filmography/fananees/page-data.json",
    "revision": "b922f2e93978f6e759ab8932399f81c0"
  },
  {
    "url": "page-data/filmography/frog/page-data.json",
    "revision": "9645b5303a2293499a9c8227355d54b6"
  },
  {
    "url": "page-data/filmography/giti-s-problem/page-data.json",
    "revision": "d765c16ffd215ddf8e51d6c986d95ee1"
  },
  {
    "url": "page-data/filmography/gold/page-data.json",
    "revision": "6bbce3902707b32db38ba026df541535"
  },
  {
    "url": "page-data/filmography/hot-scent/page-data.json",
    "revision": "19876ae31cec07c530edb58d675898e2"
  },
  {
    "url": "page-data/filmography/i-am-diego-maradona/page-data.json",
    "revision": "613fcfa1068321f5a5a15ca1ba7ef220"
  },
  {
    "url": "component---src-pages-filmography-tsx-bd2e810fc677d1f8e691.js"
  },
  {
    "url": "page-data/filmography/just-6-5/page-data.json",
    "revision": "fce222abdc40690250edc91c979797ca"
  },
  {
    "url": "page-data/filmography/khatoon/page-data.json",
    "revision": "161a672e282262b65cb996a4a6a721a0"
  },
  {
    "url": "page-data/filmography/kolah-pahlavi/page-data.json",
    "revision": "a4c12efa52c957965fe57f185ecd3465"
  },
  {
    "url": "page-data/filmography/lamp-100/page-data.json",
    "revision": "c3a4e6dd2664243d5f1b46357de1e628"
  },
  {
    "url": "page-data/filmography/latyan/page-data.json",
    "revision": "25c89e8a8d3e4d818a5feb01eb8f3571"
  },
  {
    "url": "page-data/filmography/murphy-s-law/page-data.json",
    "revision": "1e7cd3b01fbebbb65c519b6323223488"
  },
  {
    "url": "page-data/filmography/night-outdoor/page-data.json",
    "revision": "0eca3b88d9d282610385e5b591bde949"
  },
  {
    "url": "page-data/filmography/no-fly-zone/page-data.json",
    "revision": "0b99e8b0e114b2af93a217fe8223e9eb"
  },
  {
    "url": "page-data/filmography/pooneh-toothpaste/page-data.json",
    "revision": "cdf016fc332541977371fa033c07dcc3"
  },
  {
    "url": "page-data/filmography/rightel/page-data.json",
    "revision": "87171acf3612a809b6af447bb106ee90"
  },
  {
    "url": "page-data/filmography/rrr/page-data.json",
    "revision": "85c5556583b6e5afd46458cc1c061bf0"
  },
  {
    "url": "page-data/filmography/saaho/page-data.json",
    "revision": "8ff959e59f8e16e28c2e4492e9cd1afa"
  },
  {
    "url": "page-data/filmography/sarmaye-bank/page-data.json",
    "revision": "494d28c48843cee9cadf4bc0339b8bad"
  },
  {
    "url": "page-data/filmography/siv-liquid-handwash/page-data.json",
    "revision": "9b4c58a8fabf9c3fdc89c1e4e3fc7c97"
  },
  {
    "url": "page-data/filmography/sperm-whale/page-data.json",
    "revision": "0d99a01338148280f8114eee9112e49f"
  },
  {
    "url": "page-data/filmography/spotted-yellow/page-data.json",
    "revision": "96cb067e6d4dc00f1439e53e4c3d1648"
  },
  {
    "url": "page-data/filmography/spyder/page-data.json",
    "revision": "55c32b2883e15c85e0c4e85b07f6766c"
  },
  {
    "url": "page-data/filmography/sun-children/page-data.json",
    "revision": "83a436f89d725673737109c7f3367a66"
  },
  {
    "url": "page-data/filmography/sye-raa-narasimha-reddy/page-data.json",
    "revision": "8c44d4b9efbf683f672dbb6de7b72348"
  },
  {
    "url": "page-data/filmography/the-dark-room/page-data.json",
    "revision": "05cfe371d2b893d819aafee085e45486"
  },
  {
    "url": "page-data/filmography/the-lost-strait/page-data.json",
    "revision": "dabd43dbbb35cabe9c40bcb86414581d"
  },
  {
    "url": "page-data/filmography/the-salesman/page-data.json",
    "revision": "277f8a32e6b4ac223d8c714885f45e08"
  },
  {
    "url": "page-data/filmography/the-second-year-of-my-college/page-data.json",
    "revision": "975d57f571fbcd703767fa999c08f12e"
  },
  {
    "url": "page-data/filmography/the-sinners/page-data.json",
    "revision": "c05d23b3bba9838781e6d777b47ab0f9"
  },
  {
    "url": "page-data/filmography/the-train/page-data.json",
    "revision": "78df0cfe9dcbefaf02e566209fe7d35c"
  },
  {
    "url": "page-data/filmography/the-undercover/page-data.json",
    "revision": "852c3f32d2cb4247b789375499c6bff5"
  },
  {
    "url": "page-data/filmography/the-warden/page-data.json",
    "revision": "dd140d9bf1ffcf0880544a7292b14c1e"
  },
  {
    "url": "page-data/filmography/trapped/page-data.json",
    "revision": "a7f0058cf3699c1797e4b97cd68b2dc3"
  },
  {
    "url": "page-data/filmography/under-the-supervision/page-data.json",
    "revision": "20edba1ff441b498676faa1fb8bef3ce"
  },
  {
    "url": "page-data/filmography/without-anything/page-data.json",
    "revision": "c9caa7bbdaaad5a6005c42e3b7a3e522"
  },
  {
    "url": "page-data/filmography/women-are-incredible/page-data.json",
    "revision": "dbde01ed271e0b820812676e7b530211"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "fcbd4a079214bbbd1cf46bc5e288d40c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-4367a4a63265d9db3a4f.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
