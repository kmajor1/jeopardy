import React from 'react'

// import the Sub-components of the gameboard
import Category from './Category'
import QuestionReveal from './QuestionReveal';
import API from './utils/API'


// import the css 
import '../css/gameboard.css'

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
            console.log(gameboard)
            this.setState({ board: gameboard })
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

  testMethod() {
    console.log(this)
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
    }
    else {
      alert('WRONG!')
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
