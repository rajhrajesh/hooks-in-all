import React, {useContext} from 'react'
import { UserContext } from '../../App'

const Ladoos = () => {
    const user = useContext(UserContext)
  return (
    <div>Ladoos {user}</div>
  )
}

export default Ladoos