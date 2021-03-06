import React, { useState, useRef} from 'react'



const FancyInput = React.forwardRef((props, ref) => {
    const [count, setCount] = useState(0)
    const inputRef = useRef()
    React.useImperativeHandle(ref, () => ({
        focus: (val) => {
            if(count === 4){
                const colors = ['red', 'blue', 'pink', "purple", 'yellow', 'green', 'orange']
                const style = `4px solid ${colors[val]}`;
                inputRef.current.style.border = style
            }
        }, 
        countMax: ()=> {
            if(count < 5){
                setCount(count+1)
            }
        }
    }))


  return (
    <div>
        <h1>{count}</h1>
        <input ref={inputRef}  type="text"/>
    </div>
  )
})

export default FancyInput