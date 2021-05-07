const fs = require('fs')

const write = (data) => {
  data = (!data) ? 'keku' : data;
  fs.writeFile('controller/1.txt', data, function (err) {
    if (err) throw err
    console.log('Replaced!!1! to ', data)
  })
}

export default write
