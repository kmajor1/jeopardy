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
     
    return(
      <div className="question-full col-12 animated zoomIn delay-0.5s">
        <Container>
        <Row>
         <Col>
          {this.props.question}
         </Col>
       </Row>
       <Row id="inputHolder">
         <Col xs={6} >
         <AnswerInput onAnswer={this.props.answerQuestion} />
         </Col>
       </Row>
       
        </Container>
       
      </div>
    )
  }

}

export default QuestionReveal


