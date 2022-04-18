import React, {useRef, useState, useEffect} from 'react'



function Input() {
    const [count, setCount] = useState(0)
    const setIntervalRef = useRef()
    useEffect(() => {
        console.log('test')
        setIntervalRef.current = setInterval(() => {
            setCount(prevCount => {
                return prevCount + 1;
            }) 
            
        }, 1000);
    }, [])
    const clear = () => {
        clearInterval(setIntervalRef.current)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={clear}>Stop</button>
    </div>
  )
}

export default Input