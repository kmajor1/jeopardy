import React from 'react';
import API from "./utils/API";
import { Auth } from 'aws-amplify';

// import custom CSS
import '../css/AnswerInput.css'

class TestButton extends React.Component{

  test = ()=>{
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        <button onClick={this.test}>Test</button>
      </div>
    )
  }
}

export default TestButton