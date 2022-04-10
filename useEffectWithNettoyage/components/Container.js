import React, {useState}from 'react'
import ClassDisplayKey from './ClassDisplayKey'
import FunctionDisplayKey from './FunctionDisplayKey'

const Container = () =>{
    const [show, setShow] = useState(true)
    const btnDisplay = show ? 'Cacher' : "Afficher"
  return (
    <div>
        <button className="btn btn-primary mt-3 mb-3" onClick={() => {setShow(!show)}}>{btnDisplay}</button>
        
        {
            show && <FunctionDisplayKey />
        }
{/*         {
            show && <ClassDisplayKey />
        } */}

    </div>
  )
}

export default Container