import React from 'react'
import {Fragment} from 'react'

class Question extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notClicked: true
    }
  }
  render(){
    const hidden = <Fragment>
      <td>{this.props.children}</td>
    </Fragment>
    const revealed = <Fragment>
      <td>{this.props.question}</td>
    </Fragment>

    return (
      this.state.notClicked ? hidden : revealed
    )
  }
}

export default Question 