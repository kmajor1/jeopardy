import React, { PureComponent } from 'react'
import '../css/Scoreboard.css'



class Scoreboard extends PureComponent {
  render() {
    return (
      <div className="col-6">
        <p className="scoreboard"><strong>${this.props.score}</strong></p>
      </div>
    )
  }
}

export default Scoreboard

