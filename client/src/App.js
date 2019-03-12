import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import './App.css';
import Gameboard from './components/Gameboard'
import Scoreboard from './components/ScoreBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Scoreboard />
        </Container>

      </div>
    );
  }
}

export default App;
