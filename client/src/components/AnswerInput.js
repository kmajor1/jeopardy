import React from 'react';
import {Form} from 'react-bootstrap'

// import custom CSS
import '../css/AnswerInput.css'

class AnswerInput extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <Form onSubmit>
          <Form.Control id="answerInput" type="text" placeholder="Trebek is waiting..." />
        </Form>
      </div>
    )
  }
}

export default AnswerInput