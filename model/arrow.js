import image from './arrow/arrow.svg'
import styles from './arrow/arrow.module.sass'
import pushData from '../controller/pushData'
import { useEffect } from 'react'

const sendData = (data) => {

  // pushData('/api/data', JSON.stringify(data), null)

}

// ArrowLeft
// ArrowDown
// ArrowRight
// ArrowUp

const Arrows = (props) => {
  const { position, positionHandler } = props.position
  const keyIsPressed = {
    up: false,
    down: false,
    left: false,
    right: false,
  }

  const keyDownHandler = ({ code, type }) => {
    const isPressed = type === 'keydown'
    switch (code) {
      case 'ArrowUp' :
        positionHandler.call(null, 'top', isPressed)
        break
      case 'ArrowDown' :
        positionHandler.call(null, 'bottom', isPressed)
        break
      case 'ArrowLeft' :
        positionHandler.call(null, 'left', isPressed)
        break
      case 'ArrowRight' :
        positionHandler.call(null, 'right', isPressed)
        break
      default:
        break
    }
    console.log(keyIsPressed)
    // console.log('data = ', data)
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyDownHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('keyup', keyDownHandler)
    }
  }, [])

  return (
    <div className={styles.arrowContainer}>
      <div className={styles.top}
           onMouseDown={positionHandler.bind(null, 'top', true)}
           onMouseUp={positionHandler.bind(null, 'top', false)}
           onMouseLeave={positionHandler.bind(null, 'top', false)}
           data-value={position.top}>
        <img src={image}/>
      </div>
      <div className={styles.left}
           onMouseDown={positionHandler.bind(null, 'left', true)}
           onMouseUp={positionHandler.bind(null, 'left', false)}
           onMouseLeave={positionHandler.bind(null, 'left', false)}
           data-value={position.left}>
        <img src={image} alt=""/>
      </div>
      <div className={styles.bottom}
           onMouseDown={positionHandler.bind(null, 'bottom', true)}
           onMouseUp={positionHandler.bind(null, 'bottom', false)}
           onMouseLeave={positionHandler.bind(null, 'bottom', false)}
           data-value={position.bottom}>
        <img src={image} alt=""/>
      </div>
      <div className={styles.right}
           onMouseDown={positionHandler.bind(null, 'right', true)}
           onMouseUp={positionHandler.bind(null, 'right', false)}
           onMouseLeave={positionHandler.bind(null, 'right', false)}
           data-value={position.right}>
        <img src={image} alt=""/>
      </div>

    </div>
  )
}

export default Arrows
