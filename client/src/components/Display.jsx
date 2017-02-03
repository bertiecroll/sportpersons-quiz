import React from 'react'
import Card from './Card'

const Display = function(props) {
  const cards = props.cardsOnShow.map(function(card, index) {
    return <Card key={index} name={card.full_name} image={card.profile_picture_url} />
  })

  return (
    <div className="card-display">
      {cards}
    </div>
  )
}

export default Display