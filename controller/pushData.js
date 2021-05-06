const request = (body) => {
  // console.log('body ' + body)
  return {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }
}

const pushData = async (data, setter) => {
    const result = await new Promise((resolve, reject) =>
      fetch('/api/data', request(data))
      // fetch(url, request(data))
        .then(res => (res.ok) ? resolve() : reject())
        .catch(() => reject())
    ).then(() => true).catch(() => false)
    // setter(result)
}

export default pushData
