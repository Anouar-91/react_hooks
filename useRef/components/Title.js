import React, {useRef} from 'react'

function Title() {
    console.log("composant titre chargé")
    const h1Renders = useRef(0)
    console.log(h1Renders)
    setInterval(() => {
        h1Renders.current ++;
        console.log(h1Renders.current)
    }, 1000);
  return (
    <div>{h1Renders.current}</div>
  )
}

export default Title