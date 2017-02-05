import React from 'react'
import { connect } from 'react-redux'
import * as QuizActions from '../actions/quiz'

import CollectionHelper from '../utils/CollectionHelper'
import ResultTracker from '../utils/ResultTracker'

import Quiz from '../components/Quiz'
import Start from '../components/Start'


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
    return (this.props.user) ?
      <Quiz cardsOnShow={this.props.cardsOnShow} /> :
      <Start /> 
  }

  apiResponseAction(event) {
    const jsonString = event.target.responseText
    const data = JSON.parse(jsonString)
    this.props.dispatch(QuizActions.setQuizData(data.sportspeople))
  }
}


const mapStateToProps = function(state) {
  const amountOfCards = state.scoreCard.length + 2
  return {
    user: state.user,
    cardsOnShow: CollectionHelper.sample(state.quiz_data, amountOfCards),
    result: ResultTracker.check(state.scoreCard, state.totalRounds)  
  }
}

export default connect(mapStateToProps)(App)