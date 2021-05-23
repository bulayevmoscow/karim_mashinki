import Menu from '../model/menu/menu'
import { useEffect, useState } from 'react'
import checkMobileDevice from '../controller/checkMobileDevice'

const IndexPage = () => {
  const [index, setIndex] = useState({ page: 'index'})
  const indexHandler = (value, key) => {
    setIndex(prev => {
      return {
        ...prev, [value]: key
      }
    })
  }

  useEffect( () => {
    indexHandler('isMobile', checkMobileDevice())
  }, [])

  return (
    <div>
      <pre>{JSON.stringify(index, '\t')}</pre>
      <Menu/>
    </div>

  )
}

export default IndexPage
