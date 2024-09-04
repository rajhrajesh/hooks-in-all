import React, { useContext } from 'react'
import { UserContext } from '../../App'


const Hemanh = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>Hemanh the castle ford new indea! {user}</h1>
    </div>
  )
}

export default Hemanh