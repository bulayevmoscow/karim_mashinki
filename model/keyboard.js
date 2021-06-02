import { useEffect, useState } from 'react'
// import Joystick from 'model/joystick'
import Arrows from '../model/model_arrow'
import styles from '../pagesStyles/karim.module.sass'

const Keyboard = ({ effect: [data, dataHandler, setData] }) => {

  const [position, setPosition] = useState({
    type: 'keyboard',
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
        ...prev, ...{ [dir]: (press) ? 20 : 0 }
      }
    })
  }
  useEffect(() => {
    setData(position)
  }, [position])

  return (
    <div className={styles.main}>

      {/*TODO изменить обработчик*/}
      <Arrows position={{ position, positionHandler }} type={'arrowsTBRL'}/>
      <Arrows position={{ position, positionHandler }} type={'arrowsXY'}/>
      {/*<DebugPanel show={{ showDebug, setShowDebug }} json={position} transfer={transfer} switchConnect={setTransfer}/>*/}
      {/*<button onClick={setTransfer.bind(null, !transfer)}>{transfer.toString()}</button>*/}
    </div>
  )
}

export default Keyboard
