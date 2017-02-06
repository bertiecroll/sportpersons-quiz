import React from 'react'

import { quotes } from '../../data/quotes'
import CollectionHelper from '../utils/CollectionHelper'

class End extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const {user, result, resetQuiz} = this.props
    const sampleQuote = CollectionHelper.sample(quotes, 1)[0]

    const content = result ?
    <div>
      <h1>Congratulations <strong>{user}!</strong></h1>
      <h1>You Win!</h1>
      <div className="champion-image" />
    </div> :
    <div>
      <h2>Better luck next time {user}</h2>
      <h3><strong>'{sampleQuote.quote}'</strong></h3>
      <h4>-{sampleQuote.author}</h4>
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