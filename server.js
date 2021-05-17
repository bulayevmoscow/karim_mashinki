const express = require('express')()
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const io = require('socket.io')()

io.listen(8000);

io.sockets.on('/connection', () => {
  console.log(`Client with ID of ${socket.id} connected!`)

  io.sockets.emit('SOME_EVENT', 'HelloWorld')
})

app.prepare().then(() => {
  const server = express;




  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

