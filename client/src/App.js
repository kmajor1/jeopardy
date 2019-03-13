import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import './App.css';

import Gameboard from './components/Gameboard'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      doubleJeopardy: false,
      isStarted: false 
    }
  }

  render() {
    return (
      <div className="App">
        
          {/* we should organize this in some sort of grid */}
          <Gameboard doubleJeopardy={this.state.doubleJeopardy} />
          
        
      </div>
    );
  }
}

export default App;
