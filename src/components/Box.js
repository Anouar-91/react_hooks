import React, {useState, useEffect, useRef} from 'react'
import Content from './Content'

function Box() {
    const [height, setHeight] = useState(100)
    const boxRef =  useRef()
    useEffect(() =>{
        if(boxRef.current.getBoundingClientRect().height < 150){
            setHeight(height + 100)
        }
     

    }, [height])
    const boxStyle = {
        width : '400px',
        height: `${height}px`,
        margin: 'O auto',
        backgroundColor: height == 100 ? 'red' : "blue"
    }
  return (
    <div ref={boxRef} style={boxStyle}>
        {`HEIGHT : ${height}`}
        <Content />
    </div>
  )
}

export default Box