import { useState } from 'react'
import ellipse from './joystick/co.svg'
import circle from './joystick/el.svg'
import styles from './joystick.module.sass'

const Event = (e) => {
  console.log(1, e)
  console.log(e.target.offsetParent.id)
}

const styleCircle = {
  left: '50%',
  top: '50%'
}




const Joystick = () => {
  let watcher

  return (
    <div className={styles.joystick}>
      <img src={ellipse} width="100%" className={styles.ellipse} alt=""/>
      <img src={circle} className={styles.circle}
           onMouseDown={e => watcher = window.setInterval(Event.bind(null, e), 200)}
           onMouseUp={() => window.clearInterval(watcher)}
           onMouseLeave={() => window.clearInterval(watcher)}
           alt=""
           style={styleCircle}
      />
    </div>
  )
}

export default Joystick
