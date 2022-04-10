import React, {useState, useEffect} from 'react'

const FunctionCount = () => {
    const [count, setCount]= useState(0);
    const [name, setName] = useState("")
    //Elle s’enclenche à chaque render, au montage, mise à jour et démontage. 
// la fonction s'appelera seulement au chargement du composant vu qu'on a mis un tableau vide en 2ème paramètre
    useEffect(() => {
        console.log("mise à jour du titre via useEffect")
        document.title = `vous avez cliquer ${count} fois`
    }, [])

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