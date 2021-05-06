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
  const [transfer, setTransfer] = useState(5)

  let [position, setPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  })

  const positionHandler = (dir, press) => {
    console.log(dir, press)

    setPosition(prev => {
      return {
        ...prev, ...{ [dir]: (press) ? 100 : 0 }
      }
    })

  }
  const logger = () => console.log(position)
  // window.setInterval(logger, 1000)
  useEffect(() => {
    const interval = window.setInterval(pushData.bind(null, position), 100)
    pushData.call(null, position)
    // window.clearInterval(interval)
    console.log(position)
    return () => {
    }
  }, [position])
  // setInterval(pushData.bind(null, position), 1000)
  useEffect(() => {
      const interval = setInterval(() => pushData(position), 1000
      )}, []
  )

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
      <button onClick={() => {alert(JSON.stringify(position))}}>1234</button>
      <Arrows position={{ position, positionHandler }}/>
    </div>
  )
}

export default main
