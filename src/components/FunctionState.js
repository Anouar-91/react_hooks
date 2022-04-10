import React from 'react'
import {useState} from 'react'

 const FunctionState = () => {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const addOne = () => {
        setCounter(prevCounter => prevCounter+ 1)
    }
  return (
    <div>
        <h1>FunctionState</h1>
        <p>Function state 1 : {counter}</p>
        <button onClick={addOne}>+</button>
        <p>Function state 2 : {counter2}</p>
        <button onClick={() => setCounter2(prevCounter2 => prevCounter2 + 1)}>+</button>
    </div>
  )
}

export default FunctionState
