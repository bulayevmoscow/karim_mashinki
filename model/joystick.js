import React, { useEffect, useState } from 'react'

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

const joystickHandler = (device) => {
  // console.log(device)
  return {
    type: 'joystick',
    axesLeftX: (device.axes[0] * 20) << 0,
    axesLeftY: (device.axes[1] * 20) << 0,

    axesRightX: (device.axes[2] * 20) << 0,
    axesRightY: (device.axes[3] * 20) << 0,

    buttonCross: device.buttons[0].pressed,
    buttonCircle: device.buttons[1].pressed,
    buttonSquare: device.buttons[2].pressed,
    buttonTriangle: device.buttons[3].pressed,

    L1: device.buttons[4].pressed,
    L2: 20 * device.buttons[6].value << 0,

    R1: device.buttons[5].pressed,
    R2: 20 * device.buttons[7].value << 0,

    Share: device.buttons[8].pressed,
    Options: device.buttons[9].pressed,

    JoystickLeftPressed: device.buttons[10].pressed,
    JoystickRightPressed: device.buttons[11].pressed,

    ArrowTop: device.buttons[12].pressed,
    ArrowRight: device.buttons[15].pressed,
    ArrowDown: device.buttons[13].pressed,
    ArrowLeft: device.buttons[14].pressed,
    LogoButton: device.buttons[16].pressed,
    TouchPadPressed: device.buttons[17].pressed
  }

}

const choiceDevice = (device) => (!!device) && device[0] || device[1] || device[2] || device[3]

const CheckJoystick = ({ effect: { data, dataHandler } }) => {

  const [joystick, setJoystick] = useState(false)
  const [joystickStatus, setJoystickStatus] = useState({})

  // CheckConnect
  useEffect(() => {
    const gamepadConnectHandler = (connect) => {
      (!!connect) ? setJoystick(true) : setJoystick(false)
    }
    addEventListener('gamepadconnected', gamepadConnectHandler.bind(null, true))
    addEventListener('gamepaddisconnected', gamepadConnectHandler.bind(null, false))
  }, [])

  let deviceData = {}
  let event = {}

  useEffect(() => {
    console.log('effect', joystick)
    if (!joystick) {
      event ? clearInterval(event) : ''
      setJoystickStatus({ all: false })
      return
    }
    deviceData = joystickHandler(navigator.getGamepads()[0])
    event = setInterval(() => {
      if (!joystick)
        clearInterval(event)
      const newDeviceData = joystickHandler(navigator.getGamepads()[0])
      if (JSON.stringify(deviceData) !== JSON.stringify(newDeviceData)) {
        // console.log('change')
        deviceData = newDeviceData
        setJoystickStatus(deviceData)
      }
    }, 13)
    return () => {
      clearInterval(event)
    }
  }, [joystick])

  // console.log('gamepad', gamepad)
  return <div>
    <pre>
      {joystick.toString()}
      <br/>
      {JSON.stringify(joystickStatus, '\t', ' ')}
    </pre>
    <JoystickModelSVG status={joystickStatus}/>
    {/*<JoystickModelSVG status={{}}/>*/}
  </div>
}

export default CheckJoystick
