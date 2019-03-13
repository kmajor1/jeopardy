import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import './App.css';

import Gameboard from './components/Gameboard'
import UserForm from './components/UserForm'
import ScoreBoard from './components/ScoreBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <UserForm />
        </Container>
      </div>
    );
  }
}

export default App;
