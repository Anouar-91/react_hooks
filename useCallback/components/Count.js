import React from 'react'

function Count({count, bgColor, text}) {
    const progress = {width: `${count}%`}
    console.log(`je suis dans le composant ${text}`)
  return (
    <>
        <p className="h1">{count}%</p>
        <div className="progress">
            <div className={`progress-bar progress-bar-striped bg-${bgColor}`} role="progressbar" style={progress}>

            </div>
        </div>
    </>
  )
}

export default React.memo(Count)