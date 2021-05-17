import { useState, useEffect } from 'react'
// import Joystick from 'model/joystick'
import Arrows from '../model/arrow'
import DebugPanel from '../model/debugPanel'
import styles from '../pagesStyles/karim.module.sass'
import { io } from 'socket.io-client'

const main = () => {
  const [status, setStatus] = useState({});
  const [socket, setSocket] = useState(false);
  const [showDebug, setShowDebug] = useState(true)
  const [transfer, setTransfer] = useState(false)

  let [position, setPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    rotateToLeft: 0,
    rotateToRight: 0,
    getUp: 0,
    getDown: 0
  })

  const positionHandler = (dir, press) => {
    // TODO Сделать обработчик чтобы снизить нагрузку на CPU
    setPosition(prev => {
      return {
        ...prev, ...{ [dir]: (press) ? 100 : 0 }
      }
    })

  }

  useEffect(() => {
      const socketIo = io()
      socketIo.on('connect', () => {})
      socketIo.on('now', data => console.log(data))
  }, [])

  useEffect(() => {
    if (!transfer) {
      return
    }
    // const sendDataHandler = pushData.bind(null, position, setStatus);
    // sendDataHandler()
    // const interval = window.setInterval(sendDataHandler, (status) ? 150 : 300)
    // console.log(position)
    return () => {
      // sendDataHandler()
      // window.clearInterval(interval)
    }
  }, [position, transfer])

  return (
    <div className={styles.main}>
      <Arrows position={{ position, positionHandler }} type={'arrowsTBRL'}/>
      <Arrows position={{ position, positionHandler }} type={'arrowsXY'}/>
      <DebugPanel show={{ showDebug, setShowDebug }} json={position} transfer={transfer} switchConnect={setTransfer}
                  />
    </div>
  )
}

export default main
