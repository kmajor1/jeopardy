
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'
import Gameboard from './components/Gameboard'
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import awsmobile from './aws-exports'
import Header from './components/Header'
// import Scoreboard from './components/Scoreboard';



  


Amplify.configure(awsmobile);


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
      <Router>
        <div className="App">
            <Header></Header>
            {/* we should organize this in some sort of grid */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <Route exact path='/' render={(props) => (<Gameboard {...props}  doubleJeopardy={this.state.doubleJeopardy}  />)} />
                </div>
                  {/* <Scoreboard /> */}
              </div>
            </div> 
        </div>
      </Router>
    );
  }
}

export default withAuthenticator(App, false)  
