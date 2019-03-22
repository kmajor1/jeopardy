import React, { PureComponent } from 'react'
import '../css/Scoreboard.css'
export default class Scoreboard extends PureComponent {
  render() {
    return (
      <div className="col-12 scoreboard animated bounceInUp delay-0.5">
        <h2>Player Name:</h2>
        <br/><br/>
        <h2>Score:</h2>
        <br/><br/>
        <h3>Timer</h3>
      </div>
    )
  }
}




