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
    return (
      <Fragment>
        <tr>
          <td className="question-tile">{this.props.children}</td>
          { (this.props.round === 1) ? jeopardy.map((value,index) => <Question>{value}</Question>) : doubleJeopardy.map((value,index)=> <Question>{value}</Question>)}
          
        </tr>
      </Fragment>
    )
  }
}

export default Category

