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
    // call API.getCategories which would call our backend 
    // backend would call jService and ask for 5 random categories 
    // would return them here 
    const categories = ['Soccer','Sports','Movies','Music','Apple']
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
