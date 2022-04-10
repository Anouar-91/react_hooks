import React, { Component } from 'react'

export class ClassDisplayKey extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         keyCode: null
      }
    }
    handleKeyCode = (e) => {
        console.log("test")
        this.setState({ 
            keyCode: e.keyCode 
        })
    }
    componentDidMount() {
        document.addEventListener("keyup",this.handleKeyCode )
    }
    //lorsque le component est détruit, on supprime le EventListener
    componentWillUnmount(prevProps, prevState) {
        console.log("je suis dans le CDUnmount")
        document.removeEventListener("keyup",this.handleKeyCode )

    }
  render() {
      const {keyCode} = this.state
    return (
      <div className='card'>
          <div className="card-body">
              <h1 className="text-center">{keyCode}</h1>
          </div>
      </div>
    )
  }
}

export default ClassDisplayKey