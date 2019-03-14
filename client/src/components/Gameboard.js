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
      isStarted: false,
      categories: []
    }
  }

  componentDidMount(){
    // const categories will be replaced by an API call that returns a set of categories
    // from our back-end 
    const categories = ['Politics','Sports','Movies','Music','Apple']
    // set the state of the gameboard to the categories 
    this.setState({categories: categories}) 
     
  }

  
  
  render(){
    return (
      
        <table>
          <tbody>
          {/* inline function that maps the the categories array in state */}
          {this.state.categories.map((value,index) => (<Category key={index} {...this.props}>{value}</Category>))}
          </tbody>
        </table>
      
    )
  }
  }

  export default Gameboard; 
