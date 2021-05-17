const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const port = 3000;

io.on('connect', socket => {
  console.log('connect')
  socket.emit('now', {
    message: 'zeit'
  })
  socket.on('disconnect', () => {
    console.log('lox')
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


