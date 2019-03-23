import React from 'react'

// import the Sub-components of the gameboard
import Category from './Category'
import QuestionReveal from './QuestionReveal';
import API from './utils/API'
import Question from './Question'


// import the css 
import '../css/gameboard.css'

class Gameboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boardView: true,
      currentQuestion: '',
      currentAnswer: '',
      currentQuestionValue: 0,
      score: 0,
      board:[]
    
    }
  }

  componentDidMount() {
    // call API.getCategories which would call our backend 
    // variable that stores initial game board state     
    let gameboard = []
    let promises = []
    API.Categories()
      .then(response => {
        gameboard = response
        console.log(gameboard)
        console.log(gameboard.length)
      })
      .then(response => {
        for (var i = 0; i < gameboard.length; i++) {
          promises.push((API.Questions(gameboard[i].id)))
        }
      })
          .then(res => {
            Promise.all(promises)
              .then(response => {
                console.log('test')
                console.log(response)
                for (var i = 0; i < response.length; i++) {
                  gameboard[i].tiles = response[i]
                }
                console.log(gameboard.length)
                for (var j = 0; j < gameboard.length; j++){
                  console.log(gameboard[j].tiles.length)
                  for (var k = 0; k < gameboard[j].tiles.length; k++){
                    gameboard[j].tiles[k].answered = false 
                    
                  }
                }
                console.log(gameboard)
                
                this.setState({board: gameboard})
              })
          })
            
            }


  showQuestion = (question, answer, catIndex, questionIndex) => (event) => {
    if (this.state.board[catIndex].tiles[questionIndex].answered){
      return 
    }
    // calculate the value of the question given its question index 
    // 0 represents lowest value 
    const questionValue = (questionIndex++)*200; 
    this.setState({currentQuestionValue: questionValue})

    this.setState((state,props) => {
       const updatedBoard = state.board 
       updatedBoard[catIndex].tiles[questionIndex].answered = true  
      return (
        {
          
          board: updatedBoard,
          boardView: false,
          currentQuestion: question,
          currentAnswer: answer,
          
        }
      )
    })

    
  }

  

  answerQuestion = (userStuff) => (e) => {
    // check the answer by extracting only needed parts of answer 
    e.preventDefault()
    let correctAnswer = this.state.currentAnswer.replace(/<[^>]*>/g, '')
    correctAnswer = correctAnswer.replace(/\s/g, '')
    correctAnswer = correctAnswer.toLowerCase()
    userStuff = userStuff.replace(/\s/g, '')
    userStuff = userStuff.toLowerCase()

    if (correctAnswer === userStuff) {
      alert('correct!')
      this.setState((state,props) => ({score: state.currentQuestionValue + state.score}))
    }
    else {
      alert('WRONG!')
      this.setState((state,props) => ({score: state.score - state.currentQuestionValue}))
    }
    console.log('the correct answer')
    console.log(correctAnswer)
    console.log('the user input')
    console.log(userStuff)
     this.setState({boardView: true})
     
     
     

  }

    

  render() {
    return (
      this.state.boardView ?
        <table className="col-12 animated bounceInUp delay-1s">
          <tbody>
            {/* inline function that maps the the categories array in state */}
            {this.state.board.map((value, index) =>
              (<Category
                key={index}
                cIndex={index}
                tiles={this.state.board[index].tiles}
                showQuestion={this.showQuestion}
                answerQuestion={this.answerQuestion}
                testMethod={this.testMethod}
                {...this.props}>
                {value.Category}
              </Category>))}
          </tbody>
        </table>
        :
        <QuestionReveal
          question={this.state.currentQuestion}
          answer={this.state.currentAnswer}
          answerQuestion={this.answerQuestion}

        />



    )
  }
}

export default Gameboard; 
