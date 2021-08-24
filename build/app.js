;(function () {
  var $app_define_wrap$ = $app_define_wrap$ || function () {}
  var manifestJson = {
    package: 'es.espinr.quickshop',
    name: 'My Quick App Shop',
    versionName: '1.0.1',
    versionCode: 1,
    minPlatformVersion: 1070,
    icon: '/assets/images/logo.png',
    features: [
      { name: 'system.prompt' },
      { name: 'system.router' },
      { name: 'system.shortcut' },
      { name: 'system.webview' },
      { name: 'service.share' },
      { name: 'system.geolocation' },
      { name: 'system.fetch' },
    ],
    permissions: [{ origin: '*' }],
    'template/official': 'ecommerce',
    config: { logLevel: 'debug', designWidth: 800 },
    router: {
      entry: 'pages/Main',
      pages: {
        'pages/Main': { component: 'index' },
        'pages/Goods': { component: 'index' },
      },
    },
    display: {
      titleBarBackgroundColor: '#f2f2f2',
      titleBarTextColor: '#333333',
      menu: true,
      pages: {
        'pages/Main': { titleBarText: 'Home', menu: true },
        'pages/Goods': { titleBar: false },
      },
    },
  }
  var createAppHandler = function () {
    return /******/ (() => {
      // webpackBootstrap
      /******/ var __webpack_modules__ = {
        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=D:\\git\\quick-app-shop\\src!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app':
          /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=D:\git\quick-app-shop\src!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = function __scriptModule__(
              module,
              exports,
              $app_require$
            ) {
              'use strict'

              Object.defineProperty(exports, '__esModule', {
                value: true,
              })
              exports.default = void 0

              var _helper = __webpack_require__(
                /*! ./helper */ './src/helper/index.js'
              )

              const hook2global =
                __webpack_require__.g.__proto__ || __webpack_require__.g
              hook2global.$apis = _helper.$apis
              var _default = {
                $apis: _helper.$apis,
                showMenu: _helper.$util.showMenu,
                createShortcut: _helper.$util.createShortcut,
                orders: [],

                onCreate() {
                  this.dataCache = {}
                },

                getAppData(key) {
                  return this.dataCache[key]
                },

                setAppData(key, val) {
                  this.dataCache[key] = val
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './src/manifest.json':
          /*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
          /***/ (module) => {
            'use strict'
            module.exports = JSON.parse(
              '{"package":"es.espinr.quickshop","name":"My Quick App Shop","versionName":"1.0.1","versionCode":1,"minPlatformVersion":1070,"icon":"/assets/images/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.webview"},{"name":"service.share"},{"name":"system.geolocation"},{"name":"system.fetch"}],"permissions":[{"origin":"*"}],"template/official":"ecommerce","config":{"logLevel":"debug","designWidth":800},"router":{"entry":"pages/Main","pages":{"pages/Main":{"component":"index"},"pages/Goods":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#333333","menu":true,"pages":{"pages/Main":{"titleBarText":"Home","menu":true},"pages/Goods":{"titleBar":false}}}}'
            )

            /***/
          },

        /***/ './src/helper/ajax.js':
          /*!****************************!*\
  !*** ./src/helper/ajax.js ***!
  \****************************/
          /***/ (__unused_webpack_module, exports, __webpack_require__) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.default = void 0

            var _system = _interopRequireDefault(
              $app_require$('@app-module/system.fetch')
            )

            var _util = _interopRequireDefault(
              __webpack_require__(/*! ./util */ './src/helper/util.js')
            )

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj }
            }

            function requestHandle(params) {
              console.log(
                `🤖 The URL that is currently initiating the request is: ${params.url}`
              )
              return new Promise((resolve, reject) => {
                _system.default.fetch({
                  url: params.url,
                  method: params.method,
                  data: params.data,
                  success: (data) => {
                    const serverResponse = JSON.parse(data.data)

                    if (serverResponse.success || serverResponse.status === 0) {
                      resolve(serverResponse.result || serverResponse.value)
                    } else {
                      reject(serverResponse.message)
                    }
                  },
                  fail: (data, code) => {
                    console.log(`🐛 request fail, code = ${code} `, data)
                    reject(data)
                  },
                  complete: (data) => {
                    reject(data)
                  },
                })
              })
            }

            var _default = {
              post: function (url, params, op) {
                return requestHandle({
                  method: 'post',
                  url: url,
                  data: params,
                })
              },
              get: function (url, params, op) {
                return requestHandle({
                  method: 'get',
                  url: _util.default.queryString(url, params),
                })
              },
            }
            exports.default = _default

            /***/
          },

        /***/ './src/helper/apis/common.js':
          /*!***********************************!*\
  !*** ./src/helper/apis/common.js ***!
  \***********************************/
          /***/ (__unused_webpack_module, exports, __webpack_require__) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.default = void 0

            var _ajax = _interopRequireDefault(
              __webpack_require__(/*! ../ajax */ './src/helper/ajax.js')
            )

            var _util = _interopRequireDefault(
              __webpack_require__(/*! ../util */ './src/helper/util.js')
            )

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj }
            }

            var _default = {
              getPositionByLocation(data) {
                return _ajax.default.get(
                  'https://apis.map.qq.com/ws/geocoder/v1/',
                  data
                )
              },
            }
            exports.default = _default

            /***/
          },

        /***/ './src/helper/apis/index.js':
          /*!**********************************!*\
  !*** ./src/helper/apis/index.js ***!
  \**********************************/
          /***/ (__unused_webpack_module, exports, __webpack_require__) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.default = void 0

            const files = __webpack_require__(
              './src/helper/apis sync recursive \\.js'
            )

            const modules = {}
            files.keys().forEach((key) => {
              if (key === './index.js') {
                return
              }

              modules[key.replace(/(^\.\/|\.js$)/g, '')] = files(key).default
            })
            var _default = modules
            exports.default = _default

            /***/
          },

        /***/ './src/helper/index.js':
          /*!*****************************!*\
  !*** ./src/helper/index.js ***!
  \*****************************/
          /***/ (__unused_webpack_module, exports, __webpack_require__) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.$apis = exports.$ajax = exports.$util = void 0

            const $util = __webpack_require__(
              /*! ./util */ './src/helper/util.js'
            ).default

            exports.$util = $util

            const $ajax = __webpack_require__(
              /*! ./ajax */ './src/helper/ajax.js'
            ).default

            exports.$ajax = $ajax

            const $apis = __webpack_require__(
              /*! ./apis */ './src/helper/apis/index.js'
            ).default

            exports.$apis = $apis

            /***/
          },

        /***/ './src/helper/util.js':
          /*!****************************!*\
  !*** ./src/helper/util.js ***!
  \****************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.default = void 0

            /**
             * @desc Shows the menu.
             */
            function showMenu() {
              const prompt = $app_require$('@app-module/system.prompt')

              const itemFuncMapping = [
                createShortcut,
                call3thPartyShare,
                jump2AboutPage,
                null,
              ]
              prompt.showContextMenu({
                itemList: ['Save Homescreen', 'Share', 'About', 'Cancel'],
                success: function (ret) {
                  if (itemFuncMapping[ret.index]) {
                    itemFuncMapping[ret.index]()
                  } else {
                    prompt.showToast({
                      message: 'error',
                    })
                  }
                },
              })
            }
            /**
             * @desc Display About page.
             */

            function jump2AboutPage() {
              const router = $app_require$('@app-module/system.router')

              const appInfo = $app_require$('@app-module/system.app').getInfo()

              router.push({
                uri: '/pages/About',
                params: {
                  name: appInfo.name,
                  icon: appInfo.icon,
                },
              })
            }
            /**
             * @desc Invoke third-party sharing.
             */

            function call3thPartyShare() {
              const share = $app_require$('@app-module/service.share')

              share.share({
                shareType: 0,
                title: 'Quick App',
                Summary:
                  'Quick App is a new concept of light apps running on the device hardware',
                imagePath: '/assets/images/logo.png',
                targetUrl: 'https://quick-app-initiative.ow2.io/',
                platforms: ['WEIBO', 'WEIXIN', 'WEIXIN_CIRCLE'],
                success: function (data) {
                  console.log(`handling success ${data}`)
                },
                fail: function (data, code) {
                  console.log(`handling fail, code = ${code}`)
                  console.log(data)
                },
              })
            }
            /**
             * @desc Create a homescreen icon.
             * Note: When using the Loader to test the function of creating a homescreen shortcut, enable the Desktop Shortcut permission of the Application Loader in System Settings.
             */

            function createShortcut() {
              const prompt = $app_require$('@app-module/system.prompt')

              const shortcut = $app_require$('@app-module/system.shortcut')

              shortcut.hasInstalled({
                success: function (ret) {
                  if (ret) {
                    prompt.showToast({
                      message: 'Homescreen icon created',
                    })
                  } else {
                    shortcut.install({
                      success: function () {
                        prompt.showToast({
                          message: 'Homescreen icon was successfully created.',
                        })
                      },
                      fail: function (errmsg, errcode) {
                        prompt.showToast({
                          message: `${errcode}: ${errmsg}`,
                        })
                      },
                    })
                  }
                },
              })
            }

            function queryString(url, query) {
              let str = []

              for (let key in query) {
                str.push(key + '=' + query[key])
              }

              let paramStr = str.join('&')
              return paramStr ? `${url}?${paramStr}` : url
            }

            var _default = {
              showMenu,
              createShortcut,
              queryString,
            }
            exports.default = _default

            /***/
          },

        /***/ './src/helper/apis sync recursive \\.js':
          /*!************************************!*\
  !*** ./src/helper/apis/ sync \.js ***!
  \************************************/
          /***/ (module, __unused_webpack_exports, __webpack_require__) => {
            var map = {
              './common.js': './src/helper/apis/common.js',
              './index.js': './src/helper/apis/index.js',
            }

            function webpackContext(req) {
              var id = webpackContextResolve(req)
              return __webpack_require__(id)
            }
            function webpackContextResolve(req) {
              if (!__webpack_require__.o(map, req)) {
                var e = new Error("Cannot find module '" + req + "'")
                e.code = 'MODULE_NOT_FOUND'
                throw e
              }
              return map[req]
            }
            webpackContext.keys = function webpackContextKeys() {
              return Object.keys(map)
            }
            webpackContext.resolve = webpackContextResolve
            module.exports = webpackContext
            webpackContext.id = './src/helper/apis sync recursive \\.js'

            /***/
          },

        /******/
      }
      /************************************************************************/
      /******/ // The module cache
      /******/ var __webpack_module_cache__ = {}
      /******/
      /******/ // The require function
      /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (__webpack_module_cache__[moduleId]) {
          /******/ return __webpack_module_cache__[moduleId].exports
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/ exports: {},
          /******/
        })
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](
          module,
          module.exports,
          __webpack_require__
        )
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports
        /******/
      }
      /******/
      /************************************************************************/
      /******/ /* webpack/runtime/global */
      /******/ ;(() => {
        /******/ __webpack_require__.g = (function () {
          /******/ if (typeof globalThis === 'object') return globalThis
          /******/ try {
            /******/ return this || new Function('return this')()
            /******/
          } catch (e) {
            /******/ if (typeof window === 'object') return window
            /******/
          }
          /******/
        })()
        /******/
      })()
      /******/
      /******/ /* webpack/runtime/hasOwnProperty shorthand */
      /******/ ;(() => {
        /******/ __webpack_require__.o = (obj, prop) =>
          Object.prototype.hasOwnProperty.call(obj, prop)
        /******/
      })()
      /******/
      /************************************************************************/
      var __webpack_exports__ = {}
      // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
      ;(() => {
        /*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/

        var $app_style$ = {}
        var $app_script$ = __webpack_require__(
          /*! !../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=D:\git\quick-app-shop\src!../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/manifest-loader.js?path=D:\\git\\quick-app-shop\\src!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app'
        )

        $app_define$(
          '@app-application/app',
          [],
          function ($app_require$, $app_exports$, $app_module$) {
            $app_script$($app_module$, $app_exports$, $app_require$)
            if ($app_exports$.__esModule && $app_exports$.default) {
              $app_module$.exports = $app_exports$.default
            }
            $app_module$.exports.manifest = __webpack_require__(
              /*! ./manifest.json */ './src/manifest.json'
            )
            $app_module$.exports.style = { list: [$app_style$] }
          }
        )
        $app_bootstrap$('@app-application/app', { packagerVersion: '1.9.5' })
      })()

      /******/
    })()
  }
  if (typeof window === 'undefined') {
    return createAppHandler()
  } else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = manifestJson
  }
})()
