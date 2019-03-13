import React from 'react'
import {Fragment} from 'react'
import {Container} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

// import the Sub-components of the gameboard
import Category from './Category'
import ScoreBoard from './ScoreBoard'
import Question from './Question'

class Gameboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStarted: false 
    }
  }

  
  render(){
    return (
      <Container>

      </Container>
    )
  }
  }

  export default Gameboard; 
