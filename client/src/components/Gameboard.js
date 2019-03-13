import React from 'react'
import {Fragment} from 'react'
import {Container} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

// import the Sub-components of the gameboard
import Category from './Category'
import Question from './Question'

// import the css 
import '../css/gameboard.css'

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
        <table>
          <Category {...this.props} >Politics</Category>
          <Category {...this.props}>Sports</Category>
          <Category {...this.props}>Entertainment</Category>
          <Category {...this.props}>Why PCs Suck</Category>
          <Category {...this.props}>Why John's PC Sucks</Category>
        </table>
      </Container>
    )
  }
  }

  export default Gameboard; 
