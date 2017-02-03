import React from 'react'
import Display from './Display'

class Board extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="quiz-board">
        <Display cardsOnShow={this.props.quiz.cardsOnShow}/>
      </div>
    )
  }

}

export default Board