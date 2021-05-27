import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import checkMobileDevice from '../controller/checkMobileDevice'

import JoystickModelSVG from './model_joystick'

class ProgressBar extends React.Component {
  render () {
    const width = Math.abs(this.props.width)
    return (
      <div style={{
        transform: (this.props.width > 0) ? '' : 'rotate(180deg)'
      }
      }>
        <div style={{
          height: 100,
          width: width / 2 + '%',
          marginLeft: '50%',
          transform: 'rotate(180deg)',
          background: (this.props.width > 0) ? 'green' : 'red'
        }}/>
      </div>

    )
  }
}

const CheckJoystick = (predicate, thisArg) => {
  const [statusConnect, setStatusConnect] = useState(false)
  const [statusConnectToServer, setStatusConnectToServer] = useState(false)
  const [joystick, setJoystick] = useState({})
  const [switcher, setSwitcher] = useState(true)

  // const joystickConnect = (ev) => {
  //   setStatusConnect(true)
  //   console.log(navigator.getGamepads())
  //   console.log(ev)
  // }
  //
  // const joystickDisconnect = (ev) => {
  //   setStatusConnect(false)
  //   console.log(ev)
  // }

  const joystickHandler = () => {
    // let JoystickNewData = {
    //   type: 'joystick',
    //   axesLeftX: (device.axes[0] * 20) << 0,
    {/*  axesLeftY: (device.axes[1] * 20) << 0,*/}

    {/*  axesRightX: (device.axes[2] * 20) << 0,*/}
    {/*  axesRightY: (device.axes[3] * 20) << 0,*/}

    {/*  buttonCross: device.buttons[0].pressed,*/}
    //   buttonCircle: device.buttons[1].pressed,
    //   buttonSquare: device.buttons[2].pressed,
    //   buttonTriangle: device.buttons[3].pressed,
    //
    //   L1: device.buttons[4].pressed,
    //   L2: 20 * device.buttons[6].value << 0,
    //
    //   R1: device.buttons[5].pressed,
    //   R2: 20 * device.buttons[7].value << 0,
    //
    //   Share: device.buttons[8].pressed,
    {/*  Options: device.buttons[9].pressed,*/}

    {/*  JoystickLeftPressed: device.buttons[10].pressed,*/}
    {/*  JoystickRightPressed: device.buttons[11].pressed,*/}
    //
    //   ArrowTop: device.buttons[12].pressed,
    //   ArrowRight: device.buttons[15].pressed,
    //   ArrowDown: device.buttons[13].pressed,
    //   ArrowLeft: device.buttons[14].pressed,
    //   LogoButton: device.buttons[16].pressed,
    //   TouchPadPressed: device.buttons[17].pressed
    // }

  }

  return <div>
    <pre>
      {JSON.stringify(joystick, '', '\t')}
    </pre>
    <JoystickModelSVG connect={statusConnect} status={joystick} serverStatus={statusConnectToServer}/>
  </div>
}

export default CheckJoystick
