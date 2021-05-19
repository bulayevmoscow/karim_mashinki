const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.NODE_PORT || 3000;
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()



io.on('connect', socket => {
  console.log('connect')
  socket.emit('now', {
    message: 'zeit'
  })
  socket.on('data', data => console.log(data))
  socket.on('disconnect', () => {
    console.log('disconnect')
  })

})

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })
  server.listen(port, error => {
    if (error) throw error
    console.log('Ready!')
  })
})


