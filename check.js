const str = 'АА'

// const [str1, str2] = str.split(' ');
//
// console.log(str1.split('').reverse().join('') === str2)

// const podirom = str => str.split(' ')[0].split('').reverse().join('') === str.split(' ')[1]

// const polidrom = str => {
//   let i1 = 0
//   let i2 = str.length - 1
//
//   while (i1 < i2) {
//     console.log(str[i1], str[i2])
//     if ((!str[i1].match(/[a-zA-ZА-Яа-я]/gm) && i1++) || (!str[i2].match(/[a-zA-ZА-Яа-я]/gm) && i2--) || str[i1].toLowerCase() === str[i2].toLowerCase() && (++i1 && i2--)) {
//       continue
//     }
//     return false
//   }
//   return true
// }

// Array.from({ length: 10 }).map((_, i) => {setTimeout(() => console.log(i), i * 1000)})

process.stdin.on('readable', function () {
  let result = 0
  let stdin = process.stdin.read()
  if (stdin) {
    stdin.toString().split(' ').filter(x => Number(x)).forEach(x => result += +x)
    process.stdout.write(result.toString())
  }
})

const fs = require('fs')

fs.readFile('input.txt', (err, result) => {
  if (err) {
    return
  }
  let res = 0
  result.toString().split(' ').filter(x => Number(x)).forEach(x => {res = res + +x})
  console.log(res)
  fs.writeFile('./output.txt', res.toString(), () => {})
})









