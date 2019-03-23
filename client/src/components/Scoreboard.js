import React, { PureComponent } from 'react'
import '../css/Scoreboard.css'



class Scoreboard extends PureComponent {
  render() {
    return (
      <div className="col-6 scoreboard animated bounceInleft delay-1s">
        <p><strong>Score:${this.props.score}</strong></p>
      </div>
    )
  }
}

export default Scoreboard

