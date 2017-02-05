import React from 'react'

const Card = function({styleName, card, index, topIndex, handleClick}) {

  const mvpImage = (index === topIndex) ?
    <img className="mvp-logo" src="/images/MVPlogo.png" /> :
    null

  const points = (topIndex !== null) ?
    <h4>Points: {card.points.toFixed(2)}</h4> :
    null

  return (
    <div className={styleName}>
      {mvpImage}
      <h4>{card.full_name}</h4>
      <img src={card.profile_picture_url} onClick={handleClick} value={index}/>
      {points}
    </div>
  )
}

export default Card