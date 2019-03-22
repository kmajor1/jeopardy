import React from 'react'
import '../css/QuestionReveal.css'
import AnswerInput from './AnswerInput';

// import react bootstrap comps
import {Row, Col, Container} from 'react-bootstrap'

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
      <div className="question-full col-12 animated zoomIn delay-0.1s" onClick={answerQuestion}>
        <Container>
        <Row>
         <Col>
          {this.props.currentQuestion}
         </Col>
       </Row>
       <Row id="inputHolder">
         <Col xs={8} >
         <AnswerInput />
         </Col>
       </Row>
       
        </Container>
       
      </div>
    )
  }

}

export default QuestionReveal


