import write from 'controller/write'

let interval = 0;

const data = {
  x: 0,
  y: 0
}

// setInterval(() => {
//   console.log(data)
// }, 1000)
//
const noConnectHandler = () => {
  console.log('noConnect')
}






const Data = (req, res) => {
  res.status(200).json({ True: 'yes' })

  if (interval) {
    clearInterval(interval)
    interval = 0;
  }
  if (!interval) {
    interval = setTimeout(noConnectHandler, 1000);
  }
  if (req.method === 'POST'){
    const request = JSON.parse(req.body);
    data.x = request.left - request.right
    data.y = request.top - request.bottom
    console.log((Date.now() / 1000 % 10000) >> 0 , request)
  } else {
    console.log((Date.now() / 1000 % 10000) >> 0, req.method)
  }

  write(JSON.stringify(req.body))

}

export default Data



