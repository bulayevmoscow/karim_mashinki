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

  const pushData = async (text) => {
    const data = await new Promise((resolve, reject) => {
      fetch('http://123/api/data', request(text))
        .then((res) => {
          if (!res.ok) {
            setTransfer('error')
          } else {
            setTransfer('true')
            resolve(true)
          }
        })
        .catch(() => reject(false))
    }).
    console.log(data)
  }

  const onChangeText = (event) => {
    setData(event.target.value)
    console.log(data)
  }

  const [data, setData] = useState('')
  const [transfer, setTransfer] = useState(true)

  return (
    <div>
      <p>{transfer}</p>
      <input type="text" value={data} onChange={onChangeText}/>
      <button onClick={pushData.bind(null, data)}> 123</button>
    </div>
  )
}

export default main
