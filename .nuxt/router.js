import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0c6a0838 = () => interopDefault(import('..\\pages\\10\\index.vue' /* webpackChunkName: "pages/10/index" */))
const _e8ded98c = () => interopDefault(import('..\\pages\\106\\index.vue' /* webpackChunkName: "pages/106/index" */))
const _092e46a2 = () => interopDefault(import('..\\pages\\12\\index.vue' /* webpackChunkName: "pages/12/index" */))
const _09a0d600 = () => interopDefault(import('..\\pages\\47\\index.vue' /* webpackChunkName: "pages/47/index" */))
const _02e13a5f = () => interopDefault(import('..\\pages\\48\\index.vue' /* webpackChunkName: "pages/48/index" */))
const _9588a1f8 = () => interopDefault(import('..\\pages\\87\\index.vue' /* webpackChunkName: "pages/87/index" */))
const _d7492a72 = () => interopDefault(import('..\\pages\\95\\index.vue' /* webpackChunkName: "pages/95/index" */))
const _7d6c093a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/10",
    component: _0c6a0838,
    name: "10"
  }, {
    path: "/106",
    component: _e8ded98c,
    name: "106"
  }, {
    path: "/12",
    component: _092e46a2,
    name: "12"
  }, {
    path: "/47",
    component: _09a0d600,
    name: "47"
  }, {
    path: "/48",
    component: _02e13a5f,
    name: "48"
  }, {
    path: "/87",
    component: _9588a1f8,
    name: "87"
  }, {
    path: "/95",
    component: _d7492a72,
    name: "95"
  }, {
    path: "/",
    component: _7d6c093a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
