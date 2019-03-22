import React from 'react';
import API from "./utils/API";
import { Auth } from 'aws-amplify';

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
      <div className="header">
        <button onClick={this.logut}>Logout</button>
      </div>
    )
  }
}

export default TestButton