import React from 'react'

// import the Sub-components of the gameboard
import Category from './Category'
import QuestionReveal from './QuestionReveal';
import API from './utils/API'


// import the css 
import '../css/gameboard.css'
import Axios from 'axios';

class Gameboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStarted: false,
      boardView: true,
      currentQuestion: '',
      currentAnswer: '',
      currentQuestionValue: 0,

      board: [
        {
          Category: 'GUINNESS RECORDS',
          tiles: [
            { question: `Working with more than 4.5 million donors, this American org. is the world's largest blood provider`, answer: 'The Red <i>Cross</i>' }, { question: 'B', answer: '2' }, { question: 'C', answer: '3' }, { question: 'D', answer: '4' }, { question: 'E', answer: '5' }
          ]

        },
        {
          Category: 'Politics',
          tiles: [
            { question: 'A', answer: '1' }, { question: 'B', answer: '2' }, { question: 'C', answer: '3' }, { question: 'D', answer: '4' }, { question: 'E', answer: '5' }
          ]

        },
        {
          Category: 'Soccer',
          tiles: [
            { question: 'A', answer: '1' }, { question: 'B', answer: '2' }, { question: 'C', answer: '3' }, { question: 'D', answer: '4' }, { question: 'E', answer: '5' }
          ]

        },
        {
          Category: 'Hockey',
          tiles: [
            { question: 'A', answer: '1' }, { question: 'B', answer: '2' }, { question: 'C', answer: '3' }, { question: 'D', answer: '4' }, { question: 'E', answer: '5' }
          ]

        },
        {
          Category: 'Basketball',
          tiles: [
            { question: 'A', answer: '1' }, { question: 'B', answer: '2' }, { question: 'C', answer: '3' }, { question: 'D', answer: '4' }, { question: 'E', answer: '5' }
          ]

        }
      ]
    }
  }

  componentDidMount() {
    // call API.getCategories which would call our backend 
    // variable that stores initial game board state 
    let gameboard = []
    API.Categories()
      .then(function (response) {
        gameboard = response
        console.log(gameboard)
        console.log(gameboard.length)
      })
      .then(function (response) {
        
        let promises = []
        for (var i = 0; i < gameboard.length; i++) {
          promises.push((API.Questions(gameboard[i].id)))
        }
        Promise.all(promises)
        .then(function(response){
          console.log('test')
          console.log(response)
        })
      })
          
}

  showQuestion = (question, answer) => (event) => {
    this.setState({
      boardView: false,
      currentQuestion: question,
      currentAnswer: answer
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

    // correctAnswer = correctAnswer.match(/[^\W_]+/)

    if (correctAnswer === userStuff) {
      alert('correct!')
    }
    console.log('the correct answer')
    console.log(correctAnswer)
    console.log('the user input')
    console.log(userStuff)
    this.setState({ boardView: true })
  }

  render() {
    return (
      this.state.boardView ?
        <table>
          <tbody>
            {/* inline function that maps the the categories array in state */}
            {this.state.board.map((value, index) =>
              (<Category
                key={value.Category}
                tiles={this.state.board[index].tiles}
                showQuestion={this.showQuestion}
                answerQuestion={this.answerQuestion}
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
