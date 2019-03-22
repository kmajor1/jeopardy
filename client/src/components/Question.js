import React from 'react'
import {Fragment} from 'react'

// import CSS
import '../css/Question.css'

class Question extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answerAttempted: false,
      question: props.question,
      answer: props.answer 
    }
  }

  answerAttempted(){
    this.setState({answerAttempted: true})
  }

  render(){
    
    
    return (
      <Fragment>
      <td onClick={this.props.showQuestion(this.state.question, this.state.answer)} className="question-tile">{this.props.children}</td>
    </Fragment>
    )
  }
}

export default Question 