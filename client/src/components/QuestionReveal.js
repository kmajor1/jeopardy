import React from 'react'
import '../css/QuestionReveal.css'

class QuestionReveal extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  onAnswer(){
    // what happens when the user answers 

  }

  render(){
    const {answerQuestion} = this.props 
    return(
      <div className="question-full" onClick={answerQuestion}>
       {this.props.currentQuestion}
      </div>
    )
  }

}

export default QuestionReveal


