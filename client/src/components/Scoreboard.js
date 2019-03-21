import React, { Component } from 'react'
import '../css/Scoreboard.css';
import Testbutton from './Testbutton'

class Scoreboard extends Component {
  render() {
    return (
      <div class="outer-scoreboard">
        <div className="scoreboard animated bounceInUp delay-1s">
          <h1>SCOREBOARD</h1>
          <br/><br/>
          <h3>Player 1</h3>
          <h4>Current Score is: </h4>
          <br/><br/><br/>
          <h3>Timer can go here</h3>
          <h4>Time left:  </h4>
          <br/><br/>
        </div>
        <br/>
        <div className="button animated bounceInLeft delay-1s">
        <h4>Test Button</h4>
          <Testbutton />
        </div>
      </div>
    )
  }
}

export default Scoreboard
