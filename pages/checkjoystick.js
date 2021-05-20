import React, { useEffect, useState } from 'react'

import JoystickModelSVG from '../model/js'

class ProgressBar extends React.Component {
  render () {
    const width = Math.abs(this.props.width)
    // const color
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

  const [connect, setConnect] = useState(false)
  const [joystick, setJoystick] = useState({
    connect: true,

    //AxesLeft
    axesLeftX: 0,
    axesLeftY: 0,

    //AxesRight
    axesRightX: 100,
    axesRightY: 0,

    // RightButton
    buttonTriangle: false,
    buttonCircle: true,
    buttonCross: true,
    buttonSquare: false,

    // // LeftButton
    // arrowsLeft: false,
    // arrowsRight: false,
    // arrowsTop: false,
    // arrowsBottom: false,
    //
    // //serviceButton
    // serviceButtonLeft: false,
    // serviceButtonRight: false,

  })
  const [switcher, setSwitcher] = useState(true)
  const joystickConnect = (ev) => {
    setConnect('true')
    console.log(navigator.getGamepads())
    console.log(ev)
  }

  const joystickDisconnect = (ev) => {
    setConnect('false')
    console.log(ev)
  }

  const joystickHandler = () => {
    const devices = Object.values(navigator.getGamepads())
    if (devices.filter(x => x) > 0) {
      alert('more that 1 device')
      return
    }

    // TODO Сделать выбор устройства для мобил
    // https://developer.chrome.com/docs/devtools/remote-debugging/
    // const device = devices.filter(x => x)[1]
    const device = devices.filter(x => x)[0]
    if (!device)
      return
    setJoystick({
      axesLeftX: (device.axes[0] * 100) << 0 ,
      axesLeftY: (device.axes[1] * 100) << 0,

      axesRightX: (device.axes[2] * 100) << 0,
      axesRightY: (device.axes[3] * 100) << 0,

      buttonCross: device.buttons[0].pressed,
      buttonCircle: device.buttons[1].pressed,
      buttonSquare: device.buttons[2].pressed,
      buttonTriangle: device.buttons[3].pressed,

    })
  }

  useEffect(() => {
    window.addEventListener('gamepadconnected', joystickConnect)
    window.addEventListener('gamepaddisconnected', joystickDisconnect)
    if (switcher) {
      const joystickInterval = window.setInterval(joystickHandler, 25)
    }
    return (() => {
      window.removeEventListener('gamepadconnected', joystickConnect)
      window.removeEventListener('gamepaddisconnected', joystickDisconnect)
    })
  }, [switcher])

  const [tconnect, setTconnect] = useState(false)

  return <div>
    <pre>
      {connect.toString()}
      {JSON.stringify(joystick, '', '\t')}
    </pre>

    <button onClick={setTconnect.bind(null, !tconnect)}>123</button>

    <JoystickModelSVG connect={tconnect} status={joystick}/>

    <ProgressBar width={(joystick) ? joystick.axesLeftX : 0}/>
    <ProgressBar width={(joystick) ? joystick.axesLeftY : 0}/>

  </div>
}

export default CheckJoystick
