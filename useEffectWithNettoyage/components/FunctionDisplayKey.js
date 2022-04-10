import React, {useState, useEffect} from 'react'

const FunctionDisplayKey = () => {
    const [keyCode, setKeyCode]= useState("")

    const handleKeyCode = (e) => {
        console.log("addEventListener ajouté")
        setKeyCode(e.keyCode)
    }
    useEffect(()=> {
        document.addEventListener("keyup",handleKeyCode )
        //equivalent du componendDidUnmount
        return () => {
            console.log("addEventListener retiré")
            document.removeEventListener("keyup",handleKeyCode);
        }
    }, [])
  return (
    <div className='card'>
        <div className="card-body">
            <h1 className="text-center">{keyCode}</h1>
        </div>
    </div>
  )
}

export default FunctionDisplayKey