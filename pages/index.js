import Menu from '../model/menu/menu'
import Joystick from '../model/joystick'
import Keyboard from '../model/keyboard'
import { useEffect, useState } from 'react'
import checkMobileDevice from '../controller/checkMobileDevice'
import { io } from 'socket.io-client'
import { event } from 'next/dist/build/output/log'
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

const IndexPage = () => {

  const [index, setIndex] = useState({
    page: 'index',
    device: 'gamepad',
    position: 'h',
    isMobile: null,
    server: false
  })

  const indexHandler = (value, key) => {
    setIndex(prev => {
      return {
        ...prev, [value]: key
      }
    })
  }

  const [data, setData] = useState(null);
  const dataHandler = (value, key) => {
    setIndex(prev => {
      return {
        ...prev, [value]: key
      }
    })
  }

  const switchDeviceHandler = device => indexHandler('device', device)

  // Socket
  useEffect(() => {
    // TODO Сделать очередь после снова
    const socket = io()
    console.log('effect')
    socket.on('connect', indexHandler.bind(null, 'server', true))
    socket.on('disconnect', indexHandler.bind(null, 'server', false))
  }, [])
  //checkMobile and checkPosition
  useEffect(() => {
    const isMobile = checkMobileDevice()
    indexHandler('isMobile', isMobile)
    if (!isMobile)
      return
    const orientationChangeHandler = event => indexHandler('position', (event.target.screen.orientation.angle === 90 || event.target.screen.orientation.angle === 270) ? 'h' : 'v')
    addEventListener('orientationchange', orientationChangeHandler)
    return () => {
      removeEventListener('orientationchange', orientationChangeHandler)
    }

  }, [])

  return (
    <div className={style.main}>
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
      {(index.isMobile && index.position === 'v') ? <AlertRotatePhone class={style.overlay}/> : ''}
      <div>
        {(index.device === 'gamepad') ? <Joystick effect={[data, setData]}/> : ''}
        {(index.device === 'keyboard') ? <Keyboard effect={[data, dataHandler]}/> : ''}
      </div>
    </div>

  )
}

export default IndexPage
