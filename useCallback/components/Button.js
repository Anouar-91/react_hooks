import React from 'react'

function Button({btnColor, increment, handleClick, children}) {
  console.log(`button ${children}`)
  return (
    <button onClick={() => handleClick(increment)} className={`btn btn-${btnColor}`}>+{increment} %</button>
  )
}

export default React.memo(Button)