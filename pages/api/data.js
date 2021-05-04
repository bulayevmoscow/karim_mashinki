import write from 'controller/write'

const data = (req, res) => {
  res.status(200).json({ True: 'yes' })
  console.log(req.method);
  // console.log(req.query)
  // write(req.query.keku)
  console.log(JSON.stringify(req.body))
  write(JSON.stringify(req.body));

}

export default data
