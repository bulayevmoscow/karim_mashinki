import { useState } from 'react'

const request = (body) => {
  console.log(body)
  return {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: body
  }
}

const main = () => {

  const pushData = (text) => {
    new Promise((resolve, reject) => {
      fetch('/2api/data', request(text))
        .then(() => resolve(true))
        .catch(() => reject(false))
    })
  }

  const onChangeText = (event) => {
    setData(event.target.value)
    console.log(data)
  }

  const [data, setData] = useState('')
  const [transfer, setTransfer] = useState('')

  return (
    <div>
      <input type="text" value={data} onChange={onChangeText}/>
      <button onClick={pushData.bind(null, data)}> 123</button>
    </div>
  )
}

export default main
