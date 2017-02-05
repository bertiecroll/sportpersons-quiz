import React from 'react'
import Display from './Display'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="quiz-component">
        <Display cardsOnShow={this.props.cardsOnShow}/>
      </div>
    )
  }

}

export default Quiz