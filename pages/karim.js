import { useState, useEffect } from 'react'
// import Joystick from 'model/joystick'
import Arrows from '../model/arrow'

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

  const [position, setPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  })

  return (
    <div>
      <p>{transfer.toString()}</p>
      <div>
        <pre>{JSON.stringify(data)}</pre>
      </div>
      <Arrows setTransfer={setTransfer} setData={setData} data={[position, setPosition]}/>
    </div>
  )
}

export default main
