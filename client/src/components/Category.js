import React from 'react'
import {Fragment} from 'react'
import Question from './Question'
import '../css/Category.css'

const jeopardy = ['$200','$400','$600','$800','$1000']
const doubleJeopardy = ['$400','$800','$1200','$1600','$2000']

class Category extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      index: props.index 
      
      

    }
  }


  render(){
    console.log('rendered category')
    const {showQuestion} = this.props
    return (
      <Fragment>
        <tr>
          <td className="category-tile question-tile">{this.props.children.toUpperCase()}</td>
          {this.props.tiles.map((value,index) => (<Question key={index} cIndex={this.props.cIndex} qIndex={index} question={value.question} answer={value.answer} showQuestion={showQuestion} answerQuestion={this.props.answerQuestion} answered={value.answered}>{this.props.doubleJeopardy ? doubleJeopardy[index] : jeopardy[index]}</Question>))}
          
        </tr>
      </Fragment>
    )
  }
}

export default Category

