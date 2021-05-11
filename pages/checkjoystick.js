import React, { useEffect, useState } from 'react'

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
          width: width / 2 + '%' ,
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
  const [joystick, setJoystick] = useState(false)
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
    // console.log('handler')
    const devices = Object.values(navigator.getGamepads())
    if (devices.filter(x => x) > 0) {
      alert('more that 1 device')
      return
    }
    //todo Сделать выбор устройства для мобил
    // alert([devices[0], devices[1], devices[2], devices[3]])
    const device = devices.filter(x => x)[1]
    if (!device)
      return
    // setJoystick({

    // })
    setJoystick({
      axesLeft: {
        x: device.axes[0] * 100,
        y: device.axes[1] * 100
      },
      axesRight: {
        x: device.axes[2],
        y: device.axes[3]
      },
      buttonCross: device.buttons[0].pressed,
      buttonCircle: device.buttons[1].pressed,
      buttonSquare: device.buttons[2].pressed,
      buttonTriangle: device.buttons[3].pressed,

    })
    //  square triangle circle
  }

  useEffect(() => {
    window.addEventListener('keypress', x => alert(x))
    window.addEventListener('gamepadconnected', joystickConnect)
    window.addEventListener('gamepaddisconnected', joystickDisconnect)
    if (switcher) {
      const joystickInterval = window.setInterval(joystickHandler, 25)
    }

    return (() => {
      window.removeEventListener('gamepadconnected', joystickConnect)
      window.removeEventListener('gamepaddisconnected', joystickDisconnect)
      // window.clearInterval(joystickInterval)
    })
  }, [switcher])

  return <div>
    <pre>
      {connect.toString()}
      {JSON.stringify(joystick, '', '\t')}
    </pre>
    <ProgressBar width={(joystick) ? joystick.axesLeft.x : 0}/>
    <ProgressBar width={(joystick) ? joystick.axesLeft.y : 0}/>

    <button onClick={setSwitcher.bind(null, !switcher)}>{(switcher) ? 'disconnect' : 'connect'} </button>
  </div>
}

export default CheckJoystick
