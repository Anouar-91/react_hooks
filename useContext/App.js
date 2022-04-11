import React, { Component } from 'react';
import Profile from './components/Profile';
import {MyContext, ColorContext} from './components/MyContext';
 
class App extends Component {
  state = {
    user: {
      name: 'Vegeta',
      age:8
    }
  }
  render(){
    return (
      <MyContext.Provider value={this.state.user}>
        <ColorContext.Provider value="red">
        <Profile info={this.state.user} />
        </ColorContext.Provider>
      </MyContext.Provider>
    );
  }

}

export default App;