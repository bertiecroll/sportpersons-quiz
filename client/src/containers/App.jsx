import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as QuizActions from '../actions/quiz'

import CollectionHelper from '../utils/CollectionHelper'
import ResultTracker from '../utils/ResultTracker'

import Quiz from '../components/Quiz'
import Start from '../components/Start'


class App extends React.Component {
  constructor(props) {
    super()
    this.apiResponseAction = this.apiResponseAction.bind(this)
  }

  componentDidMount() {
    const request = new XMLHttpRequest()
    request.open('GET', this.props.url)
    request.onload = this.apiResponseAction
    request.send(null)
  }

  render() {
    const {user, totalRounds, cardsOnShow, result, dispatch} = this.props
    const setUserPrefs = bindActionCreators(QuizActions.setUserPrefs, dispatch)
    const updateScoreCard = bindActionCreators(QuizActions.updateScoreCard, dispatch)
    const resetQuiz = bindActionCreators(QuizActions.resetQuiz, dispatch)

    return (user) ?
      <Quiz
        updateScoreCard={updateScoreCard}
        resetQuiz={resetQuiz}
        totalRounds={totalRounds}
        cardsOnShow={cardsOnShow}
        user={user}
        result={result}
      /> :
      <Start setUserPrefs={setUserPrefs}/> 
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
    totalRounds: state.totalRounds,
    result: ResultTracker.check(state.scoreCard, state.totalRounds)  
  }
}

export default connect(mapStateToProps)(App)