import React from 'react'
import {Fragment} from 'react'
import Question from './Question'

const jeopardy = ['$200','$400','$600','$800','$1000']
const doubleJeopardy = ['$400','$800','$1200','$1600','$2000']

class Category extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
      

    }
  }

  
 


  render(){
    const {showQuestion} = this.props
    return (
      <Fragment>
        <tr>
          <td className="question-tile">{this.props.children}</td>
          {this.props.tiles.map((value,index) => (<Question key={index} question={value.question} answer={value.answer} showQuestion={showQuestion} answerQuestion={this.props.answerQuestion}>{this.props.doubleJeopardy ? doubleJeopardy[index] : jeopardy[index]}</Question>))}
          
        </tr>
      </Fragment>
    )
  }
}

export default Category

