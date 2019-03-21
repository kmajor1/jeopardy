
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import QuestionReveal from './components/QuestionReveal'
import './App.css'
// import Header from './components/Header'
import Gameboard from './components/Gameboard'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Amplify from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
// import awsmobile from './aws-exports'
import Testbutton from './components/Testbutton'
import API from "./components/utils/API";

  


// Amplify.configure(awsmobile);


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
            {/* <Header /> */}
            {/* we should organize this in some sort of grid */}
            
            <Route exact path='/' render={(props) => (
            <Gameboard 
              {...props}  
              doubleJeopardy={this.state.doubleJeopardy}  />)} />
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App
// withAuthenticator(App, false)  
