import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'



const Check = () => {

  const [connected, setConnected] = useState({})
  const [axes, setAxes] = useState([0, 0, 0, 0])
  let event
  const connectHandler = (event) => {
    console.log('A gamepad connected:')
    console.log(event.gamepad)
    const gamepads = navigator.getGamepads()
    console.log(1, event.gamepad)
    setConnected(event.gamepad)
    window.setInterval(() => {setAxes(event.gamepad.axes)}, 100)
  }
  const disconnectHandler = (event) => {
    const gamepads = navigator.getGamepads()
    console.log('A gamepad disconnected:')
    console.log(event.gamepad)
    console.log(gamepads)
  }

  useEffect(() => {
    window.addEventListener('gamepadconnected', connectHandler)
    window.addEventListener('gamepaddisconnected', disconnectHandler)
    return () => {
      window.removeEventListener('gamepadconnected', connectHandler)
      window.removeEventListener('gamepaddisconnected', connectHandler)
    }

  }, [])

  return (<div>
    <p>{axes.join()}</p>
    {JSON.stringify(connected).toString()}
  </div>)
}

export default Check
