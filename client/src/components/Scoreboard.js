import React, { PureComponent } from 'react'
import '../css/Scoreboard.css'



class Scoreboard extends PureComponent {
  render() {
    return (
      <div className="col-12 scoreboard animated bounceInleft delay-1s">
        <p><strong>Player:</strong></p>
        <p><strong>Score:</strong></p>
      </div>
    )
  }
}

export default Scoreboard

