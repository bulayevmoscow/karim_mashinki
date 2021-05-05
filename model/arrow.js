import image from './arrow/arrow.svg'
import styles from './arrow/arrow.module.sass'
import pushData from '../controller/pushData'
import { useEffect } from 'react'

const Arrows = (props) => {
  const [position, setPosition] = props.data
  // const data = Object.assign(position)
  const handlerChangePosition = (updatedValues) => {
    setPosition(prevState => {
        return { ...prevState, ...updatedValues }
      }
    )
  }
  setPosition({ ...position })
  const keyDownHandler = (event) => {

    switch (event.key) {
      case 'ArrowLeft':
        // (position.top !== 100) ? handlerChangePosition({top: 100}) : 0
        // console.log('event', position.top),
        // (position.top !== 100) ? setPosition({top: 100}) : 0
        break
      case 'ArrowRight':
        // data.right = 100
        break
      case 'ArrowUp':
        // data.top = 100
        break
      case 'ArrowDown':
        // data.bottom = 100
        break
      default:
        break
    }
  }
  // const keyUpHandler = (event) => {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //       data.left = 0
  //       break
  //     case 'ArrowRight':
  //       data.right = 0
  //       break
  //     case 'ArrowUp':
  //       data.top = 0
  //       break
  //     case 'ArrowDown':
  //       data.bottom = 0
  //       break
  //     default:
  //       break
  //   }
  // }

  // const mouseHandler = (direction, up) => {
  //   console.log('before ', data)
  //   switch (direction) {
  //     case 'top':
  //       data.top = (up) ? 100 : 0
  //       break
  //     case 'bottom':
  //       data.bottom = (up) ? 100 : 0
  //       break
  //     case 'left':
  //       data.left = (up) ? 100 : 0
  //       break
  //     case 'right':
  //       data.right = (up) ? 100 : 0
  //       break
  //     default:
  //       break
  //   }
  //   console.log('after ', data)
  //
  // }

  const sendData = (data) => {
    console.log('send data', position)
    // setPosition(data.top);
    // pushData('/api/data', JSON.stringify(data), null)
    // props.setData(data.top.toString())
  }

  useEffect(() => {
    console.log(1)
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)
    const interval = window.setInterval(sendData.bind(null, position), 1000)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      // document.removeEventListener('keyup', keyUpHandler)
      window.clearInterval(interval)
    }
  }, [])
  const keyUpHandler = () => {}
  const mouseHandler = () => {}
  return (
    <div className={styles.arrowContainer}>
      <img className={styles.top}
           onMouseDown={mouseHandler.bind(null, 'top', true)}
           onMouseUp={mouseHandler.bind(null, 'top', false)}
           onMouseLeave={mouseHandler.bind(null, 'top', false)}
           src={image} alt=""/>
      <img className={styles.left}
           onMouseDown={mouseHandler.bind(null, 'left', true)}
           onMouseUp={mouseHandler.bind(null, 'left', false)}
           onMouseLeave={mouseHandler.bind(null, 'left', false)}
           src={image} alt=""
      />
      <img className={styles.bottom}
           onMouseDown={mouseHandler.bind(null, 'bottom', true)}
           onMouseUp={mouseHandler.bind(null, 'bottom', false)}
           onMouseLeave={mouseHandler.bind(null, 'bottom', false)}
           src={image} alt=""/>
      <img className={styles.right}
           onMouseDown={mouseHandler.bind(null, 'right', true)}
           onMouseUp={mouseHandler.bind(null, 'right', false)}
           onMouseLeave={mouseHandler.bind(null, 'right', false)}
           src={image} alt="2"/>
    </div>
  )
}

export default Arrows
