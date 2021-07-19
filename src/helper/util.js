/**
 * @desc Shows the menu.
 */
function showMenu() {
  const prompt = require('@system.prompt')
  const itemFuncMapping = [
    createShortcut,
    call3thPartyShare,
    jump2AboutPage,
    null
  ]
  prompt.showContextMenu({
    itemList: ['Save Homescreen', 'Share', 'About', 'Cancel'],
    success: function(ret) {
      if (itemFuncMapping[ret.index]) {
        itemFuncMapping[ret.index]()
      } else {
        prompt.showToast({
          message: 'error'
        })
      }
    }
  })
}

/**
 * @desc Display About page.
 */
function jump2AboutPage() {
  const router = require('@system.router')
  const appInfo = require('@system.app').getInfo()
  router.push({
    uri: '/pages/About',
    params: {
      name: appInfo.name,
      icon: appInfo.icon
    }
  })
}

/**
 * @desc Invoke third-party sharing.
 */
function call3thPartyShare() {
  const share = require('@service.share')

  share.share({
    shareType: 0,
    title:'Quick App',
    Summary:'Quick App is a new concept of light apps running on the device hardware',
    imagePath: '/assets/images/logo.png',
    targetUrl: 'https://quick-app-initiative.ow2.io/',
    platforms: ['WEIBO', 'WEIXIN', 'WEIXIN_CIRCLE'],
    success: function(data) {
      console.log(`handling success ${data}`)
    },
    fail: function(data, code) {
      console.log(`handling fail, code = ${code}`)
      console.log(data)
    }
  })
}

/**
 * @desc Create a homescreen icon.
 * Note: When using the Loader to test the function of creating a homescreen shortcut, enable the Desktop Shortcut permission of the Application Loader in System Settings.
 */
function createShortcut() {
  const prompt = require('@system.prompt')
  const shortcut = require('@system.shortcut')
  shortcut.hasInstalled({
    success: function(ret) {
      if (ret) {
        prompt.showToast({
          message: 'Homescreen icon created'
        })
      } else {
        shortcut.install({
          success: function() {
            prompt.showToast({
              message: 'Homescreen icon was successfully created.'
            })
          },
          fail: function(errmsg, errcode) {
            prompt.showToast({
              message: `${errcode}: ${errmsg}`
            })
          }
        })
      }
    }
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

export default {
  showMenu,
  createShortcut,
  queryString
}
