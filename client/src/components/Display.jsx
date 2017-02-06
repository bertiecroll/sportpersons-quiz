import React from 'react'
import Card from './Card'
import MessageBox from './MessageBox'

import CollectionHelper from '../utils/CollectionHelper'

class Display extends React.Component {
  constructor(props) {
    super()
    this.state = {
      topIndex: null,
      chosenIndex: null
    }
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.topIndex)
  }

  render() {
    const { topIndex, chosenIndex } = this.state
    const { cardsOnShow, user, totalRounds } = this.props

    const round = cardsOnShow.length - 1
    const cards = cardsOnShow.map((card, index) => {
      return <Card
        styleName={(chosenIndex !== null) ? "card-no-click" : "card-click"}
        handleClick={(chosenIndex !== null) ? null : this.handleCardClick}
        key={index}
        index={index}
        topIndex={topIndex}
        card={card}
        />
    })
    
    return (
      <div className="quiz-display">
        <MessageBox
          user={user}
          totalRounds={totalRounds}
          chosenCard={cardsOnShow[chosenIndex]}
          round={round}
        />
        <div className="card-display">
          {cards}
        </div>
      </div>
    )
  }

  handleCardClick(event) {
    const topIndex = CollectionHelper.findTopItemIndex('points', this.props.cardsOnShow)
    const chosenIndex = parseInt(event.target.getAttribute('value'))
    this.setState({ chosenIndex:  chosenIndex })

    setTimeout(() => {
      this.setState({ topIndex: topIndex })  
    }, 1000)

    const result = (topIndex === chosenIndex)
    setTimeout(() => {
      this.setState({ topIndex: null, chosenIndex: null })
      this.props.updateScoreCard(result)
    }, 3000)
  }
}

export default Display