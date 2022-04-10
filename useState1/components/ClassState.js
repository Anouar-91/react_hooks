import React, { Component } from 'react'

class ClassState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    handleClick = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
  render() {
    return (
      <div>
          <h1>ClassState</h1>
          <p>Class State : {this.state.count}</p>
          <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

export default ClassState 
