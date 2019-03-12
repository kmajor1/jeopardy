import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import { UserForm } from './components/UserForm';
import './App.css';
import Gameboard from './components/Gameboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;
