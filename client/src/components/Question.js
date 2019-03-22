import React from 'react'
import {Fragment} from 'react'

// import CSS
import '../css/Question.css'

class Question extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answered: false,
      question: props.question,
      answer: props.answer,
      
    }
  }

  render(){
    
    return (
      <Fragment>
      <td onClick={this.props.showQuestion(this.state.question, this.state.answer, this.props.cIndex,this.props.qIndex)} className="question-tile">{this.props.answered ? '' : this.props.children}</td>
    </Fragment>
    )
  }
}

export default Question 