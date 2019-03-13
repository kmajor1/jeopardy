import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import './App.css';

import Gameboard from './components/Gameboard'
import Scoreboard from './components/Scoreboard'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      round: 1
    }
  }
  render() {
    return (
      <div className="App">
        <Container>
          {/* we should organize this in some sort of grid */}
          <Gameboard round={this.state.round} />
          
        </Container>
      </div>
    );
  }
}

export default App;
