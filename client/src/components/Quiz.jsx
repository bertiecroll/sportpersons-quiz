import React from 'react'
import Display from './Display'
import End from './End'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {user, updateScoreCard, resetQuiz, cardsOnShow, result} = this.props

    const content = (result === null) ?
      <Display
        updateScoreCard={updateScoreCard}
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