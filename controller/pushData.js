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
  const promise = await new Promise((resolve, reject) =>
      fetch('/api/data', request(data))
        .then(res => (res.ok) ? resolve() : reject())
        .catch(() => reject())
    ).then(() => true).catch(() => false)
  console.log(promise)
  setter(promise);
}

export default pushData
