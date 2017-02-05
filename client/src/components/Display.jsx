import React from 'react'
import Card from './Card'

import CollectionHelper from '../utils/CollectionHelper'

class Display extends React.Component {
  constructor(props) {
    super()
    this.state = {
      topIndex: null
    }
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.topIndex)
  }

  render() {
    const cards = this.props.cardsOnShow.map((card, index) => {
      return <Card
        styleName={(this.state.topIndex !== null) ? "card-no-click" : "card-click"}
        handleClick={(this.state.topIndex !== null) ? null : this.handleCardClick}
        key={index}
        index={index}
        topIndex={this.state.topIndex}
        card={card}
        />
    })
    const round = this.props.cardsOnShow.length - 1

    return (
      <div className="card-display">
        <h2>Round: {round}</h2>
        {cards}
      </div>
    )
  }

  handleCardClick(event) {
    const topIndex = CollectionHelper.findTopItemIndex('points', this.props.cardsOnShow)
    this.setState({ topIndex: topIndex })
    
    const chosenIndex = parseInt(event.target.getAttribute('value'))
    const result = (topIndex === chosenIndex)

    setTimeout(() => {
      this.setState({ topIndex: null })
      this.props.updateScoreCard(result)
    }, 1500)
  }
}

export default Display