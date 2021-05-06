import image from './arrow/arrow.svg'
import styles from './arrow/arrow.module.sass'
import pushData from '../controller/pushData'
import { useEffect } from 'react'

const sendData = (data) => {

  // pushData('/api/data', JSON.stringify(data), null)

}

const Arrows = (props) => {
  const { position, positionHandler } = props.position

  const keyDownHandler = (event) =>{
    console.log(event);
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    // document.addEventListener('keyup', keyUpHandler)
    const interval = window.setInterval(console.log, 1000)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      // document.removeEventListener('keyup', keyUpHandler)
      window.clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.arrowContainer}>
      <img className={styles.top}
           onMouseDown={positionHandler.bind(null, 'top', true)}
           onMouseUp={positionHandler.bind(null, 'top', false)}
           onMouseLeave={positionHandler.bind(null, 'top', false)}
           src={image} alt=""/>


      {/*<img className={styles.left}*/}
      {/*     onMouseDown={mouseHandler.bind(null, 'left', true)}*/}
      {/*     onMouseUp={mouseHandler.bind(null, 'left', false)}*/}
      {/*     onMouseLeave={mouseHandler.bind(null, 'left', false)}*/}
      {/*     src={image} alt=""*/}
      {/*/>*/}
      {/*<img className={styles.bottom}*/}
      {/*     onMouseDown={mouseHandler.bind(null, 'bottom', true)}*/}
      {/*     onMouseUp={mouseHandler.bind(null, 'bottom', false)}*/}
      {/*     onMouseLeave={mouseHandler.bind(null, 'bottom', false)}*/}
      {/*     src={image} alt=""/>*/}
      {/*<img className={styles.right}*/}
      {/*     onMouseDown={mouseHandler.bind(null, 'right', true)}*/}
      {/*     onMouseUp={mouseHandler.bind(null, 'right', false)}*/}
      {/*     onMouseLeave={mouseHandler.bind(null, 'right', false)}*/}
      {/*     src={image} alt="2"/>*/}
    </div>
  )
}

export default Arrows
