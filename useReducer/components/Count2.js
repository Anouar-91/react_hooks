import React, { useReducer } from 'react'

const initialState = {
  count1:0,
  count2:0
}
const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'increment':
      return {...state, count1: state.count1 + action.value}
    case 'decrement':
      return {...state, count1: state.count1 - action.value}
    case 'increment2':
      return {...state, count2: state.count2 + action.value}
    case 'decrement2':
      return {...state, count2: state.count2 - action.value}
    case 'reinitialise':
      return initialState
    default:
      return state
  }
}
function Count() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>{count.count1}</h1>
          <button className="btn btn-success" onClick={() => dispatch({type: 'increment', value: 1})}>+</button>
          <br />
          <br />
          <button className="btn btn-danger" onClick={() => dispatch({type: 'decrement', value: 1})}>-</button>

        </div>
        <div className="col">
          <h1>{count.count2}</h1>
          <button className="btn btn-success" onClick={() => dispatch({type: 'increment2', value: 1})}>+</button>
          <br />
          <br />
          <button className="btn btn-danger" onClick={() => dispatch({type: 'decrement2', value: 1})}>-</button>

        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <button className="btn btn-warning" onClick={() => dispatch({type: "reinitialise"})}>0</button>
      </div>
    </div>

  )
}

export default Count