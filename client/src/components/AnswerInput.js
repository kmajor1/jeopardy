import React from 'react';
import {Form} from 'react-bootstrap'

// import custom CSS
import '../css/AnswerInput.css'

class AnswerInput extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userInput:''
    }

  }

  userInputHandler = (e) => {
    this.setState({userInput: e.target.value})
  }

  render(){
    return (
      <div>
        <Form onSubmit={ this.props.onAnswer(this.state.userInput)}>
          <Form.Control id="answerInput" autoComplete="new-password" value='' onChange={this.userInputHandler} type="text" placeholder="Trebek is waiting..." />
          <Form.Control id="submit" type="submit" className="d-none" />
        </Form>
      </div>
    )
  }
}

export default AnswerInput