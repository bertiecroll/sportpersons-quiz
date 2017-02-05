import React from 'react'
import Board from '../components/Board'
import Quiz from '../quiz_logic/Quiz'
import CollectionHelper from '../utils/CollectionHelper'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.apiResponseAction = this.apiResponseAction.bind(this)
  }

  componentDidMount() {
    const request = new XMLHttpRequest()
    request.open('GET', this.props.url)
    request.onload = this.apiResponseAction
    request.send(null)
  }

  render() {
    return (this.quiz) ?
      <Board cardsOnShow={this.state.cardsOnShow} /> :
      <div className="app-container">Loading...</div> 
  }

  apiResponseAction(event) {
    const jsonString = event.target.responseText
    const data = JSON.parse(jsonString)
    this.quiz = new Quiz({
      collection: new Collection(data.sportspeople),
      winChecker: new WinChecker(),
      tracker: new Tracker({totalRounds: 4}),
      user: {name: "Player 1"},
      compareBy: 'points'
    })
  }
}

const mapStateToProps = function(state) {
  const amountOfCards = state.scoreCard.length + 2
  return {
    user: state.user
    cardsOnShow: CollectionHelper.sample(state.quiz_data, amountOfCards) 
  }
}

export default App