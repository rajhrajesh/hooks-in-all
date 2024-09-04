import React, {useState, useEffect, useRef} from 'react'
import './App.css'

const App = () => {

  const [value, setValue] = useState("")
  const count = useRef(0)

  useEffect(()=>{
    count.current = count.current + 1
  })

  const changeValue = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className= "container">
      <h1>
        Nice to meet you..
      </h1>
      <input onChange={changeValue}/>
      <br/>
      <h3>{value}</h3>
      <p>Current {count.current}</p>
    </div>
  )
}

export default App