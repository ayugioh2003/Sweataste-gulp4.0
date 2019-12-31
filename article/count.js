const fs = require('fs')

const path = './z_articles'
const reg = /\s+|#|\(|\)|\`|\*/g
let arr = []

let files = fs.readdirSync(path)
files.forEach( fileName => {
  var file = fs.readFileSync('./z_articles/' + fileName, 'utf8')
  arr.push(file.toString().replace(reg, "").length)
})

for (let i=0; i<arr.length; i++) {
  console.log(arr[i], files[i])
}

// console.log(arr)
// console.log(files)
console.log(`mean: ${ arr.reduce((acc, cur) => acc + cur) / arr.length}`)
console.log(`total: ${ arr.reduce((acc, cur) => acc + cur) }`)
