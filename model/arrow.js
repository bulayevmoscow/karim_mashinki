import image from '../public/arrow.svg'
import styles from './arrow/arrow.module.sass'
import pushData from '../controller/pushData'
import styleBackgroundImage from '../public/arrow.svg'

import { useEffect } from 'react'

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
    console.log(code, type)
  }

  //KeyE keydown
  //KeyQ keyup

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
        <div className={styles.top}
             onTouchStart={positionHandler.bind(null, 'top', true)}
             onTouchEnd={positionHandler.bind(null, 'top', false)}
             onMouseDown={positionHandler.bind(null, 'top', true)}
             onMouseUp={positionHandler.bind(null, 'top', false)}
             onMouseLeave={positionHandler.bind(null, 'top', false)}
             data-value={position.top}>
        </div>
        <div className={styles.left}
             onTouchStart={positionHandler.bind(null, 'left', true)}
             onTouchEnd={positionHandler.bind(null, 'left', false)}
             onMouseDown={positionHandler.bind(null, 'left', true)}
             onMouseUp={positionHandler.bind(null, 'left', false)}
             onMouseLeave={positionHandler.bind(null, 'left', false)}
             data-value={position.left}>
        </div>
        <div className={styles.bottom}
             onTouchStart={positionHandler.bind(null, 'bottom', true)}
             onTouchEnd={positionHandler.bind(null, 'bottom', false)}
             onMouseDown={positionHandler.bind(null, 'bottom', true)}
             onMouseUp={positionHandler.bind(null, 'bottom', false)}
             onMouseLeave={positionHandler.bind(null, 'bottom', false)}
             data-value={position.bottom}>
        </div>
        <div className={styles.right}
             onTouchStart={positionHandler.bind(null, 'right', true)}
             onTouchEnd={positionHandler.bind(null, 'right', false)}
             onMouseDown={positionHandler.bind(null, 'right', true)}
             onMouseUp={positionHandler.bind(null, 'right', false)}
             onMouseLeave={positionHandler.bind(null, 'right', false)}
             data-value={position.right}>
        </div>
      </div>
    )
  }

  if (props.type === 'arrowsXY') {
    return (
      <div className={styles.arrowContainer}>
        <div className={styles.top}
             onTouchStart={positionHandler.bind(null, 'getUp', true)}
             onTouchEnd={positionHandler.bind(null, 'getUp', false)}
             onMouseDown={positionHandler.bind(null, 'getUp', true)}
             onMouseUp={positionHandler.bind(null, 'getUp', false)}
             onMouseLeave={positionHandler.bind(null, 'getUp', false)}
             data-value={position.getUp}>
        </div>
        <div className={styles.left}
             onTouchStart={positionHandler.bind(null, 'rotateToLeft', true)}
             onTouchEnd={positionHandler.bind(null, 'rotateToLeft', false)}
             onMouseDown={positionHandler.bind(null, 'rotateToLeft', true)}
             onMouseUp={positionHandler.bind(null, 'rotateToLeft', false)}
             onMouseLeave={positionHandler.bind(null, 'rotateToLeft', false)}
             data-value={position.rotateToLeft}>
        </div>
        <div className={styles.bottom}
             onTouchStart={positionHandler.bind(null, 'getDown', true)}
             onTouchEnd={positionHandler.bind(null, 'getDown', false)}
             onMouseDown={positionHandler.bind(null, 'getDown', true)}
             onMouseUp={positionHandler.bind(null, 'getDown', false)}
             onMouseLeave={positionHandler.bind(null, 'getDown', false)}
             data-value={position.getDown}>
        </div>
        <div className={styles.right}
             onTouchStart={positionHandler.bind(null, 'rotateToRight', true)}
             onTouchEnd={positionHandler.bind(null, 'rotateToRight', false)}
             onMouseDown={positionHandler.bind(null, 'rotateToRight', true)}
             onMouseUp={positionHandler.bind(null, 'rotateToRight', false)}
             onMouseLeave={positionHandler.bind(null, 'rotateToRight', false)}
             data-value={position.rotateToRight}>
        </div>
      </div>)
  }

  return (
    <div>Unset</div>
  )
}

export default Arrows
