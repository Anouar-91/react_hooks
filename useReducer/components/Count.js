import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment': 
      return state +1
    case 'decrement': 
      return state -1
    case 'reinitialise': 
      return initialState
    default:
      return state
  }
}
function Count() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="count">
      <h1>{count}</h1>
      <button className="btn btn-success" onClick={() => dispatch('increment')}>+</button>
      <br/>
      <br/>
      <button className="btn btn-danger" onClick={() => dispatch('decrement')}>-</button>
      <br/>
      <br/>
      <button className="btn btn-warning" onClick={() => dispatch('reinitialise')}>0</button>
    </div>
  )
}

export default Count