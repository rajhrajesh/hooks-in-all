import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const changeIncrement = () =>{
    setCount(count + 1)
  }
  return (
    <div className='container'>
      <h1>Love in UseState in new on me..{count}</h1><br/>
      <button onClick={changeIncrement}>increment new on button</button>      
    </div>
  )
}

export default App