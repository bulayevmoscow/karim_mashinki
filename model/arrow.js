import image from '../public/arrow.svg'
import styles from './arrow/arrow.module.sass'
import pushData from '../controller/pushData'
import styleBackgroundImage from '../public/arrow.svg'

import { useEffect } from 'react'

const Arrows = (props) => {
  //arrowsTBRL
  //arrowsXY
  const Arrow = ({ type }) => {
    return (
      <div className={styles[type]}
           onTouchStart={positionHandler.bind(null, type, true)}
           onTouchEnd={positionHandler.bind(null, type, false)}
           onMouseDown={positionHandler.bind(null, type, true)}
           onMouseUp={positionHandler.bind(null, type, false)}
           onMouseLeave={positionHandler.bind(null, type, false)}
           data-value={position[type]}>
      </div>
    )
  }

  const { position, positionHandler } = props.position

  const keyDownHandler = ({ code, type, repeat }) => {
    const isPressed = type === 'keydown'
    if (repeat) {
      return
    }
    if (props.type === 'arrowsTBRL') {
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
    } else if (props.type === 'arrowsXY') {
      switch (code) {
        case 'KeyW' :
          positionHandler.call(null, 'getUp', isPressed)
          break
        case 'KeyA' :
          positionHandler.call(null, 'rotateToLeft', isPressed)
          break
        case 'KeyS' :
          positionHandler.call(null, 'getDown', isPressed)
          break
        case 'KeyD' :
          positionHandler.call(null, 'rotateToRight', isPressed)
          break
        default:
          break
      }
    }

    console.log(code, type)
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyDownHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('keyup', keyDownHandler)
    }
  }, [])
  if (props.type === 'arrowsTBRL') {
    return (
      <div className={styles.arrowContainer}>
        <Arrow type={'top'}/>
        <Arrow type={'left'}/>
        <Arrow type={'bottom'}/>
        <Arrow type={'right'}/>
      </div>
    )
  }

  if (props.type === 'arrowsXY') {
    return (
      <div className={styles.arrowContainer}>
        <Arrow type={'getUp'}/>
        <Arrow type={'rotateToLeft'}/>
        <Arrow type={'getDown'}/>
        <Arrow type={'rotateToRight'}/>
      </div>)
  }

  return (
    <div>Unset</div>
  )
}

export default Arrows
