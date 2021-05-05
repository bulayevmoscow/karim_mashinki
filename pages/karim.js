import { useState } from 'react'
import Joystick from 'model/joystick'


const request = (body) => {
  console.log('body ' + body)
  return {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: body
  }
}

const main = () => {

  const pushData = async (text) => {
    const data = await new Promise((resolve, reject) => {
      fetch('/api/data', request(text))
        .then(res => (res.ok) ? resolve() : reject())
        .catch(() => reject())
    })
      .then(() => true)
      .catch(() => false)
    setTransfer(data)
  }

  const onChangeText = (event) => {
    const data = event.target.value
    setData(data)
    pushData(data)
  }

  const [data, setData] = useState('')
  const [transfer, setTransfer] = useState(true)

  return (
    <div>
      {/*<p>{transfer.toString()}</p>*/}
      <div style={{height: '400px'}}></div>
      {/*<input type="text" value={data} onChange={onChangeText}/>*/}
      {/*<button onClick={pushData.bind(null, data)}> 123</button>*/}
      <Joystick />
    </div>
  )
}

export default main
