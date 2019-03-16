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

  

  render(){
    const {answerQuestion} = this.props 
    return(
      <div className="question-full">
        <Container>
        <Row>
         <Col>
          {this.props.currentQuestion}
         </Col>
       </Row>
       <Row id="inputHolder">
         <Col xs={6} >
         <AnswerInput onAnswer={this.onAnswer} />
         </Col>
       </Row>
       
        </Container>
       
      </div>
    )
  }

}

export default QuestionReveal


