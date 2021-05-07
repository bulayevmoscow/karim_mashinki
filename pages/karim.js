import { useState, useEffect } from 'react'
// import Joystick from 'model/joystick'
import Arrows from '../model/arrow'
import pushData from '../controller/pushData'

const request = (body) => {
  return {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: body
  }
}

const main = () => {
  const [data, setData] = useState('')
  const [transfer, setTransfer] = useState(false)

  let [position, setPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  })

  const positionHandler = (dir, press) => {
    setPosition(prev => {
      return {
        ...prev, ...{ [dir]: (press) ? 100 : 0 }
      }
    })

  }
  const logger = () => console.log(position)
  useEffect(() => {
    const sendDataHandler = pushData.bind(null, position, setTransfer);
    sendDataHandler()
    const interval = window.setInterval(sendDataHandler, 100)
    console.log(position)
    return () => {
      window.clearInterval(interval);
    }
  }, [position])

  return (
    <div>
      <p>{transfer.toString()}</p>
      <p>{JSON.stringify(position)}</p>
      <div>
        <pre>{JSON.stringify(data)}</pre>
      </div>
      <button onClick={positionHandler}>
        123
      </button>
      <Arrows position={{ position, positionHandler }}/>
    </div>
  )
}

export default main
