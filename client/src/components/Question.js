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
    const {question} = this.props 
    return (
      <Fragment>
        <div>
          <td onClick={this.props.showQuestion(question)} 
              className="question-tile">{this.props.children}</td>
        </div>
      </Fragment>
    )
  }
}

export default Question 