import React from 'react'

// import the Sub-components of the gameboard
import Category from './Category';
import QuestionReveal from './QuestionReveal';
import Scoreboard from './Scoreboard';


// import the css 
import '../css/gameboard.css'

class Gameboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStarted: false,
      boardView: true,
      currentQuestion: {},
      board: [
        {
          Category: 'GUINNESS RECORDS',
          tiles: [
            { question: `Working with more than 4.5 million donors, this American org. is the world's largest blood provider`, answer: 'The Red Cross' }, { question: 'B', answer: '2' }, { question: 'C', answer: '3' }, { question: 'D', answer: '4' }, { question: 'E', answer: '5' }
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

  }

  showQuestion = (question) => (event) => {
    this.setState({
      boardView: false,
      currentQuestion: question
    })
  }

  answerQuestion = (e) => {this.setState({boardView: true})}

  render() {
    return (
      this.state.boardView ?
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <table className="animated bounceInRight delay-1s">
                <tbody>
                  {/* inline function that maps the categories array in state */}
                  {this.state.board.map((value, index) =>
                    (<Category
                      key={value.Category}
                      tiles={this.state.board[index].tiles}
                      showQuestion={this.showQuestion}
                      {...this.props}>
                      {value.Category}
                    </Category>))}
                </tbody>
              </table>
            </div>
            <div className="col-4">
              <Scoreboard />
            </div>
          </div>
        </div>
        :<QuestionReveal 
          currentQuestion={this.state.currentQuestion}
          answerQuestion={this.answerQuestion}
         />
    )
  }
}

export default Gameboard; 
