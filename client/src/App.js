import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import QuestionReveal from './components/QuestionReveal'
import './App.css'
import Gameboard from './components/Gameboard'
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import Testbutton from './components/Testbutton'
import API from "./components/utils/API";
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

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
        
          {/* we should organize this in some sort of grid */}
          
          <Route exact path='/' render={(props) => (<Gameboard {...props}  doubleJeopardy={this.state.doubleJeopardy}  />)} />
          
          
        <Testbutton></Testbutton>
      </div>
      
      </Router>
    );
  }
}

export default withAuthenticator(App, {
  includeGreetings: false
});
