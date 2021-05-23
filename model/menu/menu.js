import style from './menu.module.sass'

import IconGamepad from './gamepad.svg'
import React from 'react'

const Icon = ({img}) => {
  return (
    <div className={style.icon} style={{backgroundImage: `url(${img})`}}>

    </div>
  )
}

const Menu = () => {
  return (
    <div className={style.container}>
      <Icon img={IconGamepad}/>
    </div>)
}

export default Menu
