import React from 'react'
import Board from '../components/Board'
import Quiz from '../quiz_logic/Quiz'
import Collection from '../quiz_logic/Collection'
import Tracker from '../quiz_logic/Tracker'
import WinChecker from '../quiz_logic/WinChecker'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: null
    }
    this.apiResponseAction = this.apiResponseAction.bind(this)
  }

  componentDidMount() {
    const request = new XMLHttpRequest()
    request.open('GET', this.props.url)
    request.onload = this.apiResponseAction
    request.send(null)
  }

  render() {
    return (this.state.quiz) ?
      <Board quiz={this.state.quiz} /> :
      <div className="app-container">Loading...</div> 
  }

  apiResponseAction(event) {
    const jsonString = event.target.responseText
    const data = JSON.parse(jsonString)
    const quiz = new Quiz({
      collection: new Collection(data.sportspeople),
      winChecker: new WinChecker(),
      tracker: new Tracker({totalRounds: 4}),
      user: {name: "Player 1"},
      compareBy: 'points'
    })
    quiz.showCards()
    this.setState({
      quiz: quiz
    })
  }
}

export default App