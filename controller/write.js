const fs = require('fs')

const write = (data) => {
  data = (!data) ? 'keku' : data;
  fs.writeFile('controller/1.txt', data, function (err) {
    if (err) throw err
    console.log('Replaced!!1! to ', data)
  })

  fetch('http://192.168.23.83:65432', {
    method: 'POST',
    body: 'keku'
  }).then(() => console.log('успех')).catch((err) => console.log(err))
}

export default write
