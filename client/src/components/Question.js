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
    const hidden = <Fragment>
      <td className="question-tile">{this.props.children}</td>
    </Fragment>
    const revealed = <div>Test</div>
    

    return (
      this.state.notClicked ? hidden : revealed
    )
  }
}

export default Question 