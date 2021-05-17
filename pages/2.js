import { useState, useEffect } from 'react'
// import Joystick from 'model/joystick'
import Arrows from '../model/arrow'
import DebugPanel from '../model/debugPanel'
import styles from '../pagesStyles/karim.module.sass'
import { io } from 'socket.io-client'

function useSocket (url) {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const socketIo = io(url)
    setSocket(socketIo)
    return () => socketIo.disconnect()
  }, [])
  return socket
}

const main = () => {
  // const [transfer, setTransfer] = useState(false);
  let socket = useSocket()
  const [position, setPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    rotateToLeft: 0,
    rotateToRight: 0,
    getUp: 0,
    getDown: 0
  })
  // useEffect()

  useEffect(() => {
    if (!socket)
      return
    console.log(socket)
    socket.on('now', data => console.log(data))
    socket.emit('data', 'keku1')
    // TODO сделать евент для отключения
    socket.on('disconnect', () => {console.log('Server was disconnected')})
  }, [socket])

  useEffect(() => {

    if (!socket){
      console.log('error connect')
      return
    }
    console.log(1, socket.connected)
    socket.emit('data', JSON.stringify(position))
  }, [position])

  useEffect(() => {
    // const interval = setInterval(() => {console.log()})
  }, [])


  const positionHandler = (dir, press) => {
    // TODO Сделать обработчик чтобы снизить нагрузку на CPU
    setPosition(prev => {
      return {
        ...prev, ...{ [dir]: (press) ? 100 : 0 }
      }
    })

  }

  // useEffect(() => {
  //   if (!transfer)
  //     return
  //   socketIo = io()
  //   socketIo.on('connect', () => {})
  //   socketIo.emit('data', { data: 'some data' });
  //   // socketIo.on('now', data => console.log(data))
  //   // console.log(socketIo)
  //   return () => socketIo.disconnect()
  // }, [transfer])

  // useEffect(() => {
  //   console.log(socketIo)
  // }, [])

  return (
    <div className={styles.main}>
      <Arrows position={{ position, positionHandler }} type={'arrowsTBRL'}/>
      <Arrows position={{ position, positionHandler }} type={'arrowsXY'}/>
      {/*<DebugPanel show={{ showDebug, setShowDebug }} json={position} transfer={transfer} switchConnect={setTransfer}/>*/}
      {/*<button onClick={setTransfer.bind(null, !transfer)}>{transfer.toString()}</button>*/}
    </div>
  )
}

export default main
