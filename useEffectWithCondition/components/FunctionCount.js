import React, {useState, useEffect} from 'react'

const FunctionCount = () => {
    const [count, setCount]= useState(0);
    const [name, setName] = useState("")
    //Elle s’enclenche à chaque render, au montage, mise à jour et démontage. 
    // etant donnée qu'on a mis le state count en 2eme paramètre de la fonction, la fonction mise en 1ère paramètre sera appelé si et seulement si ce state change.
    useEffect(() => {
        console.log("mise à jour du titre via useEffect")
        document.title = `vous avez cliquer ${count} fois`
    }, [count])

  return (
    <div>
        <h1>FuntionCount count: {count}</h1>
        <h1>FuntionCount name: {name}</h1>
        <button onClick={() => setCount(count+1)}>Cliquez</button>
        <input type="text" value={name} onChange={(e) => {
            setName(e.target.value)
        }}/>

    </div>
  )
}

export default FunctionCount