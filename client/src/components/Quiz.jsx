import React from 'react'
import Display from './Display'
import End from './End'

class Quiz extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const {user, updateScoreCard, resetQuiz, totalRounds, cardsOnShow, result} = this.props

    const content = (result === null) ?
      <Display
        updateScoreCard={updateScoreCard}
        totalRounds={totalRounds}
        cardsOnShow={cardsOnShow}
        user={user}
      /> :
      <End result={result} user={user} resetQuiz={resetQuiz}/>
    return (
      <div className="quiz-component">
        {content}
      </div>
    )
  }

}

export default Quiz