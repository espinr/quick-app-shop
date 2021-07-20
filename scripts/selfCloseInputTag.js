/**
 * @file: selfCloseInputTag.js
 * @desc: Traverse the .ux file in the specified directory, and convert the input tag from <input **></input> to <input ** />
 * @date: 2019-01-23
 */

const fs = require('fs')
const path = require('path')

const quickappCodePath = './src/'

const main = codePath => {
  const traversing = cpath => {
    const files = fs.readdirSync(cpath)
    files.forEach(fileName => {
      const fPath = path.join(cpath, fileName)
      const stats = fs.statSync(fPath)
      stats.isDirectory() && traversing(fPath)
      stats.isFile() && fPath.endsWith('.ux') && matchAndReplace(fPath)
    })
  }
  traversing(codePath)
}

const matchAndReplace = path => {
  const pageContent = fs.readFileSync(path, 'UTF-8')
  const newContent = pageContent.replace(
    /(<)([\s]*?)(input\b[^\/]*?)>[\s\S]*?<\/input>/gm,
    '$1$3 />'
  )
  fs.writeFile(path, newContent, error => {
    if (error) throw `Something went wrong: ${error}`
  })
}

main(quickappCodePath)
