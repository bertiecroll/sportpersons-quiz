import React from 'react'

import { quotes } from '../../data/quotes'
import CollectionHelper from '../utils/CollectionHelper'

class End extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {user, result, resetQuiz} = this.props
    const sampleQuote = CollectionHelper.sample(quotes, 1)[0]

    const content = result ?
    <div><h4>Congratulations {user}! You Win!</h4></div> :
    <div>
      <h4>Better luck next time {user}</h4>
      <p>'{sampleQuote.quote}'</p>
      <h5>-{sampleQuote.author}</h5>
    </div>

    return (
      <div className="end-component">
        {content}
        <button onClick={resetQuiz}>Try Again</button>
      </div>
    )
  }
}

export default End