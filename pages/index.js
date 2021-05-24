import Menu from '../model/menu/menu'
import { useEffect, useState } from 'react'
import checkMobileDevice from '../controller/checkMobileDevice'
import { io } from 'socket.io-client'

const useSocket = (url) => {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const socketIo = io(url)
    setSocket(socketIo)
    return () => socketIo.disconnect()
  }, [])
  return socket
}

const IndexPage = () => {


  const [index, setIndex] = useState({
    page: 'index',
    device: 'gamepad',
    server: false
  })
  const indexHandler = (value, key) => {
    setIndex(prev => {
      return {
        ...prev, [value]: key
      }
    })
  }

  const switchDeviceHandler = (device) => {
    indexHandler('device', device);
  }




  // Socket
  useEffect(() => {
    // TODO Сделать очередь после снова
    const socket = io()
    console.log('effect')
    socket.on('connect', indexHandler.bind(null, 'server', true))
    socket.on('disconnect', indexHandler.bind(null, 'server', false))
  }, [])
  //checkMobile
  useEffect(() => {
    indexHandler('isMobile', checkMobileDevice())
  }, [])




  return (
    <div>
      <pre>{JSON.stringify(index, '\t')}</pre>
      <Menu
        device={index.device}
        switchDeviceHandler={switchDeviceHandler}
        icons={{
          gamepad: false,
          keyboard: true,
          server: !!index.server,
          connect: true
        }}
      />
    </div>

  )
}

export default IndexPage
