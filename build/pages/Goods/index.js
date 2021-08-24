;(function () {
  var createPageHandler = function () {
    return /******/ (() => {
      // webpackBootstrap
      /******/ var __webpack_modules__ = {
        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Goods/index.ux?uxType=page':
          /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Goods/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

              var _system = _interopRequireDefault(
                $app_require$('@app-module/system.router')
              )

              var _goodsData = __webpack_require__(
                /*! ../../assets/js/goodsData */ './src/assets/js/goodsData.js'
              )

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj }
              }

              var _default = {
                private: {
                  isTop: true,
                  cartIcon: '\uf07a',
                  datas: _goodsData.goodsDatas,
                  autoPlay: false,
                  sliderValue: 1000,
                  indicator: true,
                  durationValue: 1000,
                  isVertical: false,
                  marginValue: 0,
                  loopPlay: true,
                  topValue: 10,
                  checkedSize: {},
                  pickedCount: 0,
                },

                onInit() {
                  const that = this
                  this.datas.size.forEach((item) => {
                    if (item.isChecked) {
                      that.checkedSize = item
                    }
                  })
                },

                onBack() {
                  _system.default.back()
                },

                onScrollTop() {
                  const that = this
                  setTimeout(() => {
                    that.isTop = true
                  }, 100)
                },

                onScroll(param) {
                  if (this.isTop && 0 != param.scrollY) {
                    this.isTop = false
                  }
                },

                onSizeChecked(index) {
                  const that = this
                  this.datas.size.forEach((item, idx) => {
                    item.isChecked = idx === index

                    if (item.isChecked) {
                      that.checkedSize = item
                    }
                  })
                },

                onClickAddCart() {
                  this.pickedCount++
                },

                onClickBuyNow() {
                  this.$app.setAppData('activeTab', 2)

                  _system.default.push({
                    uri: 'pages/Main',
                  })
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

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp':
          /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
                  shape: {
                    type: String,
                    default: 'circle',
                  },
                  size: {
                    type: String,
                    default: 'default',
                  },
                  src: {
                    type: String,
                    default: '',
                  },
                },
              }
              exports.default = _default
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp':
          /*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
              '.apex-avatar': {
                backgroundColor: '#cccccc',
                color: '#ffffff',
                justifyContent: 'center',
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderLeftWidth: '1px',
                borderStyle: 'solid',
                borderTopColor: '#dddee1',
                borderRightColor: '#dddee1',
                borderBottomColor: '#dddee1',
                borderLeftColor: '#dddee1',
                width: '100px',
                height: '100px',
                lineHeight: '100px',
                borderRadius: '50px',
              },
              '.apex-avatar text': {
                color: '#ffffff',
                lines: 1,
                textAlign: 'center',
                fontSize: '50px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'apex-avatar',
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
              '.apex-avatar image': {
                borderRadius: '50px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'apex-avatar',
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
              '.apex-avatar-large': {
                width: '120px',
                height: '120px',
                lineHeight: '120px',
                borderRadius: '60px',
              },
              '.apex-avatar-large text': {
                color: '#ffffff',
                lines: 1,
                textAlign: 'center',
                fontSize: '60px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'apex-avatar-large',
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
              '.apex-avatar-large image': {
                borderRadius: '60px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'apex-avatar-large',
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
              '.apex-avatar-small': {
                width: '80px',
                height: '80px',
                lineHeight: '80px',
                borderRadius: '40px',
              },
              '.apex-avatar-small text': {
                color: '#ffffff',
                lines: 1,
                textAlign: 'center',
                fontSize: '40px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'apex-avatar-small',
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
              '.apex-avatar-small image': {
                borderRadius: '40px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'apex-avatar-small',
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
              '.apex-avatar-image': {
                backgroundColor: 'rgba(0,0,0,0)',
              },
              '.apex-avatar-square': {
                borderRadius: '4px',
              },
              '.apex-avatar-square image': {
                borderRadius: '4px',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'apex-avatar-square',
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
              '.apex-avatar > image': {
                width: '100%',
                height: '100%',
                _meta: {
                  ruleDef: [
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'apex-avatar',
                    },
                    {
                      t: 'child',
                    },
                    {
                      t: 't',
                      n: 'image',
                    },
                  ],
                },
              },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Goods/index.ux?uxType=page':
          /*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Goods/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
              '.page-container .stack-container': {
                flex: 1,
                width: '100%',
                height: '100%',
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
                      v: 'stack-container',
                    },
                  ],
                },
              },
              '.page-container .stack-container .list-container': {
                flex: 1,
                width: '100%',
                backgroundColor: '#eeeeee',
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
                      v: 'stack-container',
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
              '.page-container .stack-container .list-container .item-images': {
                width: '100%',
                height: '800px',
                backgroundColor: '#ffffff',
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
                      v: 'stack-container',
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
                      v: 'item-images',
                    },
                  ],
                },
              },
              '.page-container .stack-container .list-container .item-images .images-swiper':
                {
                  width: '100%',
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
                        v: 'stack-container',
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
                        v: 'item-images',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'images-swiper',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-images .images-swiper .images-image':
                {
                  width: '100%',
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
                        v: 'stack-container',
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
                        v: 'item-images',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'images-swiper',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'images-image',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-price': {
                backgroundColor: '#ffffff',
                width: '100%',
                flexDirection: 'row',
                paddingTop: '32px',
                paddingRight: '32px',
                paddingBottom: '32px',
                paddingLeft: '32px',
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
                      v: 'stack-container',
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
                      v: 'item-price',
                    },
                  ],
                },
              },
              '.page-container .stack-container .list-container .item-price .price-text-price':
                {
                  fontSize: '45px',
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
                        v: 'stack-container',
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
                        v: 'item-price',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'price-text-price',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-price .price-text-oldprice':
                {
                  fontSize: '35px',
                  color: '#c7c2c2',
                  marginTop: '16px',
                  marginRight: '16px',
                  marginBottom: '16px',
                  marginLeft: '16px',
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
                        v: 'stack-container',
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
                        v: 'item-price',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'price-text-oldprice',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-price .price-text-discount':
                {
                  fontSize: '35px',
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
                        v: 'stack-container',
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
                        v: 'item-price',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'price-text-discount',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-title': {
                paddingTop: '32px',
                paddingRight: '32px',
                paddingBottom: '32px',
                paddingLeft: '32px',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
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
                      v: 'stack-container',
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
              '.page-container .stack-container .list-container .item-title .title-line':
                {
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
                        v: 'stack-container',
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
              '.page-container .stack-container .list-container .item-title .title-text-title':
                {
                  marginTop: '32px',
                  width: '100%',
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
                        v: 'stack-container',
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
              '.page-container .stack-container .list-container .item-title .title-text-declare':
                {
                  width: '100%',
                  fontSize: '30px',
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
                        v: 'stack-container',
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
                        v: 'title-text-declare',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-size': {
                flexDirection: 'column',
                width: '100%',
                paddingTop: '32px',
                paddingRight: '32px',
                paddingBottom: '32px',
                paddingLeft: '32px',
                marginTop: '32px',
                backgroundColor: '#ffffff',
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
                      v: 'stack-container',
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
                      v: 'item-size',
                    },
                  ],
                },
              },
              '.page-container .stack-container .list-container .item-size .size-text-title':
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
                        v: 'stack-container',
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
                        v: 'item-size',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-text-title',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-size .size-group':
                {
                  flexDirection: 'row',
                  paddingTop: '32px',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
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
                        v: 'stack-container',
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
                        v: 'item-size',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-group',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-size .size-group .size-stack':
                {
                  width: '30%',
                  height: '64px',
                  borderRadius: '8px',
                  borderTopWidth: '2px',
                  borderRightWidth: '2px',
                  borderBottomWidth: '2px',
                  borderLeftWidth: '2px',
                  borderTopColor: '#d4237a',
                  borderRightColor: '#d4237a',
                  borderBottomColor: '#d4237a',
                  borderLeftColor: '#d4237a',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
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
                        v: 'stack-container',
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
                        v: 'item-size',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-group',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-stack',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-size .size-group .size-stack .size-text-specifications':
                {
                  width: '100%',
                  height: '100%',
                  fontSize: '30px',
                  color: '#d4237a',
                  textAlign: 'center',
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
                        v: 'stack-container',
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
                        v: 'item-size',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-group',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-stack',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-text-specifications',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-size .size-group .size-stack .size-image':
                {
                  width: '30px',
                  height: '30px',
                  alignSelf: 'flex-end',
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
                        v: 'stack-container',
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
                        v: 'item-size',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-group',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-stack',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'size-image',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-rules': {
                width: '100%',
                marginTop: '32px',
                marginBottom: '32px',
                backgroundColor: '#ffffff',
                paddingTop: '32px',
                paddingRight: '32px',
                paddingBottom: '32px',
                paddingLeft: '32px',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
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
                      v: 'stack-container',
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
                      v: 'item-rules',
                    },
                  ],
                },
              },
              '.page-container .stack-container .list-container .item-rules .rules-text':
                {
                  color: '#808080',
                  fontSize: '25px',
                  lines: 1,
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
                        v: 'stack-container',
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
                        v: 'item-rules',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'rules-text',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-reputation':
                {
                  width: '100%',
                  paddingTop: '32px',
                  paddingRight: '32px',
                  paddingBottom: '32px',
                  paddingLeft: '32px',
                  backgroundColor: '#ffffff',
                  flexDirection: 'column',
                  marginBottom: '32px',
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
                        v: 'stack-container',
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
                        v: 'item-reputation',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-reputation .reputation-text-title':
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
                        v: 'stack-container',
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
                        v: 'item-reputation',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-text-title',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-reputation .reputation-text-subtitle':
                {
                  fontSize: '25px',
                  color: '#808080',
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
                        v: 'stack-container',
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
                        v: 'item-reputation',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-text-subtitle',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-reputation .reputation-labels-wrap':
                {
                  width: '100%',
                  flexWrap: 'wrap',
                  marginTop: '16px',
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
                        v: 'stack-container',
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
                        v: 'item-reputation',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-labels-wrap',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-reputation .reputation-labels-wrap .reputation-text-label':
                {
                  marginLeft: '8px',
                  marginRight: '8px',
                  fontSize: '20px',
                  color: '#4179f0',
                  borderTopWidth: '1px',
                  borderRightWidth: '1px',
                  borderBottomWidth: '1px',
                  borderLeftWidth: '1px',
                  borderTopColor: '#4179f0',
                  borderRightColor: '#4179f0',
                  borderBottomColor: '#4179f0',
                  borderLeftColor: '#4179f0',
                  textAlign: 'center',
                  paddingTop: '8px',
                  paddingRight: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '8px',
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
                        v: 'stack-container',
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
                        v: 'item-reputation',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-labels-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-text-label',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-reputation .reputation-commenter-wrap':
                {
                  width: '100%',
                  flexDirection: 'row',
                  marginTop: '16px',
                  marginBottom: '16px',
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
                        v: 'stack-container',
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
                        v: 'item-reputation',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-commenter-wrap',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-reputation .reputation-commenter-wrap .reputation-image':
                {
                  width: '64px',
                  height: '64px',
                  borderRadius: '32px',
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
                        v: 'stack-container',
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
                        v: 'item-reputation',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-commenter-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-image',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-reputation .reputation-commenter-wrap .reputation-text-number':
                {
                  marginLeft: '16px',
                  fontSize: '25px',
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
                        v: 'stack-container',
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
                        v: 'item-reputation',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-commenter-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-text-number',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-reputation .reputation-text-comment':
                {
                  fontSize: '25px',
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
                        v: 'stack-container',
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
                        v: 'item-reputation',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'reputation-text-comment',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-brand': {
                width: '100%',
                paddingTop: '32px',
                paddingRight: '32px',
                paddingBottom: '32px',
                paddingLeft: '32px',
                backgroundColor: '#ffffff',
                alignItems: 'center',
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
                      v: 'stack-container',
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
                      v: 'item-brand',
                    },
                  ],
                },
              },
              '.page-container .stack-container .list-container .item-brand .brand-image':
                {
                  width: '160px',
                  height: '160px',
                  borderTopWidth: '1px',
                  borderRightWidth: '1px',
                  borderBottomWidth: '1px',
                  borderLeftWidth: '1px',
                  borderTopColor: '#eeeeee',
                  borderRightColor: '#eeeeee',
                  borderBottomColor: '#eeeeee',
                  borderLeftColor: '#eeeeee',
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
                        v: 'stack-container',
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
                        v: 'item-brand',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'brand-image',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-brand .brand-text-name':
                {
                  paddingTop: '32px',
                  paddingRight: '32px',
                  paddingBottom: '32px',
                  paddingLeft: '32px',
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
                        v: 'stack-container',
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
                        v: 'item-brand',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'brand-text-name',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-introduce':
                {
                  width: '100%',
                  paddingTop: '32px',
                  paddingRight: '32px',
                  paddingBottom: '32px',
                  paddingLeft: '32px',
                  backgroundColor: '#ffffff',
                  flexDirection: 'column',
                  marginTop: '32px',
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
                        v: 'stack-container',
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
                        v: 'item-introduce',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-introduce .introduce-text-title':
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
                        v: 'stack-container',
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
                        v: 'item-introduce',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'introduce-text-title',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-introduce .introduce-wrap':
                {
                  flexDirection: 'row',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  alignItems: 'flex-start',
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
                        v: 'stack-container',
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
                        v: 'item-introduce',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'introduce-wrap',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-introduce .introduce-wrap .introduce-text-name':
                {
                  width: '25%',
                  lines: 1,
                  fontSize: '30px',
                  color: '#808080',
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
                        v: 'stack-container',
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
                        v: 'item-introduce',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'introduce-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'introduce-text-name',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-introduce .introduce-wrap .introduce-text-value':
                {
                  flex: 1,
                  fontSize: '30px',
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
                        v: 'stack-container',
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
                        v: 'item-introduce',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'introduce-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'introduce-text-value',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-imagetext':
                {
                  width: '100%',
                  marginTop: '32px',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
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
                        v: 'stack-container',
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
                        v: 'item-imagetext',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-imagetext .imagetext-text-title':
                {
                  fontSize: '35px',
                  color: '#000000',
                  paddingTop: '32px',
                  paddingRight: '32px',
                  paddingBottom: '32px',
                  paddingLeft: '32px',
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
                        v: 'stack-container',
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
                        v: 'item-imagetext',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'imagetext-text-title',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .list-container .item-imagetext .imagetext-image':
                {
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
                        v: 'stack-container',
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
                        v: 'item-imagetext',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'imagetext-image',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .titlebar-container': {
                flexDirection: 'column',
                width: '100%',
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
                      v: 'stack-container',
                    },
                    {
                      t: 'd',
                    },
                    {
                      t: 'a',
                      n: 'class',
                      i: false,
                      a: 'element',
                      v: 'titlebar-container',
                    },
                  ],
                },
              },
              '.page-container .stack-container .titlebar-container .titlebar-wrap':
                {
                  flexDirection: 'row',
                  width: '100%',
                  height: '100px',
                  paddingTop: '16px',
                  paddingRight: '16px',
                  paddingBottom: '16px',
                  paddingLeft: '16px',
                  backgroundColor: 'rgba(0,0,0,0)',
                  alignItems: 'center',
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
                        v: 'stack-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-wrap',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .titlebar-container .titlebar-wrap .titlebar-image-back':
                {
                  backgroundColor: '#ffffff',
                  width: '64px',
                  height: '64px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '40px',
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
                        v: 'stack-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-image-back',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .titlebar-container .titlebar-wrap .titlebar-text-title':
                {
                  color: '#000000',
                  marginLeft: '80px',
                  lines: 1,
                  textOverflow: 'ellipsis',
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
                        v: 'stack-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-text-title',
                      },
                    ],
                  },
                },
              '.page-container .stack-container .titlebar-container .titlebar-line':
                {
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#f5f5dc',
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
                        v: 'stack-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-container',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'titlebar-line',
                      },
                    ],
                  },
                },
              '.page-container .bottom-container': {
                width: '100%',
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
                      v: 'bottom-container',
                    },
                  ],
                },
              },
              '.page-container .bottom-container .bottom-line': {
                width: '100%',
                height: '2px',
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
                      v: 'bottom-line',
                    },
                  ],
                },
              },
              '.page-container .bottom-container .bottom-wrap': {
                width: '100%',
                flexDirection: 'row',
                paddingTop: '32px',
                paddingRight: '32px',
                paddingBottom: '32px',
                paddingLeft: '32px',
                justifyContent: 'space-between',
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
                      v: 'bottom-wrap',
                    },
                  ],
                },
              },
              '.page-container .bottom-container .bottom-wrap .bottom-shoppingcart-wrap':
                {
                  width: '32%',
                  borderTopWidth: '1px',
                  borderRightWidth: '1px',
                  borderBottomWidth: '1px',
                  borderLeftWidth: '1px',
                  borderRadius: '6px',
                  borderTopColor: '#808080',
                  borderRightColor: '#808080',
                  borderBottomColor: '#808080',
                  borderLeftColor: '#808080',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '8px',
                  paddingBottom: '8px',
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
                        v: 'bottom-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-shoppingcart-wrap',
                      },
                    ],
                  },
                },
              '.page-container .bottom-container .bottom-wrap .bottom-shoppingcart-wrap .bottom-stack-shoppingcart':
                {
                  width: '64px',
                  height: '64px',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
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
                        v: 'bottom-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-shoppingcart-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-stack-shoppingcart',
                      },
                    ],
                  },
                },
              '.page-container .bottom-container .bottom-wrap .bottom-shoppingcart-wrap .bottom-stack-shoppingcart .cart-icon':
                {
                  fontFamily: 'iconfont',
                  width: '100%',
                  height: '100%',
                  fontSize: '200%',
                  lineHeight: '100%',
                  textAlign: 'center',
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
                        v: 'bottom-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-shoppingcart-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-stack-shoppingcart',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'cart-icon',
                      },
                    ],
                  },
                },
              '.page-container .bottom-container .bottom-wrap .bottom-shoppingcart-wrap .bottom-stack-shoppingcart .bottom-text-count':
                {
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#d4237a',
                  borderRadius: '32px',
                  color: '#ffffff',
                  fontSize: '20px',
                  textAlign: 'center',
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
                        v: 'bottom-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-shoppingcart-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-stack-shoppingcart',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-text-count',
                      },
                    ],
                  },
                },
              '.page-container .bottom-container .bottom-wrap .bottom-buttons-wrap':
                {
                  flexDirection: 'row',
                  width: '64%',
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
                        v: 'bottom-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-buttons-wrap',
                      },
                    ],
                  },
                },
              '.page-container .bottom-container .bottom-wrap .bottom-buttons-wrap .bottom-button-addcart':
                {
                  width: '50%',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  borderTopLeftRadius: '6px',
                  borderBottomLeftRadius: '6px',
                  backgroundColor: '#d4237a',
                  fontSize: '30px',
                  color: '#ffffff',
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
                        v: 'bottom-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-buttons-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-button-addcart',
                      },
                    ],
                  },
                },
              '.page-container .bottom-container .bottom-wrap .bottom-buttons-wrap .bottom-button-buynow':
                {
                  width: '50%',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  borderTopRightRadius: '6px',
                  borderBottomRightRadius: '6px',
                  backgroundColor: '#000000',
                  fontSize: '30px',
                  color: '#ffffff',
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
                        v: 'bottom-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-buttons-wrap',
                      },
                      {
                        t: 'd',
                      },
                      {
                        t: 'a',
                        n: 'class',
                        i: false,
                        a: 'element',
                        v: 'bottom-button-buynow',
                      },
                    ],
                  },
                },
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp&':
          /*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp& ***!
  \**********************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'div',
              attr: {},
              classList: function () {
                return [
                  'apex-class',
                  'apex-avatar',
                  '' + 'apex-avatar-' + this.shape,
                  '' + 'apex-avatar-' + this.size,
                  this.src ? 'apex-avatar-image' : '',
                ]
              },
              children: [
                {
                  type: 'image',
                  attr: {
                    src: function () {
                      return this.src
                    },
                  },
                  shown: function () {
                    return this.src !== ''
                  },
                },
                {
                  type: 'text',
                  attr: {},
                  classList: ['apex-avatar-string'],
                  shown: function () {
                    return !(this.src !== '')
                  },
                  children: [
                    {
                      type: 'slot',
                      attr: {
                        name: 'default',
                      },
                    },
                  ],
                },
              ],
            }

            /***/
          },

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Goods/index.ux?uxType=page&importNames[]=my-avatar':
          /*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Goods/index.ux?uxType=page&importNames[]=my-avatar ***!
  \**********************************************************************************************************************************************************************************************************************************/
          /***/ (module) => {
            module.exports = {
              type: 'div',
              attr: {},
              classList: ['page-container'],
              children: [
                {
                  type: 'stack',
                  attr: {},
                  classList: ['stack-container'],
                  children: [
                    {
                      type: 'list',
                      attr: {},
                      classList: ['list-container'],
                      events: {
                        scrolltop: 'onScrollTop',
                        scroll: 'onScroll',
                      },
                      children: [
                        {
                          type: 'list-item',
                          attr: {
                            type: 'goodsImgs',
                          },
                          classList: ['item-images'],
                          events: {
                            disappear: 'showMask',
                            appear: 'hideMask',
                          },
                          children: [
                            {
                              type: 'swiper',
                              attr: {
                                autoplay: function () {
                                  return this.autoPlay
                                },
                                interval: function () {
                                  return this.sliderValue
                                },
                                indicator: function () {
                                  return this.indicator
                                },
                                duration: function () {
                                  return this.durationValue
                                },
                                vertical: function () {
                                  return this.isVertical
                                },
                                previousmargin: function () {
                                  return this.marginValue
                                },
                                nextmargin: function () {
                                  return this.marginValue
                                },
                                loop: function () {
                                  return this.loopPlay
                                },
                              },
                              classList: ['images-swiper'],
                              style: {
                                indicatorBottom: function () {
                                  return this.topValue
                                },
                              },
                              children: [
                                {
                                  type: 'image',
                                  attr: {
                                    src: function () {
                                      return this.$item
                                    },
                                  },
                                  classList: ['images-image'],
                                  repeat: function () {
                                    return this.datas.imgs
                                  },
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list-item',
                          attr: {
                            type: 'goodsPrice',
                          },
                          classList: ['item-price'],
                          children: [
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return '' + '€' + this.checkedSize.price
                                },
                              },
                              classList: ['price-text-price'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.checkedSize.oldPrice
                                },
                              },
                              classList: ['price-text-oldprice'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return (
                                    '' + this.checkedSize.discount + '% off'
                                  )
                                },
                              },
                              classList: ['price-text-discount'],
                            },
                          ],
                        },
                        {
                          type: 'list-item',
                          attr: {
                            type: 'goodsTitle',
                          },
                          classList: ['item-title'],
                          children: [
                            {
                              type: 'div',
                              attr: {},
                              classList: ['title-line'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.datas.title
                                },
                              },
                              classList: ['title-text-title'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.datas.declare
                                },
                              },
                              classList: ['title-text-declare'],
                            },
                          ],
                        },
                        {
                          type: 'list-item',
                          attr: {
                            type: 'goodsSize',
                          },
                          classList: ['item-size'],
                          children: [
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.datas.sizeTitle
                                },
                              },
                              classList: ['size-text-title'],
                            },
                            {
                              type: 'div',
                              attr: {},
                              classList: ['size-group'],
                              children: [
                                {
                                  type: 'stack',
                                  attr: {},
                                  classList: ['size-stack'],
                                  repeat: function () {
                                    return this.datas.size
                                  },
                                  style: {
                                    borderColor: function () {
                                      return this.$item.isChecked
                                        ? '#d4237a'
                                        : '#808080'
                                    },
                                  },
                                  events: {
                                    click: function (evt) {
                                      return this.onSizeChecked(this.$idx, evt)
                                    },
                                  },
                                  children: [
                                    {
                                      type: 'text',
                                      attr: {
                                        value: function () {
                                          return this.$item.specifications
                                        },
                                      },
                                      classList: ['size-text-specifications'],
                                      style: {
                                        color: function () {
                                          return this.$item.isChecked
                                            ? '#d4237a'
                                            : '#808080'
                                        },
                                      },
                                    },
                                    {
                                      type: 'image',
                                      attr: {
                                        src: '/assets/images/select.png',
                                        show: function () {
                                          return this.$item.isChecked
                                        },
                                      },
                                      classList: ['size-image'],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list-item',
                          attr: {
                            type: 'goodsRules',
                          },
                          classList: ['item-rules'],
                          children: [
                            {
                              type: 'block',
                              attr: {},
                              repeat: function () {
                                return this.datas.rules
                              },
                              children: [
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return this.$item
                                    },
                                  },
                                  classList: ['rules-text'],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list-item',
                          attr: {
                            type: 'goodsReputation',
                          },
                          classList: ['item-reputation'],
                          children: [
                            {
                              type: 'text',
                              attr: {
                                value: 'Popular Reviews',
                              },
                              classList: ['reputation-text-title'],
                            },
                            {
                              type: 'text',
                              attr: {
                                value:
                                  'Opinion from customers who have purchased them',
                              },
                              classList: ['reputation-text-subtitle'],
                            },
                            {
                              type: 'div',
                              attr: {},
                              classList: ['reputation-labels-wrap'],
                              children: [
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return this.$item
                                    },
                                  },
                                  classList: ['reputation-text-label'],
                                  repeat: function () {
                                    return this.datas.reputation.labels
                                  },
                                },
                              ],
                            },
                            {
                              type: 'div',
                              attr: {},
                              classList: ['reputation-commenter-wrap'],
                              children: [
                                {
                                  type: 'my-avatar',
                                  attr: {
                                    src: function () {
                                      return this.datas.reputation.commenterImg
                                    },
                                    size: 'small',
                                  },
                                },
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return this.datas.reputation
                                        .commenterNumber
                                    },
                                  },
                                  classList: ['reputation-text-number'],
                                },
                              ],
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.datas.reputation.comment
                                },
                              },
                              classList: ['reputation-text-comment'],
                            },
                          ],
                        },
                        {
                          type: 'list-item',
                          attr: {
                            type: 'goodsBrand',
                          },
                          classList: ['item-brand'],
                          children: [
                            {
                              type: 'my-avatar',
                              attr: {
                                src: function () {
                                  return this.datas.brand.icon
                                },
                                size: 'large',
                                shape: 'square',
                              },
                            },
                            {
                              type: 'text',
                              attr: {
                                value: function () {
                                  return this.datas.brand.name
                                },
                              },
                              classList: ['brand-text-name'],
                            },
                          ],
                        },
                        {
                          type: 'list-item',
                          attr: {
                            type: 'goodsIntroduce',
                          },
                          classList: ['item-introduce'],
                          children: [
                            {
                              type: 'text',
                              attr: {
                                value: 'Details',
                              },
                              classList: ['introduce-text-title'],
                            },
                            {
                              type: 'div',
                              attr: {},
                              classList: ['introduce-wrap'],
                              repeat: function () {
                                return this.datas.introduce
                              },
                              children: [
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return '' + this.$item.name + ':'
                                    },
                                  },
                                  classList: ['introduce-text-name'],
                                },
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return this.$item.value
                                    },
                                  },
                                  classList: ['introduce-text-value'],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'list-item',
                          attr: {
                            type: 'goodsImageText',
                          },
                          classList: ['item-imagetext'],
                          children: [
                            {
                              type: 'text',
                              attr: {
                                value: 'Other Pictures',
                              },
                              classList: ['imagetext-text-title'],
                            },
                            {
                              type: 'image',
                              attr: {
                                src: function () {
                                  return this.$item
                                },
                              },
                              classList: ['imagetext-image'],
                              repeat: function () {
                                return this.datas.imageText
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'div',
                      attr: {},
                      classList: ['titlebar-container'],
                      children: [
                        {
                          type: 'div',
                          attr: {},
                          classList: ['titlebar-wrap'],
                          style: {
                            backgroundColor: function () {
                              return this.isTop ? 'transparent' : '#ffffff'
                            },
                          },
                          children: [
                            {
                              type: 'image',
                              attr: {
                                src: '/assets/images/b.png',
                              },
                              classList: ['titlebar-image-back'],
                              events: {
                                click: 'onBack',
                              },
                            },
                            {
                              type: 'text',
                              attr: {
                                show: function () {
                                  return !this.isTop
                                },
                                value: function () {
                                  return this.datas.name
                                },
                              },
                              classList: ['titlebar-text-title'],
                            },
                          ],
                        },
                        {
                          type: 'div',
                          attr: {
                            show: function () {
                              return !this.isTop
                            },
                          },
                          classList: ['titlebar-line'],
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
                      type: 'div',
                      attr: {},
                      classList: ['bottom-line'],
                    },
                    {
                      type: 'div',
                      attr: {},
                      classList: ['bottom-wrap'],
                      children: [
                        {
                          type: 'div',
                          attr: {},
                          classList: ['bottom-shoppingcart-wrap'],
                          children: [
                            {
                              type: 'stack',
                              attr: {},
                              classList: ['bottom-stack-shoppingcart'],
                              children: [
                                {
                                  type: 'text',
                                  attr: {
                                    value: function () {
                                      return this.cartIcon
                                    },
                                  },
                                  classList: ['cart-icon'],
                                },
                                {
                                  type: 'text',
                                  attr: {
                                    show: function () {
                                      return this.pickedCount !== 0
                                    },
                                    value: function () {
                                      return this.pickedCount
                                    },
                                  },
                                  classList: ['bottom-text-count'],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          type: 'div',
                          attr: {},
                          classList: ['bottom-buttons-wrap'],
                          children: [
                            {
                              type: 'input',
                              attr: {
                                type: 'button',
                                value: 'Add to Cart',
                              },
                              classList: ['bottom-button-addcart'],
                              events: {
                                click: 'onClickAddCart',
                              },
                            },
                            {
                              type: 'input',
                              attr: {
                                type: 'button',
                                value: 'Buy Now',
                              },
                              classList: ['bottom-button-buynow'],
                              events: {
                                click: 'onClickBuyNow',
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

        /***/ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp&name=my-avatar':
          /*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp&name=my-avatar ***!
  \***************************************************************************************************************************************************************************************/
          /***/ (
            __unused_webpack_module,
            __unused_webpack_exports,
            __webpack_require__
          ) => {
            var $app_style$ = __webpack_require__(
              /*! !../../../@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp'
            )

            var $app_script$ = __webpack_require__(
              /*! !../../../@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp'
            )

            $app_define$(
              '@app-component/my-avatar',
              [],
              function ($app_require$, $app_exports$, $app_module$) {
                $app_script$($app_module$, $app_exports$, $app_require$)
                if ($app_exports$.__esModule && $app_exports$.default) {
                  $app_module$.exports = $app_exports$.default
                }
                $app_module$.exports.template = __webpack_require__(
                  /*! !../../../@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp&'
                )

                $app_module$.exports.style = $app_style$
              }
            )

            /***/
          },

        /***/ './src/assets/js/goodsData.js':
          /*!************************************!*\
  !*** ./src/assets/js/goodsData.js ***!
  \************************************/
          /***/ (__unused_webpack_module, exports) => {
            'use strict'

            Object.defineProperty(exports, '__esModule', {
              value: true,
            })
            exports.goodsDatas = void 0
            const goodsDatas = {
              imgs: [
                'https://images.unsplash.com/photo-1493799582117-9a58bc07a8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4350&q=80',
                'https://images.unsplash.com/photo-1556909128-2293de4be38e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                'https://images.unsplash.com/photo-1560880550-bd38f18453cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
              ],
              name: 'Dr.Ci:Labo',
              title: 'Skin care cleansing gel',
              declare:
                '(New and old packaging shipped randomly) Original authentic authorization, 4 in one, shrink pores and tighten skin, 5min first aid for pores, clear and improve skin freshness',
              sizeTitle: 'Specification',
              size: [
                {
                  price: '75',
                  oldPrice: '100',
                  discount: '7.5',
                  specifications: '16 pieces/box',
                  isChecked: true,
                },
                {
                  price: '149',
                  oldPrice: '199',
                  discount: '7.5',
                  specifications: '32 pieces/box',
                  isChecked: false,
                },
                {
                  price: '225',
                  oldPrice: '299',
                  discount: '7.5',
                  specifications: '48 pieces/box',
                  isChecked: false,
                },
              ],
              rules: [
                'self-operated',
                'no exchange or exchange within 7 days without reason',
                'exchange is not supported',
                'electronic invoice',
              ],
              reputation: {
                labels: ['Shrink pores', 'moisturizing'],
                commenterImg: '../../assets/images/logo.png',
                commenterNumber: '131*****266',
                comment:
                  'I bought this mask a few times and it is refreshing after using it. I like it. My skin is oily, and the effect of pore reduction is not obvious. I hope that the mask will have more essence, so that more customers will buy it. Many reviews say that it is too little, and it dries in a few minutes. ',
              },
              brand: {
                icon: '../../assets/images/logo.png',
                name: 'Dr.Ci:Labo',
              },
              introduce: [
                {
                  name: 'Purpose',
                  value:
                    'Moisturizing, hydrating, removing blackheads, cleansing pores, moisturizing and moisturizing',
                },
                {
                  name: 'Type',
                  value: 'Mask paper',
                },
                {
                  name: 'Skin Type',
                  value: 'Normal skin, oily skin, dry skin, combination skin',
                },
                {
                  name: 'Gender',
                  value: 'All',
                },
                {
                  name: 'Instructions',
                  value:
                    'The State Food and Drug Administration reminds: Please correctly understand the efficacy of cosmetics, cosmetics can not replace drugs, can not treat skin diseases.',
                },
                {
                  name: 'Product ID',
                  value: '4524734500774',
                },
              ],
              imageText: [
                'https://images.unsplash.com/photo-1563970163896-1bdc26b47b4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80',
                'https://images.unsplash.com/photo-1563940464540-73760058d371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
                'https://images.unsplash.com/photo-1563891217861-7924b471afb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80',
                'https://images.unsplash.com/photo-1563962585448-ec03efbcadb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3186&q=80',
                'https://images.unsplash.com/photo-1563910930658-1907bfa80f42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80',
              ],
            }
            exports.goodsDatas = goodsDatas

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
        /*!**********************************************!*\
  !*** ./src/pages/Goods/index.ux?uxType=page ***!
  \**********************************************/
        __webpack_require__(
          /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\git\quick-app-shop&type=import!../../../node_modules/apex-ui/components/avatar/index.ux?uxType=comp&name=my-avatar */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=D:\\git\\quick-app-shop&type=import!./node_modules/apex-ui/components/avatar/index.ux?uxType=comp&name=my-avatar'
        )

        var $app_style$ = __webpack_require__(
          /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Goods/index.ux?uxType=page'
        )

        var $app_script$ = __webpack_require__(
          /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../node_modules/babel-loader/lib/index.js?cwd=D:\git\quick-app-shop&cacheDirectory&plugins[]=D:\git\quick-app-shop\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=D:\git\quick-app-shop\node_modules\@hap-toolkit\packager\babel.config.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=D:\\git\\quick-app-shop&cacheDirectory&plugins[]=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=D:\\git\\quick-app-shop\\node_modules\\@hap-toolkit\\packager\\babel.config.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Goods/index.ux?uxType=page'
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
              /*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=my-avatar */ './node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Goods/index.ux?uxType=page&importNames[]=my-avatar'
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
