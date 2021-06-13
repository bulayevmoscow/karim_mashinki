import Menu from '../model/menu/menu'
import Joystick from '../model/joystick'
import Keyboard from '../model/keyboard'
import { useEffect, useState } from 'react'
import checkMobileDevice from '../controller/checkMobileDevice'
import { io } from 'socket.io-client'
import style from '../pagesStyles/index.module.sass'
import AlertRotatePhone from '../model/alertRotatePhone'

const useSocket = (url) => {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const socketIo = io(url)
    setSocket(socketIo)
    return () => socketIo.disconnect()
  }, [])
  return socket
}

const socket = io()

const IndexPage = () => {
  // index data for system info
  const [index, setIndex] = useState({
    page: 'index',
    device: 'keyboard',
    gamepad: false,
    position: 'h',
    isMobile: null,
    server: false,
  })
  const indexHandler = (value, key) => {
    setIndex(prev => {
      return {
        ...prev, [value]: key
      }
    })
  }

  // const [socket, setSocket] = useState();

  const [data, setData] = useState(null)
  const dataHandler = (value, key) => {
    setIndex(prev => {
      return {
        ...prev, [value]: key
      }
    })
  }

  const switchDeviceHandler = device => indexHandler('device', device)

  // useEffect(() => {
  //   socket.emit('data', JSON.stringify(index))
  // }, [index])

  // Data dependence to Socket
  useEffect(() => {
    if (!!data && index.server) {
      socket.emit('data', JSON.stringify(data))
    }

  }, [data])
  // Connect and Disconnect Socket handlers
  useEffect(() => {
    socket.on('connect', () => {
      dataHandler('server', true)
    })
    socket.on('disconnect', () => {
      dataHandler('server', false)
    })
  }, [])
  //checkMobile and checkPosition
  useEffect(() => {
    const isMobile = checkMobileDevice()
    indexHandler('isMobile', isMobile)
    indexHandler('pos', isMobile)
    if (!isMobile)
      return
    const orientationChangeHandler = event => {
      const position = (event.target.screen.orientation.angle === 90 || event.target.screen.orientation.angle === 270) ? 'h' : 'v'
      indexHandler('position', position)
    }
    addEventListener('orientationchange', orientationChangeHandler)
    return () => {
      removeEventListener('orientationchange', orientationChangeHandler)
    }

  }, [])
  //checkGamepad
  useEffect(() => {
    addEventListener('gamepadconnected', () => dataHandler('gamepad', true))
    addEventListener('gamepadconnected', () => console.log('COnnect'))
    addEventListener('gamepaddisconnected', dataHandler.bind(null, 'gamepad', false))
  }, [])

  // useEffect(() => {
  //   if (index.position === 'v') {
  //     console.log('trying to fullscreen')
  //     document.documentElement.requestFullscreen().then(r => console.log(r)).catch(err => console.log('err', err))
  //   }
  // }, [])

  // API
  //https://developers.google.com/web/fundamentals/native-hardware/fullscreen
  // How to API FullSreen
  // https://javascript.plainenglish.io/user-gesture-restricted-web-apis-d794454453f7



  return (
    <div className={style.main}>
      <pre>{JSON.stringify(index, '\t')}</pre>
      <pre>{JSON.stringify(data, '\t')}</pre>
      <Menu
        device={index.device}
        switchDeviceHandler={switchDeviceHandler}
        icons={{
          gamepad: index.gamepad,
          keyboard: true,
          server: !!index.server,
          connect: true
        }}
      />
      {(index.isMobile && index.position === 'v') ? <AlertRotatePhone class={style.overlay}/> : ''}
      <div>
        {(index.device === 'gamepad') ? <Joystick effect={[data, setData]} gamepad={index.gamepad}/> : <Keyboard effect={[data, dataHandler, setData]}/>}
      </div>
    </div>

  )
}

export default IndexPage
