import React from 'react';
import API from "./utils/API";
import { Auth } from 'aws-amplify';
import Scoreboard from './Scoreboard'

// import custom CSS
import '../css/Header.css'

class TestButton extends React.Component{

  logut = ()=>{
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="header animated slideInDown delay-0.5s col-12">
        <div className="row">
        <div className="col-10">
          <Scoreboard></Scoreboard>
        </div>
        <div className="col-2">
          <button onClick={this.logut}>Logout</button>
        </div>
        </div>
      </div>
    )
  }
}

export default TestButton