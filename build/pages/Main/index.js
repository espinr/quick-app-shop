;(function () {
  var createPageHandler = function () {
    return /******/ (() => {
      // webpackBootstrap
      /******/ var __webpack_modules__ = {
        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/index.ux?uxType=page':
          /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
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
              var _default = {
                private: {
                  tabList: [
                    {
                      title: 'Home',
                      icon: '\uf015',
                    },
                    {
                      title: 'Categories',
                      icon: '\uf0ca',
                    },
                    {
                      title: 'Cart',
                      icon: '\uf07a',
                    },
                    {
                      title: 'Personal',
                      icon: '\uf007',
                    },
                  ],
                  selectedTab: 'Home',
                  deactivedColor: '#707780',
                  activedColor: ' #20a0ff',
                  activeTab: 0,
                  isFull: false,
                },

                onInit() {},

                changeTab(e) {
                  this.activeTab = e.index
                  let index = e.index || 0
                  this.selectedTab = this.tabList[index].title
                  this.$page.setTitleBar({
                    text: this.selectedTab,
                    menu: false,
                  })
                },

                onShow() {
                  const data = this.$app.getAppData('activeTab')
                  this.isFull = !!data

                  if (data) {
                    this.activeTab = data
                    this.$app.setAppData('activeTab', null)
                  }
                },
              }
              exports.default = _default
              const moduleOwn = exports.default || module.exports
              const accessors = ['public', 'protected', 'private']

              if (
                moduleOwn.data &&
                accessors.some(function (acc) {
                  return moduleOwn[acc]
                })
              ) {
                throw new Error(
                  '页面VM对象中的属性data不可与"' +
                    accessors.join(',') +
                    '"同时存在，请使用private替换data名称'
                )
              } else if (!moduleOwn.data) {
                moduleOwn.data = {}
                moduleOwn._descriptor = {}
                accessors.forEach(function (acc) {
                  const accType = typeof moduleOwn[acc]

                  if (accType === 'object') {
                    moduleOwn.data = Object.assign(
                      moduleOwn.data,
                      moduleOwn[acc]
                    )

                    for (const name in moduleOwn[acc]) {
                      moduleOwn._descriptor[name] = {
                        access: acc,
                      }
                    }
                  } else if (accType === 'function') {
                    console.warn(
                      '页面VM对象中的属性' + acc + '的值不能是函数，请使用对象'
                    )
                  }
                })
              }
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp':
          /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

              var _util = __webpack_require__(
                /*! ../common/scripts/util */ './node_modules/apex-ui/components/common/scripts/util.js'
              )

              var _default = {
                props: {
                  value: {
                    default: 1,
                  },
                  min: {
                    default: -Infinity,
                  },
                  max: {
                    default: Infinity,
                  },
                  step: {
                    default: 1,
                  },
                  positive: {
                    default: false,
                  },
                },

                data() {
                  return {
                    my_value: this.value,
                    my_step: this.step,
                    my_min: this.min,
                    my_max: this.max,
                  }
                },

                handleChangeStep(type) {
                  let disabled = false

                  if (this.my_value <= this.my_min && type === 'minus') {
                    disabled = true
                  } else if (this.my_value >= this.my_max && type === 'plus') {
                    disabled = true
                  }

                  if (disabled) return

                  if (type === 'minus') {
                    this.my_value = (0, _util.addNum)(
                      this.my_value,
                      -this.my_step
                    )
                  } else if (type === 'plus') {
                    this.my_value = (0, _util.addNum)(
                      this.my_value,
                      this.my_step
                    )
                  }

                  if (this.my_value > this.my_max) {
                    this.my_value = this.my_max
                  } else if (this.my_value < this.my_min) {
                    this.my_value = this.my_min
                  }

                  this.handleEmit(this.my_value, type)
                },

                handleMinus(e) {
                  this.handleChangeStep('minus')
                },

                handlePlus(e) {
                  this.handleChangeStep('plus')
                },

                handleChange(e) {
                  let value = e.value
                  const { my_min, my_max } = this

                  if (value > my_max) {
                    value = my_max
                  } else if (value < my_min) {
                    value = my_min
                  }

                  this.my_value = value
                  this.handleEmit(value)
                },

                handleEmit(value, type) {
                  const data = {
                    value: value,
                  }
                  if (type) data.type = type
                  this.$emit('change', data)
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/cartEmpty.ux?uxType=comp':
          /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/cartEmpty.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
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

              var _system = _interopRequireDefault(
                $app_require$('@app-module/system.router')
              )

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj }
              }

              var _default = {
                data: {
                  cartIcon: '\uF07A',
                },
                props: {
                  datas: {
                    default: [],
                  },
                },

                onItemClick(item) {
                  _system.default.push({
                    uri: 'pages/Goods',
                  })
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/cartFull.ux?uxType=comp':
          /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/cartFull.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
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
              var _default = {
                data: {
                  saveText: 'You are in a secure shopping environment',
                  title: 'Current items in your cart',
                  totalAmount: '318',
                  promotion:
                    'Self-operated products have enjoyed free shipping for new members.',
                  secureIcon: '\uf14a',
                },
                props: {
                  datas: {
                    defaut: [],
                  },
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/classify.ux?uxType=comp':
          /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/classify.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

              var _classifyData = __webpack_require__(
                /*! ../../assets/js/classifyData */ './src/assets/js/classifyData.js'
              )

              var _classifyItemData = __webpack_require__(
                /*! ../../assets/js/classifyItemData */ './src/assets/js/classifyItemData.js'
              )

              function callFetch(callback) {
                setTimeout(function () {
                  callback(_classifyItemData.classifyDatas)
                }, 500)
              }

              var _default = {
                data: {
                  labels: _classifyData.classifyLabels,
                  datas: _classifyItemData.classifyDatas,
                },

                onInit() {},

                onTabClick(para) {
                  const selectedPosition = para.detail.position
                  console.log(`selectedPosition = ${selectedPosition}`)
                  callFetch(
                    function (resList) {
                      if (!resList) {
                        console.error(`Data request error`)
                      } else {
                        this.datas = resList
                      }
                    }.bind(this)
                  )
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/classifyItem.ux?uxType=comp':
          /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/classifyItem.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
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

              var _system = _interopRequireDefault(
                $app_require$('@app-module/system.router')
              )

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj }
              }

              var _default = {
                props: {
                  datas: {
                    default: [],
                  },
                },

                onItemClick() {
                  _system.default.push({
                    uri: 'pages/Goods',
                  })
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/classifyTab.ux?uxType=comp':
          /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/classifyTab.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
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
              var _default = {
                props: {
                  labels: {
                    default: [],
                  },
                },

                onTabClick(index) {
                  this.labels.forEach((item, idx) => {
                    item.isFocus = index === idx
                  })
                  this.$emit('tabClick', {
                    position: index,
                  })
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/home.ux?uxType=comp':
          /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/home.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

              var _homeData = __webpack_require__(
                /*! ../../assets/js/homeData */ './src/assets/js/homeData.js'
              )

              var _system = _interopRequireDefault(
                $app_require$('@app-module/system.router')
              )

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj }
              }

              function callFetch(callback) {
                setTimeout(function () {
                  callback(_homeData.homeDatas)
                }, 500)
              }

              let memList = []
              var _default = {
                data: {
                  products: [],
                  hasMoreData: true,
                  size: 10,
                  isLoadingData: false,
                },

                onInit() {
                  this.products = []
                  this.loadAndRender()
                },

                loadAndRender(doRender = true) {
                  this.isLoadingData = true
                  callFetch(
                    function (resList) {
                      this.isLoadingData = false

                      if (!resList) {
                        console.error(`Data request error`)
                      } else if (!resList.length) {
                        this.hasMoreData = false
                      } else {
                        memList = memList.concat(resList)

                        if (doRender) {
                          this._renderList()
                        }
                      }
                    }.bind(this)
                  )
                },

                _renderList() {
                  if (memList.length > 0) {
                    const list = memList.splice(0, this.size)
                    this.products = this.products.concat(list)
                  }

                  if (memList.length <= this.size) {
                    this.loadAndRender(false)
                  }
                },

                renderMoreListItem() {
                  if (!this.isLoadingData) {
                    this._renderList()
                  }
                },

                onItemClick(index) {
                  _system.default.push({
                    uri: 'pages/Goods',
                  })
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/personalCenter.ux?uxType=comp':
          /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/personalCenter.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

              var _memberData = __webpack_require__(
                /*! ../../assets/js/memberData.js */ './src/assets/js/memberData.js'
              )

              var _default = {
                private: {
                  datas: {},
                },

                onInit() {
                  this.datas = _memberData.memberDatas
                },

                onRegiste() {},

                onSign() {},
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/shoppingCart.ux?uxType=comp':
          /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/shoppingCart.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

              var _favoriteData = __webpack_require__(
                /*! ../../assets/js/favoriteData */ './src/assets/js/favoriteData.js'
              )

              var _cartData = __webpack_require__(
                /*! ../../assets/js/cartData */ './src/assets/js/cartData.js'
              )

              var _default = {
                data: {
                  favoriteDatas: {},
                  cartDatas: {},
                },
                props: {
                  isFull: {
                    default: false,
                  },
                },

                onInit() {
                  this.favoriteDatas = _favoriteData.favoriteDatas
                  this.cartDatas = _cartData.cartDatas
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp':
          /*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              '.hide': {
                display: 'none',
              },
              '.show': {
                display: 'flex',
              },
              '.opacity-hide-to-show': {
                animationName: 'opacityHideToShow',
              },
              '.opacity-show-to-hide': {
                animationName: 'opacityShowToHide',
              },
              '.translate-left-to-center': {
                animationName: 'translateLeftToCenter',
              },
              '.translate-center-to-left': {
                animationName: 'translateCenterToLeft',
              },
              '.translate-right-to-center': {
                animationName: 'translateRightToCenter',
              },
              '.translate-center-to-right': {
                animationName: 'translateCenterToRight',
              },
              '.translate-top-to-center': {
                animationName: 'translateTopToCenter',
              },
              '.translate-center-to-top': {
                animationName: 'translateCenterToTop',
              },
              '.translate-bottom-to-center': {
                animationName: 'translateBottomToCenter',
              },
              '.translate-center-to-bottom': {
                animationName: 'translateCenterToBottom',
              },
              '@KEYFRAMES': {
                opacityHideToShow: [
                  {
                    opacity: 0,
                    time: 0,
                  },
                  {
                    opacity: 1,
                    time: 100,
                  },
                ],
                opacityShowToHide: [
                  {
                    opacity: 1,
                    time: 0,
                  },
                  {
                    opacity: 0,
                    time: 100,
                  },
                ],
                translateLeftToCenter: [
                  {
                    transform: '{"translateX":"-100%"}',
                    time: 0,
                  },
                  {
                    transform: '{"translateX":"0px"}',
                    time: 100,
                  },
                ],
                translateCenterToLeft: [
                  {
                    transform: '{"translateX":"0px"}',
                    time: 0,
                  },
                  {
                    transform: '{"translateX":"-100%"}',
                    time: 100,
                  },
                ],
                translateRightToCenter: [
                  {
                    transform: '{"translateX":"100%"}',
                    time: 0,
                  },
                  {
                    transform: '{"translateX":"0px"}',
                    time: 100,
                  },
                ],
                translateCenterToRight: [
                  {
                    transform: '{"translateX":"0px"}',
                    time: 0,
                  },
                  {
                    transform: '{"translateX":"100%"}',
                    time: 100,
                  },
                ],
                translateTopToCenter: [
                  {
                    transform: '{"translateY":"-100%"}',
                    time: 0,
                  },
                  {
                    transform: '{"translateY":"0%"}',
                    time: 100,
                  },
                ],
                translateCenterToTop: [
                  {
                    transform: '{"translateY":"0px"}',
                    time: 0,
                  },
                  {
                    transform: '{"translateY":"-100%"}',
                    time: 100,
                  },
                ],
                translateBottomToCenter: [
                  {
                    transform: '{"translateY":"100%"}',
                    time: 0,
                  },
                  {
                    transform: '{"translateY":"0%"}',
                    time: 100,
                  },
                ],
                translateCenterToBottom: [
                  {
                    transform: '{"translateY":"0px"}',
                    time: 0,
                  },
                  {
                    transform: '{"translateY":"100%"}',
                    time: 100,
                  },
                ],
              },
              '.apex-input-number': {
                color: '#495060',
                flexDirection: 'row',
                alignSelf: 'baseline',
              },
              '.apex-input-number text': {
                height: '60px',
                width: '60px',
                textAlign: 'center',
                fontSize: '24px',
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderLeftWidth: '1px',
                borderStyle: 'solid',
                borderTopColor: '#dddee1',
                borderRightColor: '#dddee1',
                borderBottomColor: '#dddee1',
                borderLeftColor: '#dddee1',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'apex-input-number',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 't',
                      n: 'text',
                    },
                  ],
                },
              },
              '.apex-input-number-minus': {
                borderRadius: '2px',
              },
              '.apex-input-number-plus': {
                borderRadius: '2px',
              },
              '.apex-input-number-text': {
                borderTopWidth: '1px',
                borderBottomWidth: '1px',
                borderStyle: 'solid',
                borderTopColor: '#dddee1',
                borderBottomColor: '#dddee1',
                textAlign: 'center',
                height: '60px',
                lineHeight: '60px',
                width: '60px',
                fontSize: '24px',
              },
              '.apex-input-number-disabled': {
                borderTopColor: '#dddee1',
                borderRightColor: '#dddee1',
                borderBottomColor: '#dddee1',
                borderLeftColor: '#dddee1',
                color: '#bbbec4',
                backgroundColor: '#f7f7f7',
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/cartEmpty.ux?uxType=comp':
          /*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/cartEmpty.ux?uxType=comp ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              '@FONT-FACE': {
                iconfont: {
                  fontFamily: 'iconfont',
                  src: ['/assets/iconfont/icons.ttf'],
                  fontName: 'iconfont',
                  fontSrc: ['/assets/iconfont/icons.ttf'],
                },
              },
              '.page-container': {
                flexDirection: 'column',
                width: '100%',
                height: '100%',
              },
              '.page-container .list-container': {
                backgroundColor: '#f5f5f5',
                flexDirection: 'column',
                width: '100%',
                flex: 1,
                columns: 2,
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-head': {
                backgroundColor: '#ffffff',
                flexDirection: 'column',
                columnSpan: 2,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '40px',
                paddingBottom: '40px',
                width: '100%',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-head',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-head .head-image': {
                width: '400px',
                height: '400px',
                color: '#a9a9a9',
                fontFamily: 'iconfont',
                fontSize: '400px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-head',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'head-image',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-head .head-text': {
                marginTop: '60px',
                fontSize: '40px',
                color: '#000000',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-head',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'head-text',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-title': {
                backgroundColor: '#f5f5f5',
                columnSpan: 2,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-title',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-title .title-text': {
                paddingTop: '40px',
                paddingBottom: '32px',
                fontSize: '35px',
                color: '#000000',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-title',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'title-text',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-favorite': {
                backgroundColor: '#ffffff',
                marginTop: '8px',
                marginRight: '8px',
                marginBottom: '8px',
                marginLeft: '8px',
                flexDirection: 'column',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-favorite',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-favorite .favorite-image':
                {
                  width: '384px',
                  height: '512px',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-favorite',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'favorite-image',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-favorite .favorite-price-wrap':
                {
                  paddingTop: '8px',
                  paddingRight: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '8px',
                  flexDirection: 'row',
                  width: '100%',
                  alignContent: 'center',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-favorite',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'favorite-price-wrap',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-favorite .favorite-price-wrap .favorite-text-price':
                {
                  fontSize: '35px',
                  color: '#000000',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-favorite',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'favorite-price-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'favorite-text-price',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-favorite .favorite-price-wrap .favorite-text-oldprice':
                {
                  flex: 1,
                  fontSize: '30px',
                  color: '#c7c2c2',
                  marginLeft: '16px',
                  marginRight: '16px',
                  textDecoration: 'line-through',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-favorite',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'favorite-price-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'favorite-text-oldprice',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-favorite .favorite-price-wrap .favorite-text-discount':
                {
                  alignSelf: 'flex-end',
                  borderRadius: '8px',
                  borderTopColor: '#ff0000',
                  borderRightColor: '#ff0000',
                  borderBottomColor: '#ff0000',
                  borderLeftColor: '#ff0000',
                  borderTopWidth: '1px',
                  borderRightWidth: '1px',
                  borderBottomWidth: '1px',
                  borderLeftWidth: '1px',
                  fontSize: '30px',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  color: '#ff0000',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-favorite',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'favorite-price-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'favorite-text-discount',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-favorite .favorite-text-brief':
                {
                  marginTop: '60px',
                  fontSize: '35px',
                  color: '#000000',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-favorite',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'favorite-text-brief',
                      },
                    ],
                  },
                },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/cartFull.ux?uxType=comp':
          /*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/cartFull.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              '@FONT-FACE': {
                iconfont: {
                  fontFamily: 'iconfont',
                  src: ['/assets/iconfont/icons.ttf'],
                  fontName: 'iconfont',
                  fontSrc: ['/assets/iconfont/icons.ttf'],
                },
              },
              '.page-container': {
                flexDirection: 'column',
                width: '100%',
                height: '100%',
              },
              '.page-container .list-container': {
                backgroundColor: '#f5f5f5',
                flexDirection: 'column',
                width: '100%',
                columns: 1,
                flex: 1,
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-head': {
                backgroundColor: '#d6d6d6',
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: '16px',
                paddingBottom: '16px',
                width: '100%',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-head',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-head .head-icon': {
                width: '40px',
                height: '40px',
                marginLeft: '16px',
                marginRight: '16px',
                fontFamily: 'iconfont',
                fontSize: '40px',
                color: '#008000',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-head',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'head-icon',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-head .head-text': {
                fontSize: '30px',
                color: '#242121',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-head',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'head-text',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-title': {
                backgroundColor: '#ffffff',
                width: '100%',
                paddingLeft: '32px',
                paddingRight: '32px',
                alignSelf: 'center',
                flexDirection: 'column',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-title',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-title .title-text-title': {
                paddingTop: '16px',
                paddingBottom: '16px',
                fontSize: '35px',
                color: '#a7a7a7',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-title',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'title-text-title',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-title .title-line': {
                width: '100%',
                height: '1px',
                backgroundColor: '#eeeeee',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-title',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'title-line',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-order': {
                backgroundColor: '#ffffff',
                paddingTop: '32px',
                paddingBottom: '32px',
                paddingRight: '16px',
                flexDirection: 'column',
                width: '100%',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-order',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-order .order-top-wrap': {
                width: '100%',
                flexDirection: 'row',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-order',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'order-top-wrap',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-order .order-top-wrap .order-image-wrap':
                {
                  width: '25%',
                  justifyContent: 'center',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-top-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-image-wrap',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-top-wrap .order-image-wrap image':
                {
                  width: '75%',
                  height: '100%',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-top-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-image-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 't',
                        n: 'image',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-top-wrap .order-details-wrap':
                {
                  flexDirection: 'column',
                  width: '50%',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-top-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-details-wrap',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-top-wrap .order-details-wrap .order-text-title':
                {
                  fontSize: '35px',
                  color: '#000000',
                  lines: 2,
                  textOverflow: 'ellipsis',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-top-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-details-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-text-title',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-top-wrap .order-details-wrap .order-text-brief':
                {
                  marginTop: '8px',
                  marginBottom: '8px',
                  fontSize: '25px',
                  color: '#c7c2c2',
                  lines: 1,
                  textOverflow: 'ellipsis',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-top-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-details-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-text-brief',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-top-wrap .order-details-wrap .order-text-size':
                {
                  fontSize: '25px',
                  color: '#c7c2c2',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-top-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-details-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-text-size',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-top-wrap .order-price-wrap':
                {
                  flex: 1,
                  flexDirection: 'column',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-top-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-price-wrap',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-top-wrap .order-price-wrap .order-text-price':
                {
                  alignSelf: 'flex-end',
                  fontSize: '35px',
                  color: '#000000',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-top-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-price-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-text-price',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-top-wrap .order-price-wrap .order-text-oldprice':
                {
                  alignSelf: 'flex-end',
                  fontSize: '30px',
                  color: '#c7c2c2',
                  textDecoration: 'line-through',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-top-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-price-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-text-oldprice',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-end-wrap': {
                marginTop: '16px',
                flexDirection: 'row',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-order',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'order-end-wrap',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-order .order-end-wrap .order-placeholder-1':
                {
                  width: '25%',
                  backgroundColor: 'rgba(0,0,0,0)',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-end-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-placeholder-1',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-end-wrap .order-button':
                {
                  width: '56px',
                  height: '56px',
                  fontSize: '25px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ffffff',
                  borderTopColor: '#a9a9a9',
                  borderRightColor: '#a9a9a9',
                  borderBottomColor: '#a9a9a9',
                  borderLeftColor: '#a9a9a9',
                  borderTopWidth: '1px',
                  borderRightWidth: '1px',
                  borderBottomWidth: '1px',
                  borderLeftWidth: '1px',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-end-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-button',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-end-wrap .order-placeholder-2':
                {
                  flex: 1,
                  backgroundColor: 'rgba(0,0,0,0)',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-end-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-placeholder-2',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-order .order-end-wrap .order-image-delete':
                {
                  alignSelf: 'center',
                  width: '32px',
                  height: '32px',
                  backgroundColor: 'rgba(0,0,0,0)',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-order',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-end-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'order-image-delete',
                      },
                    ],
                  },
                },
              '.page-container .list-container .item-end': {
                backgroundColor: '#ffffff',
                width: '100%',
                paddingLeft: '32px',
                paddingRight: '32px',
                flexDirection: 'column',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-end',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-end .end-line': {
                width: '100%',
                height: '1px',
                backgroundColor: '#eeeeee',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-end',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'end-line',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-end .end-text-amount': {
                paddingTop: '32px',
                paddingBottom: '32px',
                alignSelf: 'flex-end',
                fontSize: '30px',
                color: '#a7a7a7',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-end',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'end-text-amount',
                    },
                  ],
                },
              },
              '.page-container .list-container .item-end .end-text-promotion': {
                paddingTop: '16px',
                paddingBottom: '16px',
                fontSize: '25px',
                color: '#a7a7a7',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-end',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'end-text-promotion',
                    },
                  ],
                },
              },
              '.page-container .bottom-container': {
                flexDirection: 'column',
                width: '100%',
                paddingTop: '32px',
                paddingRight: '32px',
                paddingBottom: '32px',
                paddingLeft: '32px',
                alignItems: 'center',
                justifyContent: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'bottom-container',
                    },
                  ],
                },
              },
              '.page-container .bottom-container .bottom-text .bottom-span-describe':
                {
                  color: '#a9a9a9',
                  fontSize: '40px',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-text',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-span-describe',
                      },
                    ],
                  },
                },
              '.page-container .bottom-container .bottom-text .bottom-span-amount':
                {
                  color: '#d4237a',
                  fontSize: '40px',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-text',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-span-amount',
                      },
                    ],
                  },
                },
              '.page-container .bottom-container .bottom-button': {
                width: '100%',
                paddingTop: '20px',
                paddingRight: '20px',
                paddingBottom: '20px',
                paddingLeft: '20px',
                marginTop: '32px',
                backgroundColor: '#d4237a',
                color: '#ffffff',
                fontSize: '40px',
                borderRadius: '4px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'bottom-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'bottom-button',
                    },
                  ],
                },
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/classify.ux?uxType=comp':
          /*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/classify.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              '.page-container': {
                flexDirection: 'row',
                width: '100%',
                height: '100%',
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/classifyItem.ux?uxType=comp':
          /*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/classifyItem.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              '.list-container': {
                flexDirection: 'column',
                width: '75%',
                height: '100%',
              },
              '.list-container .item-recommend': {
                flexDirection: 'column',
                width: '100%',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-recommend',
                    },
                  ],
                },
              },
              '.list-container .item-recommend .recommend-text-title': {
                color: '#000000',
                marginTop: '20px',
                marginRight: '20px',
                marginBottom: '20px',
                marginLeft: '20px',
                fontSize: '30px',
                fontWeight: 'bold',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-recommend',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'recommend-text-title',
                    },
                  ],
                },
              },
              '.list-container .item-recommend .recommend-list-container': {
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-recommend',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'recommend-list-container',
                    },
                  ],
                },
              },
              '.list-container .item-recommend .recommend-list-container .recommend-list-wrap':
                {
                  alignItems: 'center',
                  width: '33%',
                  flexDirection: 'column',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-recommend',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'recommend-list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'recommend-list-wrap',
                      },
                    ],
                  },
                },
              '.list-container .item-recommend .recommend-list-container .recommend-list-wrap .recommend-list-image':
                {
                  width: '80%',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-recommend',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'recommend-list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'recommend-list-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'recommend-list-image',
                      },
                    ],
                  },
                },
              '.list-container .item-recommend .recommend-list-container .recommend-list-wrap .recommend-list-text-name':
                {
                  lines: 1,
                  textOverflow: 'ellipsis',
                  paddingTop: '20px',
                  paddingRight: '20px',
                  paddingBottom: '20px',
                  paddingLeft: '20px',
                  color: '#000000',
                  textAlign: 'center',
                  fontSize: '20px',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-recommend',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'recommend-list-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'recommend-list-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'recommend-list-text-name',
                      },
                    ],
                  },
                },
              '.list-container .item-recommend .recommend-line-bottom': {
                marginTop: '20px',
                marginBottom: '20px',
                backgroundColor: '#808080',
                width: '90%',
                height: '1px',
                alignSelf: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-recommend',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'recommend-line-bottom',
                    },
                  ],
                },
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/classifyTab.ux?uxType=comp':
          /*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/classifyTab.ux?uxType=comp ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              '.list-container': {
                width: '25%',
                height: '100%',
                backgroundColor: '#f5f5f5',
                flexDirection: 'column',
              },
              '.list-container .item-tab': {
                width: '100%',
                height: '100px',
                backgroundColor: '#7fffd4',
                flexDirection: 'column',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-tab',
                    },
                  ],
                },
              },
              '.list-container .item-tab .tab-wrap': {
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-tab',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-wrap',
                    },
                  ],
                },
              },
              '.list-container .item-tab .tab-wrap .tab-column-view': {
                width: '12px',
                height: '100%',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-tab',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-wrap',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-column-view',
                    },
                  ],
                },
              },
              '.list-container .item-tab .tab-wrap .tab-text-title': {
                width: '100%',
                marginLeft: '8px',
                marginRight: '8px',
                fontSize: '25px',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '22px',
                paddingBottom: '22px',
                textAlign: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-tab',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-wrap',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-text-title',
                    },
                  ],
                },
              },
              '.list-container .item-tab .tab-line-bottom': {
                backgroundColor: '#808080',
                width: '60%',
                height: '1px',
                alignSelf: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'list-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-tab',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-line-bottom',
                    },
                  ],
                },
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/home.ux?uxType=comp':
          /*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/home.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              '.page-wrapper': {
                fontSize: '40px',
              },
              '.wrapper-padding': {
                paddingTop: '0px',
                paddingRight: '40px',
                paddingBottom: '0px',
                paddingLeft: '40px',
              },
              '.title': {
                color: '#212121',
                fontSize: '48px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '40px',
              },
              '.desc': {
                color: '#454545',
                marginTop: '32px',
                fontSize: '36px',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
              },
              '.button': {
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderLeftWidth: '1px',
                borderStyle: 'solid',
                borderTopColor: '#20a0ff',
                borderRightColor: '#20a0ff',
                borderBottomColor: '#20a0ff',
                borderLeftColor: '#20a0ff',
                backgroundColor: '#ffffff',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                color: '#20a0ff',
                fontSize: '36px',
                borderRadius: '40px',
                marginTop: '48px',
                marginBottom: '48px',
              },
              '.page-container': {
                width: '100%',
                backgroundColor: '#f0f0eb',
                flexDirection: 'column',
              },
              '.page-container .item-product': {
                backgroundColor: '#ffffff',
                flexDirection: 'column',
                width: '100%',
                height: '480px',
                borderRadius: '16px',
                marginTop: '10px',
                marginBottom: '10px',
                marginLeft: '20px',
                marginRight: '20px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-product',
                    },
                  ],
                },
              },
              '.page-container .item-product .product-image': {
                width: '100%',
                height: '67%',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-product',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'product-image',
                    },
                  ],
                },
              },
              '.page-container .item-product .product-text-wrap': {
                width: '100%',
                height: '33%',
                justifyContent: 'center',
                paddingTop: '16px',
                paddingRight: '16px',
                paddingBottom: '16px',
                paddingLeft: '16px',
                backgroundColor: '#ffffff',
                flexDirection: 'column',
                borderBottomLeftRadius: '16px',
                borderBottomRightRadius: '16px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-product',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'product-text-wrap',
                    },
                  ],
                },
              },
              '.page-container .item-product .product-text-wrap .product-text-name':
                {
                  color: '#000000',
                  fontSize: '32px',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-product',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'product-text-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'product-text-name',
                      },
                    ],
                  },
                },
              '.page-container .item-product .product-text-wrap .product-text-price':
                {
                  marginTop: '8px',
                  color: '#ec4848',
                  fontSize: '30px',
                  _meta: {
                    ruleDef: [
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'page-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'item-product',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'product-text-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'product-text-price',
                      },
                    ],
                  },
                },
              '.page-container .load-status': {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'load-status',
                    },
                  ],
                },
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/index.ux?uxType=page':
          /*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              text: {
                fontSize: '40px',
                textAlign: 'center',
              },
              '@FONT-FACE': {
                iconfont: {
                  fontFamily: 'iconfont',
                  src: ['/assets/iconfont/icons.ttf'],
                  fontName: 'iconfont',
                  fontSrc: ['/assets/iconfont/icons.ttf'],
                },
              },
              '.iconfont': {
                fontFamily: 'iconfont',
              },
              '.page-container': {
                flexDirection: 'column',
              },
              '.page-container .tab-bar': {
                backgroundColor: '#fafafa',
                borderTopWidth: '1px',
                borderTopColor: '#f2f2f2',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-bar',
                    },
                  ],
                },
              },
              '.page-container .tab-bar .tab-item': {
                flexDirection: 'column',
                justifyContent: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-bar',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-item',
                    },
                  ],
                },
              },
              '.page-container .tab-bar .tab-item .iconfont': {
                fontSize: '50px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-bar',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-item',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'iconfont',
                    },
                  ],
                },
              },
              '.page-container .tab-bar .tab-item .tab-title': {
                fontSize: '20px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-bar',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-item',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'tab-title',
                    },
                  ],
                },
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/personalCenter.ux?uxType=comp':
          /*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/personalCenter.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              '@FONT-FACE': {
                iconfont: {
                  fontFamily: 'iconfont',
                  src: ['/assets/iconfont/icons.ttf'],
                  fontName: 'iconfont',
                  fontSrc: ['/assets/iconfont/icons.ttf'],
                },
              },
              '.page-container': {
                backgroundColor: '#f0f0eb',
                width: '100%',
                flexDirection: 'column',
              },
              '.page-container .login-wrap': {
                width: '100%',
                height: '20%',
                alignItems: 'center',
                justifyContent: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'login-wrap',
                    },
                  ],
                },
              },
              '.page-container .login-wrap .login-text': {
                marginTop: '18px',
                marginRight: '18px',
                marginBottom: '18px',
                marginLeft: '18px',
                color: '#000000',
                fontSize: '30px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'login-wrap',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'login-text',
                    },
                  ],
                },
              },
              '.page-container .item-container': {
                marginBottom: '40px',
                backgroundColor: '#ffffff',
                paddingTop: '40px',
                paddingBottom: '40px',
                width: '100%',
                justifyContent: 'space-around',
                alignContent: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-container',
                    },
                  ],
                },
              },
              '.page-container .item-container .item-wrap': {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-wrap',
                    },
                  ],
                },
              },
              '.page-container .item-container .item-wrap .item-image': {
                fontFamily: 'iconfont',
                width: '48px',
                height: '48px',
                fontSize: '48px',
                marginBottom: '10px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-wrap',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-image',
                    },
                  ],
                },
              },
              '.page-container .item-container .item-wrap .item-text-name': {
                marginTop: '18px',
                marginRight: '18px',
                marginBottom: '18px',
                marginLeft: '18px',
                color: '#000000',
                fontSize: '24px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-wrap',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'item-text-name',
                    },
                  ],
                },
              },
              '.page-container .column-wrap': {
                flexDirection: 'column',
                width: '100%',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'column-wrap',
                    },
                  ],
                },
              },
              '.page-container .column-wrap .column-text-title': {
                width: '100%',
                backgroundColor: '#ffffff',
                marginBottom: '2px',
                paddingTop: '18px',
                paddingRight: '18px',
                paddingBottom: '18px',
                paddingLeft: '18px',
                color: '#000000',
                fontSize: '30px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'page-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'column-wrap',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'column-text-title',
                    },
                  ],
                },
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/shoppingCart.ux?uxType=comp':
          /*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/shoppingCart.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              '.page-container': {
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp&':
          /*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp& ***!
  \****************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'div',
              attr: {},
              classList: ['apex-input-number'],
              children: [
                {
                  type: 'text',
                  attr: {
                    value: '- ',
                  },
                  classList: function () {
                    return [
                      'apex-input-number-minus',
                      this.my_value <= this.my_min
                        ? 'apex-input-number-disabled'
                        : '',
                    ]
                  },
                  events: {
                    click: 'handleMinus',
                  },
                  shown: function () {
                    return !this.positive || this.my_value > 0
                  },
                },
                {
                  type: 'input',
                  attr: {
                    type: 'number',
                    value: function () {
                      return this.my_value
                    },
                    disabled: function () {
                      return this.my_min >= this.my_max
                    },
                  },
                  classList: function () {
                    return [
                      'apex-input-number-text',
                      this.my_min >= this.my_max
                        ? 'apex-input-number-disabled'
                        : '',
                    ]
                  },
                  events: {
                    change: 'handleChange',
                  },
                  shown: function () {
                    return !this.positive || this.my_value > 0
                  },
                },
                {
                  type: 'text',
                  attr: {
                    value: '+ ',
                  },
                  classList: function () {
                    return [
                      'apex-input-number-plus',
                      this.my_value >= this.my_max
                        ? 'apex-input-number-disabled'
                        : '',
                    ]
                  },
                  events: {
                    click: 'handlePlus',
                  },
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/cartEmpty.ux?uxType=comp&':
          /*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/cartEmpty.ux?uxType=comp& ***!
  \**************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'div',
              attr: {},
              classList: ['page-container'],
              children: [
                {
                  type: 'list',
                  attr: {},
                  classList: ['list-container'],
                  children: [
                    {
                      type: 'list-item',
                      attr: {
                        type: 'head',
                      },
                      classList: ['item-head'],
                      children: [
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.cartIcon
                            },
                          },
                          classList: ['head-image'],
                        },
                        {
                          type: 'text',
                          attr: {
                            value: 'The shopping cart is empty',
                          },
                          classList: ['head-text'],
                        },
                      ],
                    },
                    {
                      type: 'list-item',
                      attr: {
                        type: 'title',
                      },
                      classList: ['item-title'],
                      children: [
                        {
                          type: 'text',
                          attr: {
                            value: 'Guess you like...',
                          },
                          classList: ['title-text'],
                        },
                      ],
                    },
                    {
                      type: 'list-item',
                      attr: {
                        type: 'favorite',
                      },
                      classList: ['item-favorite'],
                      repeat: function () {
                        return this.datas
                      },
                      events: {
                        click: function (evt) {
                          return this.onItemClick(this.$item, evt)
                        },
                      },
                      children: [
                        {
                          type: 'image',
                          attr: {
                            src: function () {
                              return this.$item.img
                            },
                          },
                          classList: ['favorite-image'],
                        },
                        {
                          type: 'div',
                          attr: {},
                          classList: ['favorite-price-wrap'],
                          children: [
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return '' + '€' + this.$item.price
                                },
                              },
                              classList: ['favorite-text-price'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return '' + '€' + this.$item.oldPrice
                                },
                              },
                              classList: ['favorite-text-oldprice'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return '' + this.$item.discount + '% off'
                                },
                              },
                              classList: ['favorite-text-discount'],
                            },
                          ],
                        },
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.$item.brief
                            },
                          },
                          classList: ['favorite-text-brief'],
                        },
                      ],
                    },
                  ],
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/cartFull.ux?uxType=comp&importNames[]=my-input-number':
          /*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/cartFull.ux?uxType=comp&importNames[]=my-input-number ***!
  \******************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'div',
              attr: {},
              classList: ['page-container'],
              children: [
                {
                  type: 'list',
                  attr: {},
                  classList: ['list-container'],
                  children: [
                    {
                      type: 'list-item',
                      attr: {
                        type: 'head',
                      },
                      classList: ['item-head'],
                      children: [
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.secureIcon
                            },
                          },
                          classList: ['head-icon'],
                        },
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.saveText
                            },
                          },
                          classList: ['head-text'],
                        },
                      ],
                    },
                    {
                      type: 'list-item',
                      attr: {
                        type: 'title',
                      },
                      classList: ['item-title'],
                      children: [
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.title
                            },
                          },
                          classList: ['title-text-title'],
                        },
                        {
                          type: 'div',
                          attr: {},
                          classList: ['title-line'],
                        },
                      ],
                    },
                    {
                      type: 'list-item',
                      attr: {
                        type: 'order',
                      },
                      classList: ['item-order'],
                      repeat: function () {
                        return this.datas
                      },
                      children: [
                        {
                          type: 'div',
                          attr: {},
                          classList: ['order-top-wrap'],
                          children: [
                            {
                              type: 'div',
                              attr: {},
                              classList: ['order-image-wrap'],
                              children: [
                                {
                                  type: 'image',
                                  attr: {
                                    src: function () {
                                      return this.$item.img
                                    },
                                  },
                                },
                              ],
                            },
                            {
                              type: 'div',
                              attr: {},
                              classList: ['order-details-wrap'],
                              children: [
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return this.$item.title
                                    },
                                  },
                                  classList: ['order-text-title'],
                                },
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return this.$item.brief
                                    },
                                  },
                                  classList: ['order-text-brief'],
                                },
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return this.$item.size
                                    },
                                  },
                                  classList: ['order-text-size'],
                                },
                              ],
                            },
                            {
                              type: 'div',
                              attr: {},
                              classList: ['order-price-wrap'],
                              children: [
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return '' + '€' + this.$item.price
                                    },
                                  },
                                  classList: ['order-text-price'],
                                },
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return '' + '€' + this.$item.oldPrice
                                    },
                                  },
                                  classList: ['order-text-oldprice'],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'div',
                          attr: {},
                          classList: ['order-end-wrap'],
                          children: [
                            {
                              type: 'div',
                              attr: {},
                              classList: ['order-placeholder-1'],
                            },
                            {
                              type: 'my-input-number',
                              attr: {
                                min: function () {
                                  return 0
                                },
                                max: function () {
                                  return 100
                                },
                                value: function () {
                                  return 1
                                },
                              },
                              events: {
                                change: 'changeHandler',
                              },
                            },
                            {
                              type: 'div',
                              attr: {},
                              classList: ['order-placeholder-2'],
                            },
                            {
                              type: 'image',
                              attr: {
                                src: '/assets/images/delete.png',
                              },
                              classList: ['order-image-delete'],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'list-item',
                      attr: {
                        type: 'end',
                      },
                      classList: ['item-end'],
                      children: [
                        {
                          type: 'div',
                          attr: {},
                          classList: ['end-line'],
                        },
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return '' + '€' + this.totalAmount
                            },
                          },
                          classList: ['end-text-amount'],
                        },
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.promotion
                            },
                          },
                          classList: ['end-text-promotion'],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'div',
                  attr: {},
                  classList: ['bottom-container'],
                  children: [
                    {
                      type: 'text',
                      attr: {},
                      classList: ['bottom-text'],
                      children: [
                        {
                          type: 'span',
                          attr: {
                            value: 'Total',
                          },
                          classList: ['bottom-span-describe'],
                        },
                        {
                          type: 'span',
                          attr: {
                            value: function () {
                              return '' + '€' + this.totalAmount
                            },
                          },
                          classList: ['bottom-span-amount'],
                        },
                      ],
                    },
                    {
                      type: 'input',
                      attr: {
                        type: 'button',
                        value: 'Checkout',
                      },
                      classList: ['bottom-button'],
                    },
                  ],
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/classify.ux?uxType=comp&importNames[]=classify-tab,importNames[]=classify-item':
          /*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/classify.ux?uxType=comp&importNames[]=classify-tab,importNames[]=classify-item ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'div',
              attr: {},
              classList: ['page-container'],
              children: [
                {
                  type: 'classify-tab',
                  attr: {
                    labels: function () {
                      return this.labels
                    },
                  },
                  events: {
                    'tab-click': 'onTabClick',
                  },
                },
                {
                  type: 'classify-item',
                  attr: {
                    datas: function () {
                      return this.datas
                    },
                  },
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/classifyItem.ux?uxType=comp&':
          /*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/classifyItem.ux?uxType=comp& ***!
  \*****************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'list',
              attr: {},
              classList: ['list-container'],
              children: [
                {
                  type: 'list-item',
                  attr: {
                    type: 'recommend',
                  },
                  classList: ['item-recommend'],
                  repeat: function () {
                    return this.datas
                  },
                  events: {
                    click: 'onItemClick',
                  },
                  children: [
                    {
                      type: 'text',
                      attr: {
                        value: function () {
                          return this.$item.title
                        },
                      },
                      classList: ['recommend-text-title'],
                    },
                    {
                      type: 'div',
                      attr: {},
                      classList: ['recommend-list-container'],
                      children: [
                        {
                          type: 'div',
                          attr: {},
                          classList: ['recommend-list-wrap'],
                          repeat: {
                            exp: function () {
                              return this.$item.list
                            },
                            value: 'product',
                          },
                          children: [
                            {
                              type: 'image',
                              attr: {
                                src: function () {
                                  return this.product.img
                                },
                              },
                              classList: ['recommend-list-image'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.product.name
                                },
                              },
                              classList: ['recommend-list-text-name'],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'div',
                      attr: {
                        show: function () {
                          return this.$idx < this.datas.length - 1
                        },
                      },
                      classList: ['recommend-line-bottom'],
                    },
                  ],
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/classifyTab.ux?uxType=comp&':
          /*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/classifyTab.ux?uxType=comp& ***!
  \****************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'list',
              attr: {},
              classList: ['list-container'],
              children: [
                {
                  type: 'list-item',
                  attr: {
                    type: 'tab',
                  },
                  repeat: function () {
                    return this.labels
                  },
                  classList: ['item-tab'],
                  events: {
                    click: function (evt) {
                      return this.onTabClick(this.$idx, evt)
                    },
                  },
                  style: {
                    backgroundColor: function () {
                      return this.$item.isFocus ? '#ffffff' : 'transparent'
                    },
                  },
                  children: [
                    {
                      type: 'div',
                      attr: {},
                      classList: ['tab-wrap'],
                      children: [
                        {
                          type: 'div',
                          attr: {
                            id: 'pink',
                          },
                          id: 'pink',
                          classList: ['tab-column-view'],
                          style: {
                            backgroundColor: function () {
                              return this.$item.isFocus
                                ? '#dda0dd'
                                : 'transparent'
                            },
                          },
                        },
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.$item.title
                            },
                          },
                          classList: ['tab-text-title'],
                          style: {
                            color: function () {
                              return this.$item.isFocus ? '#000000' : '#808080'
                            },
                          },
                        },
                      ],
                    },
                    {
                      type: 'div',
                      attr: {
                        show: function () {
                          return !this.$item.isFocus
                        },
                      },
                      classList: ['tab-line-bottom'],
                    },
                  ],
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/home.ux?uxType=comp&':
          /*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/home.ux?uxType=comp& ***!
  \*********************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'list',
              attr: {},
              classList: ['page-container'],
              events: {
                scrollbottom: 'renderMoreListItem',
              },
              children: [
                {
                  type: 'list-item',
                  attr: {
                    type: 'product',
                  },
                  classList: ['item-product'],
                  repeat: function () {
                    return this.products
                  },
                  events: {
                    click: function (evt) {
                      return this.onItemClick(this.$idx, evt)
                    },
                  },
                  children: [
                    {
                      type: 'image',
                      attr: {
                        src: function () {
                          return this.$item.img
                        },
                      },
                      classList: ['product-image'],
                    },
                    {
                      type: 'div',
                      attr: {},
                      classList: ['product-text-wrap'],
                      children: [
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.$item.name
                            },
                          },
                          classList: ['product-text-name'],
                        },
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.$item.price
                            },
                          },
                          classList: ['product-text-price'],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'list-item',
                  attr: {
                    type: 'loadStatus',
                  },
                  classList: ['load-status'],
                  children: [
                    {
                      type: 'progress',
                      attr: {
                        type: 'circular',
                        show: function () {
                          return this.hasMoreData
                        },
                      },
                    },
                    {
                      type: 'text',
                      attr: {
                        show: function () {
                          return this.hasMoreData
                        },
                        value: 'Load More',
                      },
                    },
                    {
                      type: 'text',
                      attr: {
                        show: function () {
                          return !this.hasMoreData
                        },
                        value: 'No More Items',
                      },
                    },
                  ],
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/index.ux?uxType=page&importNames[]=personalcenter,importNames[]=home,importNames[]=classify,importNames[]=shoppingcart':
          /*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/index.ux?uxType=page&importNames[]=personalcenter,importNames[]=home,importNames[]=classify,importNames[]=shoppingcart ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'div',
              attr: {},
              classList: ['page-container'],
              children: [
                {
                  type: 'tabs',
                  attr: {
                    index: function () {
                      return this.activeTab
                    },
                  },
                  events: {
                    change: 'changeTab',
                  },
                  children: [
                    {
                      type: 'tab-content',
                      attr: {},
                      children: [
                        {
                          type: 'div',
                          attr: {},
                          classList: ['content-container'],
                          children: [
                            {
                              type: 'div',
                              attr: {},
                              shown: function () {
                                return this.selectedTab === 'Home'
                              },
                              children: [
                                {
                                  type: 'home',
                                  attr: {},
                                },
                              ],
                            },
                            {
                              type: 'div',
                              attr: {},
                              shown: function () {
                                return this.selectedTab === 'Categories'
                              },
                              children: [
                                {
                                  type: 'classify',
                                  attr: {},
                                },
                              ],
                            },
                            {
                              type: 'div',
                              attr: {},
                              shown: function () {
                                return this.selectedTab === 'Cart'
                              },
                              children: [
                                {
                                  type: 'shoppingcart',
                                  attr: {
                                    isFull: function () {
                                      return this.isFull
                                    },
                                  },
                                },
                              ],
                            },
                            {
                              type: 'div',
                              attr: {},
                              shown: function () {
                                return this.selectedTab === 'Personal'
                              },
                              children: [
                                {
                                  type: 'personalcenter',
                                  attr: {},
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'tab-bar',
                      attr: {},
                      classList: ['tab-bar'],
                      children: [
                        {
                          type: 'div',
                          attr: {},
                          classList: ['tab-item'],
                          repeat: function () {
                            return this.tabList
                          },
                          children: [
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.$item.icon
                                },
                              },
                              classList: ['iconfont'],
                              style: {
                                color: function () {
                                  return this.$item.title === this.selectedTab
                                    ? this.activedColor
                                    : this.deactivedColor
                                },
                              },
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.$item.title
                                },
                              },
                              classList: ['tab-title'],
                              style: {
                                color: function () {
                                  return this.$item.title === this.selectedTab
                                    ? this.activedColor
                                    : this.deactivedColor
                                },
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/personalCenter.ux?uxType=comp&':
          /*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/personalCenter.ux?uxType=comp& ***!
  \*******************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'div',
              attr: {},
              classList: ['page-container'],
              children: [
                {
                  type: 'div',
                  attr: {},
                  classList: ['login-wrap'],
                  children: [
                    {
                      type: 'text',
                      attr: {
                        value: 'Sign Up',
                      },
                      classList: ['login-text'],
                      events: {
                        click: 'onRegiste',
                      },
                    },
                    {
                      type: 'text',
                      attr: {
                        value: '|',
                      },
                      classList: ['login-text'],
                    },
                    {
                      type: 'text',
                      attr: {
                        value: 'Sign In',
                      },
                      classList: ['login-text'],
                      events: {
                        click: 'onSign',
                      },
                    },
                  ],
                },
                {
                  type: 'div',
                  attr: {},
                  classList: ['item-container'],
                  children: [
                    {
                      type: 'div',
                      attr: {},
                      classList: ['item-wrap'],
                      repeat: function () {
                        return this.datas.head.iconNames
                      },
                      children: [
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.$item.icon
                            },
                          },
                          classList: ['item-image'],
                        },
                        {
                          type: 'text',
                          attr: {
                            value: function () {
                              return this.$item.name
                            },
                          },
                          classList: ['item-text-name'],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'div',
                  attr: {},
                  classList: ['column-wrap'],
                  children: [
                    {
                      type: 'text',
                      attr: {
                        value: function () {
                          return this.datas.mySale.title
                        },
                      },
                      classList: ['column-text-title'],
                    },
                    {
                      type: 'div',
                      attr: {},
                      classList: ['item-container'],
                      children: [
                        {
                          type: 'div',
                          attr: {},
                          classList: ['item-wrap'],
                          repeat: function () {
                            return this.datas.mySale.iconNames
                          },
                          children: [
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.$item.icon
                                },
                              },
                              classList: ['item-image'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.$item.name
                                },
                              },
                              classList: ['item-text-name'],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'div',
                  attr: {},
                  classList: ['column-wrap'],
                  children: [
                    {
                      type: 'text',
                      attr: {
                        value: function () {
                          return this.datas.myActivities.title
                        },
                      },
                      classList: ['column-text-title'],
                    },
                    {
                      type: 'div',
                      attr: {},
                      classList: ['item-container'],
                      children: [
                        {
                          type: 'div',
                          attr: {},
                          classList: ['item-wrap'],
                          repeat: function () {
                            return this.datas.myActivities.iconNames
                          },
                          children: [
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.$item.icon
                                },
                              },
                              classList: ['item-image'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.$item.name
                                },
                              },
                              classList: ['item-text-name'],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/shoppingCart.ux?uxType=comp&importNames[]=cart-empty,importNames[]=cart-full':
          /*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/shoppingCart.ux?uxType=comp&importNames[]=cart-empty,importNames[]=cart-full ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'div',
              attr: {},
              classList: ['page-container'],
              children: [
                {
                  type: 'cart-empty',
                  attr: {
                    datas: function () {
                      return this.favoriteDatas
                    },
                  },
                  shown: function () {
                    return !this.isFull
                  },
                },
                {
                  type: 'cart-full',
                  attr: {
                    datas: function () {
                      return this.cartDatas
                    },
                  },
                  shown: function () {
                    return this.isFull
                  },
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp&name=my-input-number':
          /*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp&name=my-input-number ***!
  \***************************************************************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            var $app_style$ = __webpack_require__(
              /*! !../../../@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/my-input-number',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp&'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/cartEmpty.ux?uxType=comp&name=cart-empty':
          /*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./src/pages/Main/cartEmpty.ux?uxType=comp&name=cart-empty ***!
  \********************************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            var $app_style$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./cartEmpty.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/cartEmpty.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./cartEmpty.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/cartEmpty.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/cart-empty',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./cartEmpty.ux?uxType=comp& */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/cartEmpty.ux?uxType=comp&'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/cartFull.ux?uxType=comp&name=cart-full':
          /*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./src/pages/Main/cartFull.ux?uxType=comp&name=cart-full ***!
  \******************************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!../../../node_modules/apex-ui/components/input-number/index.ux?uxType=comp&name=my-input-number */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./node_modules/apex-ui/components/input-number/index.ux?uxType=comp&name=my-input-number'
            )

            var $app_style$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./cartFull.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/cartFull.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./cartFull.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/cartFull.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/cart-full',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./cartFull.ux?uxType=comp&importNames[]=my-input-number */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/cartFull.ux?uxType=comp&importNames[]=my-input-number'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/classify.ux?uxType=comp&name=classify':
          /*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./src/pages/Main/classify.ux?uxType=comp&name=classify ***!
  \*****************************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./classifyTab.ux?uxType=comp&name=classify-tab */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/classifyTab.ux?uxType=comp&name=classify-tab'
            )
            __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./classifyItem.ux?uxType=comp&name=classify-item */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/classifyItem.ux?uxType=comp&name=classify-item'
            )

            var $app_style$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./classify.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/classify.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./classify.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/classify.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/classify',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./classify.ux?uxType=comp&importNames[]=classify-tab,importNames[]=classify-item */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/classify.ux?uxType=comp&importNames[]=classify-tab,importNames[]=classify-item'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/classifyItem.ux?uxType=comp&name=classify-item':
          /*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./src/pages/Main/classifyItem.ux?uxType=comp&name=classify-item ***!
  \**************************************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            var $app_style$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./classifyItem.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/classifyItem.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./classifyItem.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/classifyItem.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/classify-item',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./classifyItem.ux?uxType=comp& */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/classifyItem.ux?uxType=comp&'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/classifyTab.ux?uxType=comp&name=classify-tab':
          /*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./src/pages/Main/classifyTab.ux?uxType=comp&name=classify-tab ***!
  \************************************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            var $app_style$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./classifyTab.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/classifyTab.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./classifyTab.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/classifyTab.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/classify-tab',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./classifyTab.ux?uxType=comp& */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/classifyTab.ux?uxType=comp&'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/home.ux?uxType=comp&name=home':
          /*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./src/pages/Main/home.ux?uxType=comp&name=home ***!
  \*********************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            var $app_style$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./home.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/home.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./home.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/home.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/home',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./home.ux?uxType=comp& */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/home.ux?uxType=comp&'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/personalCenter.ux?uxType=comp&name=personalcenter':
          /*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./src/pages/Main/personalCenter.ux?uxType=comp&name=personalcenter ***!
  \*****************************************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            var $app_style$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./personalCenter.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/personalCenter.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./personalCenter.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/personalCenter.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/personalcenter',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./personalCenter.ux?uxType=comp& */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/personalCenter.ux?uxType=comp&'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/shoppingCart.ux?uxType=comp&name=shoppingcart':
          /*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./src/pages/Main/shoppingCart.ux?uxType=comp&name=shoppingcart ***!
  \*************************************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./cartEmpty.ux?uxType=comp&name=cart-empty */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/cartEmpty.ux?uxType=comp&name=cart-empty'
            )
            __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./cartFull.ux?uxType=comp&name=cart-full */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/cartFull.ux?uxType=comp&name=cart-full'
            )

            var $app_style$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./shoppingCart.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/shoppingCart.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./shoppingCart.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/shoppingCart.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/shoppingcart',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./shoppingCart.ux?uxType=comp&importNames[]=cart-empty,importNames[]=cart-full */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/shoppingCart.ux?uxType=comp&importNames[]=cart-empty,importNames[]=cart-full'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './node_modules/apex-ui/components/common/scripts/util.js':
          /*!****************************************************************!*\
  !*** ./node_modules/apex-ui/components/common/scripts/util.js ***!
  \****************************************************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.addNum = addNum

            function addNum(num1, num2) {
              let sq1, sq2, m

              try {
                sq1 = num1.toString().split('.')[1].length
              } catch (e) {
                sq1 = 0
              }

              try {
                sq2 = num2.toString().split('.')[1].length
              } catch (e) {
                sq2 = 0
              }

              m = Math.pow(10, Math.max(sq1, sq2))
              return (Math.round(num1 * m) + Math.round(num2 * m)) / m
            }

            /***/
          },

        /***/ './src/assets/js/cartData.js':
          /*!***********************************!*\
  !*** ./src/assets/js/cartData.js ***!
  \***********************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.cartDatas = void 0
            const cartDatas = [
              {
                img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                Title:
                  "Men's Hooded Jacket Spring 2019 New Korean Fashion Spring Casual Hooded Workwear Coat",
                price: '249',
                oldPrice: '970',
                discount: '2.6',
                brief: 'Short sleeve T-shirt naked from $39 - WOOG Summer 2005',
                size: 'M',
              },
              {
                img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                Title:
                  '[Fashion Two-Piece Knit] Summer Dresses Stripes Dresses Women Midi Dresses Women',
                price: '69',
                oldPrice: '239',
                discount: '2.9',
                brief: 'Metesbonway unisex wear last crazy show',
                Size: '160/84A',
              },
            ]
            exports.cartDatas = cartDatas

            /***/
          },

        /***/ './src/assets/js/classifyData.js':
          /*!***************************************!*\
  !*** ./src/assets/js/classifyData.js ***!
  \***************************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.classifyLabels = void 0
            const classifyLabels = [
              {
                title: 'For You',
                isFocus: true,
              },
              {
                title: 'Swimwear',
                isFocus: false,
              },
              {
                title: 'Sneakers',
                isFocus: false,
              },
              {
                title: 'Underwear',
                isFocus: false,
              },
              {
                title: 'Shoes',
                isFocus: false,
              },
              {
                title: 'Suits',
                isFocus: false,
              },
              {
                title: 'Bags',
                isFocus: false,
              },
              {
                title: 'Watches',
                isFocus: false,
              },
              {
                title: 'Luggage',
                isFocus: false,
              },
              {
                title: 'Beauty',
                isFocus: false,
                isShow: false,
              },
              {
                title: 'Smartphones',
                isFocus: false,
              },
            ]
            exports.classifyLabels = classifyLabels

            /***/
          },

        /***/ './src/assets/js/classifyItemData.js':
          /*!*******************************************!*\
  !*** ./src/assets/js/classifyItemData.js ***!
  \*******************************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.classifyDatas = void 0
            const classifyDatas = [
              {
                title: 'Guess you want to find...',
                list: [
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Skin Care Set',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Ellegant Coat',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Shoe Boots',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Casual Pants',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Hat',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Mask',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Cool Shoes',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    Name: 'Cooking Set',
                  },
                ],
              },
              {
                title: 'You might also like...',
                list: [
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: "Men's Sneakers",
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: "Men's Boots",
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: "Men's Leather Shoes",
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: "Men's Jeans",
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: "Men's Sweater",
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Shirts',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Underwear',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Shorts',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Grooming Set',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Tie Set',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Bag',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'T-shirt',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Sweater',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Wallet',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: "Lady's Sweater",
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Hair Treatment',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Lipstick',
                  },
                  {
                    img: 'https://images.unsplash.com/photo-1542296774331-3056678c88ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    name: 'Sports Cap',
                  },
                ],
              },
            ]
            exports.classifyDatas = classifyDatas

            /***/
          },

        /***/ './src/assets/js/favoriteData.js':
          /*!***************************************!*\
  !*** ./src/assets/js/favoriteData.js ***!
  \***************************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.favoriteDatas = void 0
            const favoriteDatas = [
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
              {
                img: 'https://images.unsplash.com/photo-1564286026239-5f323cd273c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1587&q=80',
                name: 'Lancome | Lancome Lancome small black bottle',
                price: '498',
                oldPrice: '680',
                discount: '7.3',
                brief:
                  'Big Eye Essence Eye Muscle Foundation 20ml light panda eye fine lines',
              },
            ]
            exports.favoriteDatas = favoriteDatas

            /***/
          },

        /***/ './src/assets/js/homeData.js':
          /*!***********************************!*\
  !*** ./src/assets/js/homeData.js ***!
  \***********************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.homeDatas = void 0
            const homeDatas = [
              {
                img: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4350&q=80',
                name: 'Cool Watch',
                price: '€8.6',
                brief: 'xxx',
              },
              {
                img: 'https://images.unsplash.com/photo-1556909128-2293de4be38e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                name: 'Kitchenware Special',
                price: '7.5% off',
                brief: 'xxx',
              },
              {
                img: 'https://images.unsplash.com/photo-1560880550-bd38f18453cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                name: 'Cosmetics',
                price: '€8.8',
                brief: 'xxx',
              },
              {
                img: 'https://images.unsplash.com/photo-1493799582117-9a58bc07a8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4350&q=80',
                name: 'Cool Watch',
                price: '€8.6',
                brief: 'xxx',
              },
              {
                img: 'https://images.unsplash.com/photo-1556909128-2293de4be38e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                name: 'Kitchenware',
                price: '7.5% off',
                brief: 'xxx',
              },
              {
                img: 'https://images.unsplash.com/photo-1560880550-bd38f18453cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                name: 'cosmetics',
                price: '€8.8',
                brief: 'xxx',
              },
              {
                img: 'https://images.unsplash.com/photo-1493799582117-9a58bc07a8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4350&q=80',
                name: 'Cool Watch',
                price: '€8.6',
                brief: 'xxx',
              },
              {
                img: 'https://images.unsplash.com/photo-1556909128-2293de4be38e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                name: 'Kitchenware',
                price: '7.5% off',
                brief: 'xxx',
              },
              {
                img: 'https://images.unsplash.com/photo-1560880550-bd38f18453cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                name: 'cosmetics special',
                price: '€8.8',
                brief: 'xxx',
              },
              {
                img: 'https://images.unsplash.com/photo-1493799582117-9a58bc07a8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4350&q=80',
                name: 'Cool Watch Special',
                price: '€8.6',
                brief: 'xxx',
              },
            ]
            exports.homeDatas = homeDatas

            /***/
          },

        /***/ './src/assets/js/memberData.js':
          /*!*************************************!*\
  !*** ./src/assets/js/memberData.js ***!
  \*************************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.memberDatas = void 0
            const memberDatas = {
              head: {
                title: '',
                iconNames: [
                  {
                    icon: '\uf09d',
                    name: 'Pending Payment',
                  },
                  {
                    icon: '\uf0d1',
                    name: 'Delivered',
                  },
                  {
                    icon: '\uf0d6',
                    name: 'Return/Exchanges',
                  },
                  {
                    icon: '\uf0cb',
                    name: 'All Orders',
                  },
                ],
              },
              mySale: {
                title: 'My Special Sale',
                iconNames: [
                  {
                    icon: '\uf00a',
                    name: 'Products',
                  },
                  {
                    icon: '\uf02c',
                    name: 'Brand Collection',
                  },
                  {
                    icon: '\uf1ad',
                    name: 'Store Collection',
                  },
                  {
                    icon: '\uf0ca',
                    name: 'My Activity',
                  },
                ],
              },
              myActivities: {
                title: 'My Activity',
                iconNames: [
                  {
                    icon: '\uf0a3',
                    name: 'Quality Items',
                  },
                  {
                    icon: '\uf0e7',
                    name: 'Flash Sales',
                  },
                  {
                    icon: '\uf06b',
                    name: 'Recently buyed',
                  },
                  {
                    icon: '\uf004',
                    name: 'Wish list',
                  },
                ],
              },
            }
            exports.memberDatas = memberDatas

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
      var __webpack_exports__ = {}
      // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
      ;(() => {
        /*!*********************************************!*\
  !*** ./src/pages/Main/index.ux?uxType=page ***!
  \*********************************************/
        __webpack_require__(
          /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./personalCenter.ux?uxType=comp&name=personalcenter */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/personalCenter.ux?uxType=comp&name=personalcenter'
        )
        __webpack_require__(
          /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./home.ux?uxType=comp&name=home */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/home.ux?uxType=comp&name=home'
        )
        __webpack_require__(
          /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./classify.ux?uxType=comp&name=classify */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/classify.ux?uxType=comp&name=classify'
        )
        __webpack_require__(
          /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./shoppingCart.ux?uxType=comp&name=shoppingcart */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./src/pages/Main/shoppingCart.ux?uxType=comp&name=shoppingcart'
        )

        var $app_style$ = __webpack_require__(
          /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Main/index.ux?uxType=page'
        )

        var $app_script$ = __webpack_require__(
          /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Main/index.ux?uxType=page'
        )

        $app_define$(
          '@app-component/index',
          [],
          function ($app_require$, $app_exports$, $app_module$) {
            $app_script$($app_module$, $app_exports$, $app_require$)
            if ($app_exports$.__esModule && $app_exports$.default) {
              $app_module$.exports = $app_exports$.default
            }
            $app_module$.exports.template = __webpack_require__(
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=personalcenter,importNames[]=home,importNames[]=classify,importNames[]=shoppingcart */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Main/index.ux?uxType=page&importNames[]=personalcenter,importNames[]=home,importNames[]=classify,importNames[]=shoppingcart'
            )

            $app_module$.exports.style = $app_style$
          }
        )
        $app_bootstrap$('@app-component/index', { packagerVersion: '1.9.5' })
      })()

      /******/
    })()
  }
  if (typeof window === 'undefined') {
    return createPageHandler()
  } else {
    window.createPageHandler = createPageHandler
  }
})()
