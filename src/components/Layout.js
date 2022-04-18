import React, { useState, useRef} from 'react'



const Layout =() =>  {
    const [count, setCount] = useState(0)
    React.useEffect(() => {
        //effect
        
    }, [count])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Layout