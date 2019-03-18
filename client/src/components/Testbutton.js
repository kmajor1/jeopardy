import React from 'react';
import API from "./utils/API";

// import custom CSS
import '../css/AnswerInput.css'

class TestButton extends React.Component{

  test = ()=>{
    console.log("test")
    API.initGame()
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