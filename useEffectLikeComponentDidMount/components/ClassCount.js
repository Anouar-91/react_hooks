import React, { Component } from 'react'

class ClassCount extends Component {
    state= { 
        count: 0, 
        name:""
    }
    componentDidMount(){
        document.title = `vous avez cliquer ${this.state.count} fois`
        console.log("je suis dans componentDidMount")
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.count != prevState.count){
            console.log("je suis dans le CDU")
            document.title = `vous avez cliquer ${this.state.count} fois`
        }
    }
    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }
  render() {
    return (
        <div>
          <h1>ClassCount count : {this.state.count}</h1>
          <h1>ClassCount name : {this.state.name}</h1>
          <button onClick={this.handleClick}>Cliquez</button>
          <input type="text" value={this.state.name} onChange={e => {
              this.setState({
                  name: e.target.value
              })
          }}/>
        </div>
    )
  }
}

export default ClassCount