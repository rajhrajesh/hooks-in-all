import React, {useRef} from 'react'

const Focus = () => {
    const inputEle = useRef()

    const focusInput = () => {
        inputEle.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputEle}/>
        <button onClick={focusInput}>Focous Btn</button>
    </div>
  )
}

export default Focus