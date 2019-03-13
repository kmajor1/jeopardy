import React from 'react'
import {Fragment} from 'react'

// import CSS
import '../css/Question.css'

class Question extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notClicked: true
    }
  }
  render(){
    const hidden = <div>
      <td className="question-tile">{this.props.children}</td>
    </div>
    const revealed = <div>
      <td className="question-tile">{this.props.question}</td>
    </div>

    return (
      this.state.notClicked ? hidden : revealed
    )
  }
}

export default Question 